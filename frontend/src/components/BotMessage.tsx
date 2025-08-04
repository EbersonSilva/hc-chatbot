// src/components/BotMessage.tsx
interface BotMessageProps {
  text: string;
}

export default function BotMessage({ text }: BotMessageProps) {
  return (
    <div className="text-left mb-2">
      <div className="inline-block bg-gray-700 text-white px-4 py-2 rounded-lg max-w-xs">
        {text}
      </div>
    </div>
  );
}
