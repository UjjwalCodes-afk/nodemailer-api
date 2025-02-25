import { Request, Response, NextFunction } from "express";
import { contactSchema } from "../validators/contactValidator";
import { Contact } from "../models/contactModel";
import { sendContactEmail } from "../services/contactService";

export const ContactUs = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const validation = contactSchema.safeParse(req.body);
    if (!validation.success) {
        res.status(400).json({
            error: validation.error.errors,
        });
        return; // Ensure function does not return Response
    }

    try {
        const contact: Contact = validation.data;
        await sendContactEmail(contact);
        res.status(200).json({ message: "Message sent successfully" });
        return;
    } catch (error) {
        console.error(error);
        next(error); // Pass error to Express error handler
    }
};
