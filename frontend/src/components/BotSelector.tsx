import { useEffect, useState } from 'react';

interface Bot {
  id: number;
  nome: string;
}

interface BotSelectorProps {
  onSelect: (bot: Bot) => void;
}

export default function BotSelector({ onSelect }: BotSelectorProps) {
  const [bots, setBots] = useState<Bot[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/bots')
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error('Erro ao buscar bots:', err));
  }, []);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const bot = bots.find((b) => b.id === parseInt(e.target.value));
    if (bot) {
      setSelectedId(bot.id);
      onSelect(bot);
    }
  };

  return (
    <div className="mb-4">
      <label className="text-white mr-2">Selecione um bot:</label>
      <select
        onChange={handleSelect}
        className="bg-zinc-700 text-white p-2 rounded"
        defaultValue=""
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
