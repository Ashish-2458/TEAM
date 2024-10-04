import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      // Create a new script element
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;

      // Set the source of the script
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

      // Append the script to the document's body
      document.body.appendChild(script);

      // Initialize Google Translate
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
          "google_translate_element"
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div>
      {/* The div where the Google Translate widget will be rendered */}
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;
