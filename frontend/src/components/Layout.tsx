// Pagina de layout principal do frontend
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen text-center bg-gray-900 text-white px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">HC Chatbot</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
