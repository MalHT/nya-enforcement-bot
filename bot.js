const Discord = require("discord.js");
const client = new Discord.Client();

const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage('./store');

let numBlocked = localStorage.getItem('numBlocked');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
  if (numBlocked) {
  
    console.log(`blocked ${numBlocked} humans`)
    client.user.setGame(`blocked ${numBlocked} humans`);
    
  } else {
    
    client.user.setGame(`blocking humans`);
    
  }
});

client.on('message', msg => {
  if (!nyaCheck.test(msg.content)) {
    msg.delete();
    
    if (numBlocked) {
      numBlocked++;
    } else {
      numBlocked = 1;
    }
    
    localStorage.setItem('numBlocked', numBlocked);
    client.user.setGame(`blocked ${numBlocked} humans`);
    console.log(`blocked ${numBlocked} humans`)
  }
});

let nyaCheck = new RegExp(/^\W*([Nn][Yy][Aa]+[Nn]*|[Mm][Ee][Oo]*[Ww]+|[Mm][Ii]+[Aa][Oo][Uu]+)\W*$/, 'g');

client.login('MzIzODY1NTkzMzI3Mzg2NjI0.DCBW3A.YvwZ2_UDYGlfL3XPc_a8TMYp2ic');