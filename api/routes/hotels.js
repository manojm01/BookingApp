import express from "express";
import {createHotel, updateHotel, deleteHotel, getHotel, getAllHotels} from "../controllers/hotelController.js";
const router = express.Router();

//Create
router.post("/",createHotel);
//update
router.put("/:id",updateHotel);
//delete
router.delete("/:id",deleteHotel)
//get
router.get("/:id",getHotel)
//get all
router.get("/",getAllHotels)

export default router