This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Git Cheatsheet (Windows PowerShell)

- `git init`: Inicializa un repositorio en el directorio actual.
- `git clone <url>`: Clona un repositorio remoto.
- `git status`: Muestra cambios y rama actual.
- `git add .`: Añade todos los cambios al staging.
- `git commit -m "mensaje"`: Crea un commit.
- `git log --oneline --graph --decorate`: Historial compacto.
- `git diff`: Diferencias en el working directory.
- `git diff --staged`: Diferencias entre staging y último commit.
- `git branch`: Lista ramas.
- `git switch <rama>` / `git switch -c <rama>`: Cambia/crea rama.
- `git merge <rama>`: Fusiona `<rama>` en la rama actual.
- `git rebase <rama>`: Reaplica commits sobre `<rama>`.
- `git fetch` y `git pull`: Trae cambios (pull además fusiona).
- `git push`: Envía commits al remoto.
- `git remote -v`: Lista remotos; `git remote add origin <url>` añade uno.
- `git stash` / `git stash pop`: Guarda y recupera cambios no confirmados.
- `git reset <archivo>`: Quita del staging; `git reset --hard` descarta cambios.
- `git rm <archivo>`: Elimina un archivo y lo marca para commit.
- `git tag <v1.0.0>` / `git push --tags`: Crea y publica etiquetas.
- `git show <commit|tag>`: Detalles de un commit/etiqueta.
- `git blame <archivo>`: Quién cambió cada línea y cuándo.
- `git clean -fd`: Elimina archivos/directorios no rastreados (cuidado).

### Flujos rápidos

```powershell
# Configuración inicial
git config --global user.name "Tu Nombre"; git config --global user.email "tu@email.com"

# Crear rama de feature y pushear
git switch -c feature/nueva-seccion
git add .; git commit -m "feat: nueva sección"
git push -u origin feature/nueva-seccion

# Actualizar tu rama desde develop
git fetch; git switch develop; git pull
git switch feature/nueva-seccion; git rebase develop

# Resolver rebase y continuar
git add .; git rebase --continue

# Merge limpio a develop
git switch develop; git merge --no-ff feature/nueva-seccion
git push
```

### Recuperación

- `git reflog`: Muestra el historial de referencias para recuperar estados.
- `git checkout -- <archivo>`: Revierte cambios locales en un archivo.
- `git reset --soft HEAD~1`: Quita el último commit manteniendo cambios.
