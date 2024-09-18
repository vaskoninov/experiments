import { Router } from "express";
import Task from "../models/Task.js";
import { authenticateToken } from "../middleware/auth.js";

const router = Router();

router.get("/", authenticateToken, async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        console.log(error);
    }
});

router.get("/incomplete", async (req, res) => {
    try {
        const tasks = await Task.findAll({
            where: {
                isCompleted: false,
            },
        });
        res.json(tasks);
    } catch (error) {
        console.log(error);
    }
});

router.post("/create", async (req, res) => {
    try {
        console.log("Request body:", req.body);

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

router.patch("/update", async (req, res) => {
    const { id, isCompleted } = req.body;
    // console.log("Request body:", req.body);
    try {
        // Updates the task
        const task = await Task.findByPk(id);
        console.log(task);
        task.isCompleted = isCompleted;
        await task.save();

        res.json(task);
    } catch (error) {
        console.log(error);
    }
});

export default router;
