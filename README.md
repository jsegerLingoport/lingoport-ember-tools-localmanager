## Changing Locale in Ember Application

### Overview
The provided JavaScript snippet offers a convenient way to dynamically change the locale of your Ember application. This functionality is especially useful for applications that need to support multiple languages and offer users the ability to switch languages on the fly.

### How It Works
The `changeLocale` function searches for the Ember application instance in the global window context. Once it finds the Ember application, it attempts to access the `intl` service. The `intl` service is responsible for internationalization in Ember applications. The function then changes the application's current locale to the new locale specified by the caller. If successful, it logs a message indicating that the locale has been changed. If it cannot find the `intl` service or the Ember application instance, it logs an error message.

### Usage

1. **Ensure Intl Service is Available**: Before using this snippet, ensure that your Ember application has the `intl` service set up. This typically involves adding an internationalization addon to your project, such as `ember-intl`.

2. **Include the Snippet**: Copy the provided JavaScript snippet into a file and include it in your project. Alternatively, you can include the snippet directly in your HTML template or a specific JavaScript file that is loaded with your application.

3. **Invoke `changeLocale`**: To change the application's locale, simply call `changeLocale(newLocale)` from anywhere in your application, where `newLocale` is the locale identifier (e.g., "en-US", "fr-FR").

   ```javascript
   // Example:
   changeLocale('en-US'); // Changes the locale to English (US)