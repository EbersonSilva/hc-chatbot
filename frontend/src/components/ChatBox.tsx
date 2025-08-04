import { useEffect, useRef } from 'react';
import UserMessage from './UserMessage';
import BotMessage from './BotMessage';


interface Message {
  sender: 'user' | 'bot';
  text: string;
}

interface ChatBoxProps {
  messages: Message[];
}

export default function ChatBox({ messages }: ChatBoxProps) {
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Rola automaticamente para a última mensagem
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col space-y-2 p-4 bg-zinc-800 rounded-md h-[400px] overflow-y-auto shadow-inner">
      {messages.map((msg, index) =>
        msg.sender === 'user' ? (
          <UserMessage key={index} text={msg.text} />
        ) : (
          <BotMessage key={index} text={msg.text} />
        )
      )}
      <div ref={endRef} />
    </div>
  );
}
