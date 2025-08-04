// src/components/BotForm.tsx
import { useState } from 'react';

export default function BotForm() {
  const [nome, setNome] = useState('');
  const [contexto, setContexto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !contexto) return;

    try {
      const response = await fetch('http://localhost:5013/api/bots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, contexto }),
      });

      if (response.ok) {
        setMensagem('Bot criado com sucesso!');
        setNome('');
        setContexto('');
      } else {
        setMensagem('Erro ao criar o bot.');
      }
    } catch (err) {
      console.error(err);
      setMensagem('Erro de conexão com o servidor.');
    }
  };

  return (
    <div className="bg-zinc-800 p-4 rounded mt-6">
      <h3 className="text-white text-lg mb-2">Criar novo bot</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome do bot"
          className="p-2 mr-2 mb-2 rounded w-full bg-zinc-700 text-white"
        />
        <textarea
          value={contexto}
          onChange={(e) => setContexto(e.target.value)}
          placeholder="Contexto do bot"
          className="p-2 mb-2 rounded w-full bg-zinc-700 text-white"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Criar Bot
        </button>
      </form>
      {mensagem && <p className="text-white mt-2">{mensagem}</p>}
    </div>
  );
}
