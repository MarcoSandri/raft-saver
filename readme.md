## Bot discord per salvare il mondo di gioco, archiviarlo e inviarlo su una chat

1. installi [Node](https://nodejs.org/en/download), versione 20 se ti funziona è l'ultima se no versione [18](https://nodejs.org/download/release/v18.19.0/node-v18.19.0-x64.msi) che è quella che ho usato io (non dovrebbero esserci problemi, ma node è pazzo)
2. scarichi repo da github, entri nella cartella e fai `npm install` (installi le dipendenze del progetto)
3. rinomini il file `.example.env` in `.env` e ci inserisci le tue variabili
4. ora sei setuppato e ogni volta che vuoi attivare il bot ti basta andare nella cartella dove hai il progetto e lanciare un `node src/index.js`
5. per fermarlo nel processo del terminale fai `ctrl+c`

### Possibili errori
- Node 20 potrebbe dare errore, downgrada a node 18
- `npm install` potrebbe dare errore, elimina se hai questi file: cartella `node_modules`, file `pnpm-lock.yaml` e `package-lock.json`

### Comandi
- Se mandi emoji fuoco risponde emoji fuoco
- Se scrivi `dammi mondo` ti manda mondo