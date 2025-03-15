// src/utils/speechUtils.js
let recognition = null;
let synthesis = null;

if (typeof window !== 'undefined') {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
  }
  
  synthesis = window.speechSynthesis;
}

export const startSpeechRecognition = (onResult) => {
  if (!recognition) {
    console.error('Speech recognition is not supported in this browser');
    return;
  }

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    onResult(transcript);
  };

  recognition.start();
};

export const stopSpeechRecognition = () => {
  if (recognition) {
    recognition.stop();
  }
};

export const speak = (text) => {
  if (!synthesis) {
    console.error('Speech synthesis is not supported in this browser');
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  synthesis.speak(utterance);
};