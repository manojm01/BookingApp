import express from "express"
import Hotel from "../models/Hotel.js";

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hotel route");
})

//Create
router.post("/",async (req,res)=>{
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(err)
    }
})
//update
router.put("/:id",async (req,res)=>{
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.status(200).json(updatedHotel)
    } catch (error) {
        res.status(500).json(err)
    }
})
//delete
router.delete("/:id",async (req,res)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("deletedHotel")
    } catch (error) {
        res.status(500).json(err)
    }
})
//get
//get all

export default router