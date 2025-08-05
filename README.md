# 🤖 ChatBot Customizável com Contexto

Aplicação full-stack que permite criar bots personalizados com contexto e interagir com eles via interface web. O sistema armazena o histórico de conversas e se comunica com a API da OpenAI para gerar respostas inteligentes.

## 🛠️ Tecnologias utilizadas

### Frontend
- React + TypeScript
- Tailwind CSS (dark mode)
- React Router DOM

### Backend
- ASP.NET Core (.NET 6)
- Entity Framework Core + SQLite
- API RESTful

### Outras
- OpenAI API (GPT-3.5 Turbo)
- Git + GitHub

---

## ⚙️ Funcionalidades

- ✅ Criar bots com nome e contexto
- ✅ Selecionar bots para conversar
- ✅ Enviar mensagens e receber respostas com IA (OpenAI)
- ✅ Histórico de conversas por bot
- ✅ Separação frontend e backend
- ✅ Armazenamento local via SQLite

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/chatbot-projeto.git
cd chatbot-projeto
```

### 2. Inicie o backend

```bash
cd backend
dotnet restore
dotnet ef database update
dotnet run
```

O backend estará em: `https://localhost:5013` ou `http://localhost:5013`

### 3. Inicie o frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend rodando em: `http://localhost:5173`

---

## 🔐 Configurando a chave da API da OpenAI

Este projeto utiliza a **API da OpenAI (ChatGPT)** para gerar respostas inteligentes dos bots. Por questões de segurança, **a chave da API não está incluída no repositório**.

### 📍 Onde colocar a chave

Crie um arquivo `appsettings.Development.json` dentro da pasta `backend` com o conteúdo:

```json
{
  "OpenAI": {
    "ApiKey": "sua-chave-secreta-aqui"
  }
}
```

### ✅ Segurança

Esse arquivo está listado no `.gitignore` e **não deve ser enviado para o GitHub**. A chave da OpenAI é pessoal e, caso vazada, pode gerar custos indevidos.

### ✅ Alternativa com variável de ambiente

Você pode usar variáveis de ambiente como alternativa:

**Linux/macOS:**
```bash
export OPENAI_API_KEY="sua-chave"
dotnet run
```

**Windows CMD:**
```cmd
set OPENAI_API_KEY=sua-chave
dotnet run
```

---

## 📌 Observações

- O projeto é um teste técnico e visa demonstrar habilidades com front-end, back-end, API externa e persistência de dados.
- Não é necessário subir a chave da OpenAI no repositório.
- O sistema permite adicionar múltiplos bots com diferentes comportamentos, dependendo do contexto definido.

---

## 👨‍💻 Autor

Desenvolvido por Eberson Silva
[LinkedIn](https://www.linkedin.com/in/ebersonssilva/) | [GitHub](https://github.com/EbersonSilva)
