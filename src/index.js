require('dotenv').config();

var fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const {Client, IntentsBitField} = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
})


const sourceFolderPath = 'C:\\Users\\marco\\AppData\\LocalLow\\Redbeet Interactive\\Raft\\User\\User_76561198070284573\\World';
const sourceFolderName = 'fuocone';
const destinationFolderPath = './world_zip';
const zipFileName = 'fuocone.zip';


function createZip(callback) {
  const sourceFolder = path.join(sourceFolderPath, sourceFolderName);
  const zipFilePath = path.join(destinationFolderPath, zipFileName);
  if (fs.existsSync(zipFilePath)) {
    fs.unlinkSync(zipFilePath);
    console.log('Vecchio file zip rimosso.');
  }
  const archive = archiver('zip', { zlib: { level: 9 } });
  const output = fs.createWriteStream(zipFilePath);
  output.on('close', function () {
    console.log('Zip completato con successo.');
    callback();
  });
  archive.on('error', function (err) {
    throw err;
  });
  archive.directory(sourceFolder, sourceFolderName);
  archive.pipe(output);
  archive.finalize();
}

client.on('ready', (c)=>{
  console.log(c.user.tag + ' is online');
})

client.on('messageCreate', (msg)=>{
  if (!msg.author.bot) {
    if (msg.content=="🔥") {
      msg.reply('🔥')
    }

    if (msg.content=="dammi mondo") {

      createZip(()=>{
        msg.reply({
          files: ['./world_zip/fuocone.zip']
        }).catch((err)=>{
          console.log("Errore: " + err);
        });
      })
    }
  }
})

client.login(process.env.TOKEN)