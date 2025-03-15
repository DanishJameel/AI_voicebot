// src/App.jsx
import React, { useState } from 'react';
import BotList from './components/BotList';
import VoiceBot from './components/VoiceBot';
import EmbedCode from './components/EmbedCode';

function App() {
  const [selectedBot, setSelectedBot] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Voice Bot Demo</h1>
          <p className="text-gray-600">Select a bot to start the conversation</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Available Bots</h2>
              <BotList selectedBot={selectedBot} onSelectBot={setSelectedBot} />
            </div>
          </div>

          <div className="lg:col-span-1">
            {selectedBot ? (
              <VoiceBot bot={selectedBot} isActive={true} />
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-gray-600">Select a bot to begin interaction</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8">
          <EmbedCode />
        </div>
      </div>
    </div>
  );
}

export default App;