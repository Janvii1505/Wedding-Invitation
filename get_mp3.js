const https = require('https');

https.get('https://archive.org/metadata/dni.ncaa.SNA-20-ACD', (res) => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    try {
      const j = JSON.parse(d);
      const mp3s = j.files.filter(f => f.name.endsWith('.mp3'));
      console.log('Server:', j.server, 'dir:', j.dir);
      mp3s.forEach(f => {
        console.log(`https://archive.org/download/${j.metadata.identifier}/${f.name}`);
      });
    } catch (e) {
      console.error(e);
    }
  });
});
