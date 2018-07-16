var express = require('express')
var app =  express();

app.get('/',function(req,res){
		res.send('Hello World Shseik');
});

app.listen(3000,function(){
	console.log("sweet");
})
