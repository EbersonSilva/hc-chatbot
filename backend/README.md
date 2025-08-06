# 🤖 Chatbot API com ASP.NET Core + Entity Framework + OpenAI

Este é um projeto backend para criação e gerenciamento de bots de chat personalizados, com integração à API da OpenAI (ChatGPT) e persistência em banco de dados SQLite.

---

## 🚀 Tecnologias Utilizadas

- ASP.NET Core (Minimal API)
- Entity Framework Core
- SQLite
- OpenAI API (ChatGPT)
- Swagger (documentação)
- CORS habilitado para frontend local (React ou outro)

---

## 🧠 Funcionalidades

- ✅ Criar bots com contexto personalizado
- ✅ Enviar mensagens e receber respostas da OpenAI
- ✅ Armazenar histórico de mensagens por bot
- ✅ Consultar histórico de conversas
- ✅ API documentada via Swagger

---

## 🛠️ Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Configure a chave da API OpenAI

Crie um arquivo `appsettings.Development.json` (ou use variáveis de ambiente):

```json
{
  "OpenAI": {
    "ApiKey": "SUA_CHAVE_AQUI"
  }
}
```

> Ou defina a variável de ambiente `OPENAI_API_KEY` no sistema.

### 3. Crie e atualize o banco de dados SQLite

```bash
dotnet ef database update
```

> Isso criará o arquivo `chatbot.db` com as tabelas `Bots` e `Mensagens`.

### 4. Rode o backend

```bash
dotnet run
```

O backend ficará disponível em: `https://localhost:5013`

---

## 🌐 Endpoints da API

### 📌 Bots

| Método | Rota         | Ação                |
|--------|--------------|---------------------|
| GET    | /api/bots    | Lista todos os bots |
| POST   | /api/bots    | Cria um novo bot    |

#### Exemplo de criação de bot:

```json
POST /api/bots
{
  "nome": "Bot Saúde",
  "contexto": "Você é um bot que ajuda com saúde e bem-estar."
}
```

---

### 💬 Chat

| Método | Rota                    | Ação                           |
|--------|-------------------------|--------------------------------|
| POST   | /api/chat               | Envia mensagem para o bot      |
| GET    | /api/chat/{botId}/mensagens | Busca histórico do bot      |

#### Exemplo de envio de mensagem:

```json
POST /api/chat
{
  "botId": 1,
  "mensagemUsuario": "Olá, tudo bem?"
}
```

Resposta:
```json
{
  "resposta": "Olá! Estou aqui para te ajudar.",
  "data": "2025-08-05T16:30:00"
}
```

---

## 🧩 Estrutura do Projeto

```
backend/
│
├── Controllers/
│   ├── BotsController.cs       # Criação e listagem de bots
│   └── ChatController.cs       # Envio de mensagens e histórico
│
├── DTOs/
│   └── ChatRequest.cs          # Dados enviados ao conversar com o bot
│
├── Models/
│   ├── Bot.cs                  # Modelo do bot (Id, Nome, Contexto)
│   └── Mensagem.cs             # Modelo de mensagens (TextoUsuario, RespostaBot...)
│
├── Data/
│   └── AppDbContext.cs         # Mapeamento das tabelas para EF Core
│
├── Migrations/                 # Histórico e estrutura do banco de dados
│
└── Program.cs                  # Configuração do app, banco, CORS e Swagger
```

---

## 🛡️ Segurança

- A chave da OpenAI **não deve ser versionada no GitHub**.
- Use variáveis de ambiente ou `appsettings.Development.json` localmente.
- O sistema ignora a falta da chave e retorna erro 500 caso não esteja definida.

---

## 📄 Licença

Este projeto é livre para uso e estudo.

---

Desenvolvido com ❤️ em ASP.NET e OpenAI