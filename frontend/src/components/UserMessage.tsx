// src/components/UserMessage.tsx
interface UserMessageProps {
  text: string;
}

export default function UserMessage({ text }: UserMessageProps) {
  return (
    <div className="text-right mb-2">
      <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">
        {text}
      </div>
    </div>
  );
}
