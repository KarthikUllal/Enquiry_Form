const express = require("express")
const { enquiryInsert, enquiryRead, enquiryUpdate, enquiryDelete} = require("../../controller/web/enquiryController")

const Router = express.Router()

//post 
Router.post("/enquiry-insert", enquiryInsert)

//get
Router.get("/enquiry-read", enquiryRead)


//patch to update the enquiry
Router.patch("/enquiry-update/:id",enquiryUpdate)

//delete enquiry
Router.delete("/enquiry-delete/:id", enquiryDelete)
module.exports = Router