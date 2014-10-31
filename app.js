var express 		= require("express"),
	body-parser 	= require("body-parser"),
	cookie-parser	= require("cookie-parser")
	;

var app = express()
.get("/", function(req,res){
	res.send();
})

.listen(8080);
