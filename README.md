<h1 align="center"> Deliveries API - Node.js</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
</p>

## ⚙ O que é

Deliveries API é uma aplicação backend feita com Nodejs, utilizando o Prisma IO, para realizar entregas. Nesta aplicação, teremos de um lado o cliente - que irá se cadastrar e cadastrar itens para serem entregues em determinada localização - e, do outro, o entregador - que poderá pegar ou não determinada entrega para ser realizada. Iremos utilizar Typescript, JWT e Express.

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Prisma](https://www.prisma.io/)
- [JSON Web Token](https://jwt.io/)
- [BCrypt](https://www.npmjs.com/package/bcrypt/)

## 🚀 Como executar

- Clone o repositório e acesse a pasta;
- Faça uma copia do arquivo `.env.example` para `.env` e usar as crendencias do seu banco de dados;
- Instale as dependências com `yarn`;
- Executa as migrations com `yarn prisma migrate dev`;
- Inicie o servidor com `yarn dev`;

A aplicação pode ser acessada em [`localhost:3000`](http://localhost:3000).

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
