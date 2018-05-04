const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} to ${client.guilds.first().name}`)
  client.user.setActivity('!wb-help');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on('guildMemberAdd', guildMember => {
  guildMember.sendMessage('Üdv a szerveren!')
    .then(message => console.log(`Sent message: ${message.content}`))
    .catch(console.error);
});

client.login('NDM5MDMyMTU3MDg0ODQ0MDUy.DcSvlw.ptF9yd79-1DsHx1CmS4dd9SnBns');

const http = require('http');

const hostname = process.env.HOST;//'discord-wot-clan-bot.herokuapp.com';
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(`Logged in as ${client.user.tag} to ${client.guilds.first().name}`);
  res.end(`Last message was:  ${client.user.lastMessage.content} on ${client.user.lastMessage.createdTimestamp}`);
  // res.end('Hello World\n');
});

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

server.listen(() => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
