import express from 'express';
import path from 'path';

const app = express();


app.use(express.static(path.join(__dirname, '..', 'public')));

const PORT: number = 5051 | Number(process.env.PORT);

app.listen(PORT, ()=>{
    console.log(`🚀 Server in on port ${PORT} 🚀 \n`);
});