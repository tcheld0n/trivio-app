
# TrivioApp - README

## 📚 Sobre o Projeto

**TrivioApp** é um aplicativo de perguntas e respostas no estilo trivia, desenvolvido com o objetivo de promover o reuso de software e aplicar metodologias ágeis durante seu desenvolvimento. Ele é ideal para grupos que desejam aprender, testar seus conhecimentos ou apenas se divertir.

---

## 🚀 Funcionalidades

- **Perguntas variadas**: Teste seus conhecimentos em diferentes categorias.
- **Sistema de pontuação**: Acompanhe seu desempenho.
- **Fácil integração**: Reutilização de componentes e práticas ágeis tornam o app escalável e eficiente.

---

## 🛠️ Tecnologias Utilizadas

- **Backend**: [Flask](https://flask.palletsprojects.com/)
- **Banco de Dados**: Flask-SQLAlchemy
- **Gerenciamento de Sessões**: Flask-Session
- **Configurações de Ambiente**: python-dotenv

---

## 📋 Pré-requisitos

Antes de iniciar, você precisará ter os seguintes requisitos instalados em sua máquina:

1. **Python** (versão 3.8 ou superior).
2. **Gerenciador de Pacotes `pip`**.

---

## ⚙️ Instalação

Siga os passos abaixo para configurar o ambiente e executar o projeto.

### 1. Clone este repositório
```bash
git clone https://github.com/seu-usuario/trivioapp.git
cd trivioapp
```

### 2. Crie um ambiente virtual
```bash
python -m venv venv
```

### 3. Ative o ambiente virtual
- **Windows**:
  ```bash
  venv\Scripts\activate
  ```
- **Linux/MacOS**:
  ```bash
  source venv/bin/activate
  ```

### 4. Instale as dependências
```bash
pip install -r requirements.txt
```

---

## 🚦 Como Executar

1. **Configure o ambiente**:
   - Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias (exemplo: configuração do banco de dados).

2. **Execute o servidor**:
   ```bash
   flask run
   ```

3. **Acesse o aplicativo**:
   - O servidor estará disponível em `http://127.0.0.1:5000`.

---

## 🌟 Contribuindo

Contribuições são sempre bem-vindas! Siga as etapas abaixo para colaborar:

1. Faça um fork do projeto.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-branch
   ```
3. Commit suas mudanças:
   ```bash
   git commit -m "Descrição do commit"
   ```
4. Faça o push para a branch:
   ```bash
   git push origin minha-branch
   ```
5. Abra um Pull Request.

---

## 📞 Contato

Dúvidas ou sugestões? Entre em contato:
- **Email (Guilherme)**: gosg@ic.ufal.br
- **Email (Willian)**: wtos@ic.ufal.br
