const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/messages",(req, res) => {
	let m = ["m1" , "m2", "m3" , "m4" ];
	let r = parseInt(Math.random() * m.length);
	res.send({"msg" : m[r]});
	res.end();
});

app.listen(9000, () => {console.log("ready @ 9000"); });