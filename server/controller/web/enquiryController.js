//insert function 

const enquiryModel = require("../../models/enquiry.model")

let enquiryInsert = async (req, res) => {
    let { name, email, phone, message } = req.body

    let enquiry = new enquiryModel({
        name,
        email,
        phone,
        message
    })

    enquiry.save().then(() => {
        res.json({
            status: 1,
            message: "Enquiry Added"
        })
    }).catch((err) => {
        res.json({
            status: 0,
            message: "Error Encountered while saving",
            error: err
        })
    })
}


//get enquiry

let enquiryRead = async (req, res) => {
    let enquiry = await enquiryModel.find()

    res.json({
        status: 1,
        message: "Enquiry Fetched Successfully",
        data: enquiry
    })
}


//update enquiry

let enquiryUpdate = async (req, res) => {
    let id = req.params.id

    let updateEnquiry = await enquiryModel.updateOne({ _id: id }, {
        $set:
            req.body
    })

    res.json({
        status: 1,
        message: "Enquiry Updated",
        updatedEnquiry: updateEnquiry
    })
}


//delete controller

let enquiryDelete = async (req, res) =>{
    const id = req.params.id

    deletedEnquiry = await enquiryModel.deleteOne({_id : id})
    
    res.json({
        status : 1,
        message : "Enquiry Deleted successfully",
        deletedEnquiry : deletedEnquiry
    })
    
}

module.exports = { enquiryInsert, enquiryRead, enquiryUpdate, enquiryDelete }