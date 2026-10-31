const https = require('https');

https.get('https://www.dreamsinvite.com/harshil-weds-mansi', (res) => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    let re = /src="([^"]+\.js[^"]*)"/g;
    let scripts = [];
    let m;
    while ((m = re.exec(d)) !== null) scripts.push(m[1]);
    
    scripts.forEach(s => {
      let u = s.startsWith('http') ? s : 'https://www.dreamsinvite.com' + s;
      https.get(u, r => {
        let sc = '';
        r.on('data', chunk => sc += chunk);
        r.on('end', () => {
          if (sc.includes('339847') || sc.includes('MusicPlayer')) {
            console.log('MusicPlayer defined in:', s);
            let idx = sc.indexOf('339847');
            if (idx !== -1) {
              console.log(sc.substring(Math.max(0, idx - 100), Math.min(sc.length, idx + 500)));
            }
          }
        });
      });
    });
  });
});
