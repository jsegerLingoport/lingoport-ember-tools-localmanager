(function() {
  function changeLocale(newLocale) {
    var emberApp;
    if (window.Ember) {
      emberApp = window.Ember.Application.NAMESPACES.find(namespace => namespace instanceof window.Ember.Application);
    }

    if (emberApp) {
      var container = emberApp.__container__;
      var intlService = container.lookup('service:intl');
      if (intlService) {
        intlService.setLocale([newLocale]);
        console.log(`Locale changed to ${newLocale}`);
      } else {
        console.error('Intl service not found.');
      }
    } else {
      console.error('Ember application instance not found.');
    }
  }

  window.changeLocale = changeLocale; // Make it accessible globally
  console.log('changeLocale function is now attached to window.');
})();