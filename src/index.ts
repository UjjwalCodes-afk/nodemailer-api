import express from 'express';
import dotenv from 'dotenv';
import contactRoute from '../routes/contactRoute';
import cors from 'cors';
dotenv.config();



const PORT = process.env.PORT || 2000
const app  = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/user', contactRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

