// MONGO DB
import mongoose from "mongoose";

const mongoConnectionSRV = process.env.MONGODB_URI;
const databaseName = "GUI_DB";
const options = {useNewUrlParser: true, useUnifiedTopology: true, dbName: databaseName};

const LEDSchema = new mongoose.Schema({
    ledColors: [String],
    createdAt: Date
});

export const LEDData = mongoose.model("LEDData", LEDSchema);

export function connectToServer(callback) {
  mongoose.connect(mongoConnectionSRV, options)
  .then(()=> console.log("Connected."))
  .catch((error)=>console.log(error));

}