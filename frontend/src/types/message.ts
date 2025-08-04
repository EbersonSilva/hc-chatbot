//Define a tipagem da mensagem
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
