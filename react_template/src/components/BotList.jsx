// src/components/BotList.jsx
import React from 'react';
import { bots } from '../utils/botData';

const BotList = ({ selectedBot, onSelectBot }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {bots.map((bot) => (
        <div
          key={bot.id}
          className={`p-4 rounded-lg cursor-pointer transition-all ${
            selectedBot?.id === bot.id
              ? 'bg-blue-100 border-2 border-blue-500'
              : 'bg-white hover:bg-gray-50 border-2 border-transparent'
          }`}
          onClick={() => onSelectBot(bot)}
        >
          <div className="flex items-center gap-3">
            <img src={bot.avatar} alt={bot.name} className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="font-semibold">{bot.name}</h3>
              <p className="text-sm text-gray-600">{bot.shortDescription}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BotList;