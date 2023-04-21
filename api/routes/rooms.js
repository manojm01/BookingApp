import express from "express"
import {
    createRoom,
    deleteRoom,
    getRoom,
    getRooms,
    updateRoom,
    updateRoomAvailability
  } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Craete  room in hotel
router.post("/:hotelid", verifyAdmin, createRoom);

router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);

export default router;