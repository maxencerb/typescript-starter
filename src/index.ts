import fetch from 'node-fetch';

console.log('test')

fetch('https://api.github.com/users/github').then((res: any) => res.text()).then(console.log)