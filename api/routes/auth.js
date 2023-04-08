import express from "express"

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("auth route");
})
router.get("/login",(req,res)=>{
    res.send("login route");
})

export default router