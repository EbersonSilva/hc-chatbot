// src/pages/CreateBotPage.tsx
import { useState } from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

export default function CreateBotPage() {
  const [nome, setNome] = useState('');
  const [contexto, setContexto] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome.trim() || !contexto.trim()) {
      alert('Preencha o nome e o contexto do bot!');
      return;
    }

    const novoBot = {
      nome: nome.trim(),
      contexto: contexto.trim(),
    };

    try {
      const res = await fetch('http://localhost:5013/api/bots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoBot),
      });

      const botCriado = await res.json();

      // Redireciona para a tela principal já com o novo bot selecionado
      navigate('/', { state: { bot: botCriado } });
    } catch (err) {
      console.error('Erro ao criar bot:', err);
      setMensagem('Erro ao criar bot.');
    }
  };

  return (
    <Layout>
      <div className="bg-zinc-800 p-4 rounded mt-6 text-center max-w-md mx-auto shadow-lg">
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
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            disabled={!nome.trim() || !contexto.trim()}
          >
            Criar Bot
          </button>
        </form>
        {mensagem && <p className="text-white mt-2">{mensagem}</p>}
      </div>
    </Layout>
  );
}
