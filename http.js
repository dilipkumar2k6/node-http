const https = require('https');

https.request({
    host: 'www.random.org',
    path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
}, response => {
    const data = [];
    response.on('data', chunk =>{ 
        data.push(chunk);
    });
    response.on('end', () => {
        console.log(data.join(''));
    })
}).end();



https.request({
    hostname: '',
    path: '',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length;
    },
    data: JSON.stringify({
        todo: 'Buy the milk'
    })
},response => {
    const data = [];
    response.on('data', chunk =>{ 
        data.push(chunk);
    });
    response.on('end', () => {
        console.log(data.join(''));
    })
}).write(data).end();