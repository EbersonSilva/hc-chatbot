import { useState } from 'react';

export default function BotForm() {
  const [nome, setNome] = useState('');
  const [contexto, setContexto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome.trim() || !contexto.trim()) {
      setMensagem('Preencha todos os campos!');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/bots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, contexto }),
      });

      if (res.ok) {
        setMensagem('Bot criado com sucesso!');
        setNome('');
        setContexto('');
      } else {
        setMensagem('Erro ao criar bot.');
      }
    } catch (error) {
      console.error(error);
      setMensagem('Erro ao se conectar com o servidor.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 p-4 rounded mb-6 shadow-md">
      <h3 className="text-white text-lg mb-4">Criar Novo Bot</h3>

      <div className="mb-2">
        <label className="text-white block mb-1">Nome do Bot:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-2 rounded bg-zinc-700 text-white"
        />
      </div>

      <div className="mb-2">
        <label className="text-white block mb-1">Contexto (instruções para o bot):</label>
        <textarea
          value={contexto}
          onChange={(e) => setContexto(e.target.value)}
          rows={4}
          className="w-full p-2 rounded bg-zinc-700 text-white resize-none"
        />
      </div>

      <button
        type="submit"
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Criar Bot
      </button>

      {mensagem && (
        <p className="mt-2 text-sm text-green-400">{mensagem}</p>
      )}
    </form>
  );
}
