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


// client.guilds.first().owner.send




client.login('NDM5MDMyMTU3MDg0ODQ0MDUy.DcSvlw.ptF9yd79-1DsHx1CmS4dd9SnBns');

const http = require('http');

const hostname = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/send') {    
    const inc = require('./msg_wellcome.js');
    var embed = inc.msg(client.guilds.first().owner.displayName)
    client.guilds.first().owner.send({embed});
  }
  else {
    res.write(`Logged in as ${client.user.tag} to ${client.guilds.first().name}\n`);
    if (client.user.lastMessage != null) {
      res.write(`Last message was:  ${client.user.lastMessage} on ${client.user.lastMessage.createdTimestamp}`);
    }
  }
  res.end('\nwot-clan-bot\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
