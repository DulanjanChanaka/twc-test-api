const router = require("express").Router();
const Contact = require("../models/contact");

//Read contact

router.get("/", async (req, res) =>{
    try {
        const data = await Contact.find().sort({timestamps : -1});
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(err)
    }
})


//Create contact
router.post("/", async (req,res) =>{
    const newConatct = new Contact(req.body);

    try {
        const savedContact = await newConatct.save();
        res.status(201).json(savedContact)
    } catch (error) {
        res.status(500).json(error)
        
    }
})

//Update Contact

router.put("/:id", async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        res.status(200).json(updatedContact)
    } catch (err) {
        res.status(500).json(err)
        
    }
})


//Delete Contact
router.delete("/:id", async (req, res) =>{
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json("Contact has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router