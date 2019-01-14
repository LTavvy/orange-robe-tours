# Orange Robe Tours
**https://www.orangerobetours.com**

Simple static web page. Bundled with webpack and deployed via Netlify.

----

## 🏁 Quick start

### Requirements

- **nodejs** (lts) https://nodejs.org/en/
- **yarn** https://yarnpkg.com/en/docs/install#mac-stable
- **git** https://gist.github.com/derhuerst/1b15ff4652a867391f03#file-mac-md (or type `git` into terminal i think it will prompt xcode to install)
- **github** ssh access to clone repo https://help.github.com/articles/connecting-to-github-with-ssh/
- A code editor (**VS code** - https://code.visualstudio.com/)

### 💻 Installation

Clone the repo to your machine: (assumes ssh github access setup)

```
git clone git@github.com:tavvy/orange-robe-tours.git
```

Change directory to the project

```
cd orange-robe-tours
```

From within the project install the dependencies

```
yarn
```

Start the app

```
yarn dev
```

Access the application from http://localhost:8080

### 📦 To run in production mode

```
yarn build
yarn start
```

## 🚀 Deployment

The application is deployed via netlify github integration. It builds PRs as previews and ships master to production.

Netlify options are configured via `netlify.toml`

