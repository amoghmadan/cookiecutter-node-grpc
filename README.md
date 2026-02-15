# Cookiecutter JavaScript gRPC

Use this template to create an async gRPC Node project.

## How to use?

- Set-up base.
  ```bash
  cookiecutter https://github.com/amoghmadan/cookiecutter-node-grpc --checkout javascript
  ```
- Follow the prompts to customize your project.
  ```
  [1/4] project_name (app): play
  [2/4] project_description (Example application): Play with cookie cutter.
  [3/4] author_name (Your Name): Your Name
  [4/4] author_email (your@email.com): your@email.com
  ```

## Set-up?

- Install dependencies.
  ```bash
  npm i
  ```

## How to run?

- Build proto.
  ```bash
  npm start build
  ```
- Run the server.
  ```bash
  npm start runserver
  ```
- Run the Node shell (with application context).
  ```bash
  npm start shell
  ```
