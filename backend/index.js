import express from "express";
import cors from "cors";
import { supabase } from "./supabase.js";
import dotenv from "dotenv";
dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())

app.get("/read",async(req,res) => {
    const {data} = await supabase.from("productCards").select("*");
    res.send(data)
})

app.post("/create",async(req,res) => {
    const {title,detail,price,url} = req.body
    await supabase.from("productCards").insert({title,detail,price,url})
    res.send("added sucessfully")
})

app.listen(6001,() => console.log("program is runnning"))