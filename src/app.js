const bodyParser = require("body-parser");
const express=require("express");
const morgan = require("morgan");
const mongoose=require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://super:super@cluster0.u1h7e.mongodb.net/super?retryWrites=true&w=majority",{
    
}).then(db=>console.log("db is connected"))
  .catch(err=>console.error(err));

const app = express();

app.set("port", process.env.PORT ||3000);
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/api/product", require("./routes/products"))
app.listen(app.get("port"),()=>{
    console.log("server on port", app.get("port"));
});
