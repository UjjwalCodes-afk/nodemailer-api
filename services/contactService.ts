import nodemailer from 'nodemailer';
import type { Contact } from '../models/contactModel';


export const sendContactEmail = async(contact : Contact) => {
    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : process.env.EMAIL_USER,
            pass : process.env.EMAIL_PASS
        },
        tls : {
            rejectUnauthorized : false
        }
    })
    const mailOptions = {
        from: contact.email,
        to: process.env.EMAIL_USER,
        subject: `New contact message from ${contact.name}`,
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>New Contact Message</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        background-color: #f4f4f4;
                        padding: 20px;
                    }
                    .container {
                        max-width: 600px;
                        margin: auto;
                        background: #ffffff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    }
                    h2 {
                        color: #333;
                    }
                    .message-box {
                        background: #f8f8f8;
                        padding: 15px;
                        border-left: 4px solid #007bff;
                        margin: 15px 0;
                    }
                    .footer {
                        font-size: 12px;
                        color: #666;
                        margin-top: 20px;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h2>New Contact Message</h2>
                    <p><strong>Name:</strong> ${contact.name}</p>
                    <p><strong>Email:</strong> ${contact.email}</p>
                    
                    <div class="message-box">
                        <p><strong>Message:</strong></p>
                        <p>${contact.message}</p>
                    </div>
    
                    <p>Please respond to this message as soon as possible.</p>
    
                    <div class="footer">
                        <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
        `
    };
    
    await transporter.sendMail(mailOptions);
}