'use strict';
let fs = require('fs');
 fs.readFile('./md.md','utf-8',(error,data) => {
    console.log(data);
 });