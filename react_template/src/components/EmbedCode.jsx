// src/components/EmbedCode.jsx
import React, { useState } from 'react';

const EmbedCode = () => {
  const [copied, setCopied] = useState(false);
  
  const embedCode = `<iframe
  src="${window.location.origin}"
  width="100%"
  height="600px"
  frameborder="0"
  allow="microphone"
></iframe>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-3">Embed Code</h3>
      <div className="relative">
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          {embedCode}
        </pre>
        <button
          onClick={copyToClipboard}
          className={`absolute top-2 right-2 px-3 py-1 rounded-md text-sm transition-colors ${
            copied
              ? 'bg-green-500 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        Add this code to your website where you want the voice bot to appear.
      </p>
    </div>
  );
};

export default EmbedCode;