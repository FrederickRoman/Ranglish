# ranglish

## Random English-sounding word generator

This a full-stack public API that provides made-up english-sounding words that follow [english phonotactics](https://en.wikipedia.org/wiki/Phonotactics#English_phonotactics). For example:

- gurt: ɡʌrt
- drim: drɪm
- sclown: sklaʊn

<div style="display:flex; flex-direction:column;">
<div style="display:flex; flex-direction:row; justify-content:space-evenly; align-items:center;">  
<img src="https://github.com/FrederickRoman/Ranglish/blob/main/client/src/assets/img/logo.svg" alt="Ranglish logo" height="320"/>
  <img src="https://github.com/FrederickRoman/Ranglish/blob/main/docs/mockups/Ranglish%20(iPhone%205%20SE).png" alt="Ranglish home page phone mockup" height="320"/>
</div>
</div>

## Live website

See [Ranglish website](https://ranglish.heroku.app).

## Access to public API

Simply call the endpoint:

GET https://ranglish.heroku.app/api/word

No authorization token required (at least for now).

## Tech stack used in this project (all is in this repo)

- Client-side:
  - Vue.js (2)
  - Vuetify
- Server-side:
  - Node (TS)
  - Express

## Project setup

```
npm install
```

### Compiles and hot-reloads for client development

```
npm run client_dev
```

### Compiles and hot-reloads for server development

```
npm run server_dev
```

### Compiles and minifies for production

```
npm run postinstall
```

### Lints and fixes client-side files

```
npm run client_lint
```
