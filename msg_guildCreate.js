exports.msg = (userName) => {
  const msg = {
    'title': `Bot hozzáadva  ~~(did you know you can have markdown here too?)~~ ${userName}`,
    'description': 'this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```',
    'url': 'https://discordapp.com',
    'color': 0,
    'timestamp': '2018-05-07T14:23:41.904Z',
    'footer': {
      'icon_url': 'https://cdn.discordapp.com/embed/avatars/0.png',
      'text': 'Lábléc'
    },
    'thumbnail': {
      'url': 'https://cdn.discordapp.com/embed/avatars/0.png'
    },
    'image': {
      'url': 'https://cdn.discordapp.com/embed/avatars/2.png'
    },
    'author': {
      'name': 'Wot Clan Bot',
      'url': 'https://discordapp.com',
      'icon_url': 'https://cdn.discordapp.com/embed/avatars/0.png'
    },
    'fields': [
      {
        'name': 'Patrion',
        'value': 'Itt egy link lesz *patrion* [named links](https://discordapp.com)'
      }
    ]
  };
  return msg;
}
