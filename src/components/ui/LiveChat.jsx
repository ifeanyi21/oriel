import React, { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    // Add the Tawk.to script to the page
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/6613bc011ec1082f04dff168/1hquhcsse";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // The component doesn't render any visible content
};

export default LiveChat;
