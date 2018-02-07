/*import { log } from 'util';*/

const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Bijour, Bsr');

});

console.log('nesma3 fil port 4000');
app.listen(4000);
