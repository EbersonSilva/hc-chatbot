// src/components/MessageInput.tsx
import { useState } from 'react';

interface MessageInputProps {
  onSend: (message: string) => void;
  loading?: boolean;
}

export default function MessageInput({ onSend, loading }: MessageInputProps) {
  const [text, setText] = useState('');

  const handleSend = () => {
    const trimmed = text.trim();
    if (trimmed) {
      onSend(trimmed);
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
        placeholder="Digite sua mensagem..."
        disabled={loading}
      />
      <button
        onClick={handleSend}
        disabled={loading}
        className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 transition"
      >
        {loading ? '...' : 'Enviar'}
      </button>
    </div>
  );
}
