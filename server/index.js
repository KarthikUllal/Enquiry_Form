let express = require("express")
let mongoose = require("mongoose");
const Router = require("./routes/web/enquiryRoutes");
require('dotenv').config()
let cors = require('cors')
let app = express();

app.use(cors())
app.use(express.json())

app.use("/api/web/enquiry",Router)


mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connection Established")

    app.listen(process.env.port || 3000, ()=>{
        console.log("Server Listening on port : ", process.env.port)
    })
    
}
).catch((err)=>{
    console.log(err)
})

