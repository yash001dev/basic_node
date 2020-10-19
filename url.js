const url=require('url');

const address='https://drpydev.com/aboutus?name=yash';

const parsedUrl=url.parse(address,true);


console.log(parsedUrl.hostname);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query.name);

