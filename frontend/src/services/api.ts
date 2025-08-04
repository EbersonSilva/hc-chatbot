// const API_BASE = 'http://localhost:5013/api';

// interface Bot {
//   id: number;
//   nome: string;
//   contexto: string;
// }

// interface Mensagem {
//   botId: number;
//   mensagemUsuario: string;
// }

// export async function getBots(): Promise<Bot[]> {
//   const res = await fetch(`${API_BASE}/bots`);
//   if (!res.ok) throw new Error('Erro ao buscar bots');
//   return res.json();
// }

// export async function createBot(bot: Omit<Bot, 'id'>): Promise<Bot> {
//   const res = await fetch(`${API_BASE}/bots`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(bot),
//   });
//   if (!res.ok) throw new Error('Erro ao criar bot');
//   return res.json();
// }

// export async function sendMessage(dados: Mensagem): Promise<string> {
//   const res = await fetch(`${API_BASE}/chat`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(dados),
//   });
//   if (!res.ok) throw new Error('Erro ao enviar mensagem');
//   const json = await res.json();
//   return json.resposta;
// }

// export async function getHistorico(botId: number) {
//   const res = await fetch(`${API_BASE}/chat/${botId}/mensagens`);
//   if (!res.ok) throw new Error('Erro ao buscar histórico');
//   return res.json();
// }
