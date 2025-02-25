import z from 'zod';


export const contactSchema = z.object({
    name : z.string().min(3, "Name must be at least three characters"),
    email : z.string().email("Invalid email format"),
    message : z.string().min(10, "number must be 10 digits")
})