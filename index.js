const app = require("./app");
const db = require("./config/db");

const port = 3000;

app.get('./',(req,res)=>{
     res.send("HELLO WORLD!!!!!");
});
app.listen(port,()=>{
console.log(`server listening in the port ${port}`);
});