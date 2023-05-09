# User Authentication

# Project Description

The project is a monorepo application that allows users to log in, register new users, search for registered users, and change the access level of all registered users in the application, provided that the logged-in user has admin access level.

# Features

- Login
- Register new users
- Search for registered users
- Change access level of registered users, provided that the logged-in user has admin access level

# Technologies used

- [Nx](https://nx.dev/)
- [React](https://pt-br.reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [React Router Dom](https://reactrouter.com/web/guides/quick-start)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [Postgresql](https://www.postgresql.org/)

# Running the Project

1. Clone Repository
   `git clone repo url`
2. Install packages
   ` yarn install` or `yarn`

3. Create .env files to database connections and JWT secret with following content
   `DATABASE_URL = "database connect string"`
   `JWT_KEY = "jwt secret"`

   - in case of doubt consult the prisma documentation on how to connect to the database in the following link(https://www.prisma.io/docs/concepts/database-connectors/postgresql)

4. Run database migrations
   `yarn prisma migrate deploy`

5. Run express server
   ` yarn start-api`

6. Run front-end aplication
   `yarn start-front`

# Contributing

1. Fork the repository

2. Create a branch with new feature or bug fix
   `git checkout -b name-branch-feature-or-fix`
3. Make your changes and commit
   `git commit -m "Description of my change"`
4. Push your branch
   `git push origin name-branch-feature-or-fix `
5. Open a Pull Request to original repository

# Installation Requirements

NodeJS (version 16.13.1 or higher)
Yarn (version 1.22.18 or higher)

### Author : José Yuri Lira
