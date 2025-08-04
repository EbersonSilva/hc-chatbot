import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    // Ativa o modo escuro no <html>
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold">Modo Escuro Ativado! 🌙</h1>
    </div>
  );
}

