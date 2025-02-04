import mongoose, { ConnectOptions } from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    mongoose.set("strictQuery", true);

    if(!process.env.MONGO_URI) {
        return console.error("Mongo URI not defined");
    }

    if (isConnected) {
        return;
    }

    try {
        const options: ConnectOptions = {
            dbName: "twitter-x",
            autoCreate: true,
        };

        await mongoose.connect(process.env.MONGO_URI, options);

        isConnected = true;
        console.log("Database connected");
    } catch (error) {
        console.log("Error connecting to database");
    }
};