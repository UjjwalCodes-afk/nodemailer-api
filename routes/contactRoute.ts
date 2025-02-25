import express, { Router } from "express";
import { ContactUs } from "../controllers/contactController";

const contactRoute: Router = express.Router();

contactRoute.post("/contact", ContactUs); // Ensure function signature matches

export default contactRoute;
