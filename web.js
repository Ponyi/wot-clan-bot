const http = require('http');

const hostname = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  console.log(req.url); //favico :)
  if (req.url === '/favicon.ico') {
    res.end();
    return;
  }
  searchClan(req.url.replace('/', '')).then(clan => {
    let a = JSON.parse(clan);
    console.log(a);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');

    res.write('<!doctype html><html><body>');
    res.write('<h2>Találatok száma:' + a.meta.count +'</h2>');
    a.data.forEach(element => {
      res.write('<p><img src="'+element.emblems.x32.portal+'">'+element.name+'</p>');
    });
    //res.end(clan);
    res.end('</body></html>');
  }).catch(console.error);
/*
  let clanList = await searchClan('mata');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(clanList); */
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/* process.on('SIGINT', () => {
  console.log('Received SIGINT.  Press Control-D to exit.');
}); */

function searchClan(search) {
  return new Promise(function (resolve, reject) {    
    let https = require('https');
    let data = '';
    https.get('https://api.worldoftanks.eu/wgn/clans/list/?application_id=c260a43576e22bd6088cec774f5cfe34&search=' + search, (resp) => {
      resp.on('data', d => { data += d });
      resp.on('end', e => {
        resolve(data);
      });
    });    
  });
}
