var express = require('express');
const axios = require('axios');
var app = express();

const port = 3001;

app.get('/say',(req,res)=>{    
    console.log(req.query.keyword);
    const url = 'https://nhh1xw9bib.execute-api.us-east-1.amazonaws.com/test'+'?keyword='+req.query.keyword;
    console.log(url);
    axios.get(url)
        .then((response) => {
            console.log(response.data)
            res.send(response.data);            
        }).catch(function(error){
            console.log(error);
        })
});

app.listen(port);