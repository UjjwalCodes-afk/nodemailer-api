import { NextFunction, Request, Response } from "express";
import { contactSchema } from "../validators/contactValidator";
import { Contact } from "../models/contactModel";
import { sendContactEmail } from "../services/contactService";
export const ContactUs = async(req : Request, res : Response) => {
    const validation = contactSchema.safeParse(req.body);
    if(!validation.success){
        return res.status(400).json({
            error : validation.error.errors
        })
    }
    try {
        const contact : Contact = validation.data;
        await sendContactEmail(contact);
        return res.status(200).json({message : 'Message sent successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message : 'internal server error'
        })
    }
}