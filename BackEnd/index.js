import express from 'express'
import AutRoutes from './Routes/Auth.js';
import DBcon from './Utlis/db.js';
import NotesRoutes from './Routes/Notes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
const app = express()
const port=8080;
 
//Mongoose DB connection here
DBcon()

app.use(cors({
  credentials:true,
   origin:'http://localhost:5173'
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/auth',AutRoutes);
app.use('/notes',NotesRoutes);

app.get('/',(req, res)=> {
  res.send('Hello World')
})

app.listen(port,()=>{
    console.log("Connected");
})