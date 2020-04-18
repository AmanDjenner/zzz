const fs = require('fs');

 
let file = JSON.parse(fs.readFileSync('db.json'));  
let title = (file.posts[0].title);
console.log(title);

//let post = document.getElementById("title");
// post.innerHtml(title);
//https://github.com/jprichardson/node-fs-extra/blob/HEAD/docs/outputJson.md