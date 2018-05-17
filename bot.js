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

client.on('guildCreate', guild => {
  guild.members.forEach(member => {
    if (member.hasPermission('ADMINISTRATOR')) {
      console.log(member.displayName);
      const inc = require('./msg_guildCreate.js');
      var embed = inc.msg(member.displayName);
      member
        .send({embed})
        .catch(console.error + '  ' + member.displayName);
    }
  });
});


// client.guilds.first().owner.send




client.login('NDM5MDMyMTU3MDg0ODQ0MDUy.DcSvlw.ptF9yd79-1DsHx1CmS4dd9SnBns');

const http = require('http');

const hostname = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><body>');
  res.write('<p>');
  if (req.url === '/embed') {    
    const inc = require('./msg_wellcome.js');
    var embed = inc.msg(client.guilds.first().owner.displayName);
    client.guilds.first().owner.send({embed});
  }
  else if (req.url === '/add') {    
    const inc = require('./msg_guildMemberAdd.js');
    var msg = inc.msg(client.guilds.first().owner.displayName);
    client.guilds.first().owner.send(msg);
  }
  else if(req.url === '/create') {
    client.guilds.first().members.forEach(member => {
      if(member.hasPermission('ADMINISTRATOR') & !member.user.bot) {
        console.log(member.displayName);
        const inc = require('./msg_guildCreate.js');
        var embed = inc.msg(member.displayName);
        member
          .send({embed})
          .catch(console.error + '  ' + member.displayName);
      }
    });
  }
  else if(req.url === '/auth') {
    var re = new Promise(resolve => {
      const https = require('https');
      https.get('https://api.worldoftanks.eu/wot/auth/login/?application_id=c260a43576e22bd6088cec774f5cfe34&nofollow=1', (resp) => {
        let data = '';
  
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {          
          console.log(JSON.parse(data));
          //res.write(JSON.parse(data));
          //res.end('</body></html>');
          //console.log(JSON.parse(data));
          resolve(JSON.parse(data));
        });
      
      }).on("error", (err) => {
        console.log("Error https: " + err.message);
      });
    });
    re.then(res.end(re));    
  }
  else {
    res.write(`Logged in as ${client.user.tag} to ${client.guilds.first().name}</br>`);
    if (client.user.lastMessage != null) {
      res.write(`Last message was:  ${client.user.lastMessage} on ${client.user.lastMessage.createdTimestamp}`);
    }
    res.write('</p>');
    res.write('<iframe src="https://discordapp.com/widget?id=438702839833821196&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>');
    res.end('</body></html>');
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
