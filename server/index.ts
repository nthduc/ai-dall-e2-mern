import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect';
import postRoutes from './routes/postRoutes';
import dalletRoutes from './routes/dalletRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dallet',dalletRoutes);

app.get('/', async (req,res) => {
    res.send("Hello from DALL-E!");
});

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(PORT,() => console.log(`Server has start on PORT ${PORT} http://localhost:${PORT}`));
    } catch (err) {
        console.log(err);
    }
    
}

startServer();