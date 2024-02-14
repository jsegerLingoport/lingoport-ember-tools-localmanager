// Ensure the changeLocale function is available on the window object
if (typeof window.changeLocale === 'function') {
    // Call the changeLocale function with the desired new locale
    window.changeLocale('eo'); // Example: Change the locale to English (United States)
    console.log('Attempting to change the locale to eo.');
} else {
    // If changeLocale is not a function or not defined, log an error
    console.error('changeLocale function is not defined. Ensure the defining snippet has been executed.');
}