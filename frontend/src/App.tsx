import { useState } from 'react';
import Layout from './components/Layout';
import MessageInput from './components/MessageInput';
import ChatBox from './components/ChatBox';
import BotSelector from './components/BotSelector';
import BotForm from './components/BotForm';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

interface Bot {
  id: number;
  nome: string;
}

export function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedBot, setSelectedBot] = useState<Bot | null>(null);

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || !selectedBot) return;

    const userMessage: Message = { sender: 'user', text: message };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5013/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          botId: selectedBot.id,
          mensagemUsuario: message,
        }),
      });

      const data = await response.json();

      const botMessage: Message = {
        sender: 'bot',
        text: data.resposta,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Erro ao se comunicar com o bot.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
  <h2 className="text-xl mb-2 text-white">Converse com o chatbot:</h2>
  <BotSelector onSelect={(bot) => {
    setSelectedBot(bot);
    setMessages([]);
  }} />
  
  <BotForm /> {/* Aqui aparece o formulário */}

  {selectedBot && (
    <>
      <ChatBox messages={messages} />
      <MessageInput onSend={handleSendMessage} loading={loading} />
    </>
  )}
</Layout>

  );
}
