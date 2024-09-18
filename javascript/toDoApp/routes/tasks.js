import { Router } from "express";
import Task from "../models/Task.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        console.log(error);
    }
});

router.post("/", async (req, res) => {
    try {
        console.log("Request body:", req.body); // Add this line to log the incoming request body

        const { title } = req.body;

        if (!title) {
            return res.status(400).json({ error: "Title is required" });
        }

        const task = await Task.create({ title, isCompleted: false });
        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create task" });
    }
});

export default router;
