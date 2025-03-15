// src/components/VoiceBot.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { startSpeechRecognition, stopSpeechRecognition, speak } from '../utils/speechUtils';

const VoiceBot = ({ bot, isActive }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');

  const handleStartListening = useCallback(() => {
    setIsListening(true);
    startSpeechRecognition((text) => {
      setTranscript(text);
      // Simulate bot response based on bot type
      const botResponse = `${bot.name} responding to: ${text}`;
      setResponse(botResponse);
      speak(botResponse);
    });
  }, [bot]);

  const handleStopListening = useCallback(() => {
    setIsListening(false);
    stopSpeechRecognition();
  }, []);

  useEffect(() => {
    return () => {
      stopSpeechRecognition();
    };
  }, []);

  if (!isActive) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <img src={bot.avatar} alt={bot.name} className="w-12 h-12 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">{bot.name}</h3>
          <p className="text-sm text-gray-600">{bot.description}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="bg-gray-100 p-3 rounded-lg min-h-[100px]">
          <p className="text-gray-700">{transcript || 'Your message will appear here...'}</p>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg mt-2 min-h-[100px]">
          <p className="text-gray-700">{response || 'Bot response will appear here...'}</p>
        </div>
      </div>

      <button
        onClick={isListening ? handleStopListening : handleStartListening}
        className={`w-full py-2 px-4 rounded-lg transition-colors ${
          isListening
            ? 'bg-red-500 hover:bg-red-600 text-white'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
      >
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
    </div>
  );
};

export default VoiceBot;