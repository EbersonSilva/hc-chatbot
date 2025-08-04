import { useEffect, useState } from 'react';

interface Bot {
  id: number;
  nome: string;
}

interface BotSelectorProps {
  selectedBot: Bot | null; // <- novo
  onSelect: (bot: Bot) => void;
}

export default function BotSelector({ selectedBot, onSelect }: BotSelectorProps) {
  const [bots, setBots] = useState<Bot[]>([]);

  useEffect(() => {
    fetch('http://localhost:5013/api/bots')
      .then((res) => res.json())
      .then((data) => {
        console.log('Bots recebidos:', data);
        setBots(data);
      })
      .catch((err) => console.error('Erro ao buscar bots:', err));
  }, []);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const bot = bots.find((b) => b.id === parseInt(e.target.value));
    if (bot) {
      onSelect(bot);
    }
  };

  return (
    <div className="mb-4">
      <label className="text-white mr-2">Selecione um bot:</label>
      <select
        value={selectedBot?.id || ''} // <- mantêm selecionado
        onChange={handleSelect}
        className="bg-zinc-700 text-white p-2 rounded"
      >
        <option value="" disabled>Escolha um bot</option>
        {bots.map((bot) => (
          <option key={bot.id} value={bot.id}>
            {bot.nome}
          </option>
        ))}
      </select>
    </div>
  );
}
