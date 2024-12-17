import { Request, Response } from 'express';
import { findCourseById } from '../src/db-data';

export function saveCourse(req: Request, res: Response) {
    const id = Number(req.params["id"]); // Convert id to a number
    const changes = req.body;

    console.log("Saving course", id, JSON.stringify(changes));

    const course = findCourseById(id);

    if (!course) {
        res.status(404).json({ message: "Course not found" });
        return;
    }

    course.description = changes.description;

    res.status(200).json(course);
}
