import mongoose from 'mongoose';

const connectMongo = () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default  connectMongo;
