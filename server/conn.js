// MONGO DB
import mongoose from "mongoose";

//const mongoConnectionSRV = "mongodb+srv://admin:admin@cluster0.chs7o.mongodb.net/GUI_DB?retryWrites=true&w=majority";
const mongoConnectionSRV = 'mongodb://127.0.0.1:27017'; // local development

const databaseName = "GUI_DB";
const options = {useNewUrlParser: true, useUnifiedTopology: true, dbName: databaseName};

const LEDSchema = new mongoose.Schema({
    ledColors: [String],
    createdAt: Date,
    effect: String
});

export const LEDData = mongoose.model("LEDData", LEDSchema);

export function connectToServer(callback) {
  mongoose.connect(mongoConnectionSRV, options)
  .then(()=> console.log("Connected."))
  .catch((error)=>console.log(error));

}


