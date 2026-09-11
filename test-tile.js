const https = require('https');
https.get('https://a.basemaps.cartocdn.com/dark_all/13/4828/4126.png?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhIjoiYWNfMnU2eTA1dzYiLCJqdGkiOiJjMGZjZTI5NCJ9.nczTAZvhXoqsx4fkSTlVWUGvwMprj_wweSDCMHoxfCk', (res) => {
  console.log(res.headers);
});
