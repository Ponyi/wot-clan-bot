exports.msg = (userName) => {
  const msg = {
    'title': `A címe3  ~~(did you know you can have markdown here too?)~~ ${userName}`,
    'description': 'this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```',
    'url': 'https://discordapp.com',
    'color': 0,
    'timestamp': '2018-05-07T14:23:41.904Z',
    'footer': {
      'icon_url': 'https://cdn.discordapp.com/embed/avatars/0.png',
      'text': 'footer text'
    },
    'thumbnail': {
      'url': 'https://cdn.discordapp.com/embed/avatars/0.png'
    },
    'image': {
      'url': 'https://cdn.discordapp.com/embed/avatars/2.png'
    },
    'author': {
      'name': 'author name',
      'url': 'https://discordapp.com',
      'icon_url': 'https://cdn.discordapp.com/embed/avatars/0.png'
    },
    'fields': [
      {
        'name': '🤔',
        'value': 'some of these properties have certain limits...'
      }
    ]
  };
  return msg;
}
