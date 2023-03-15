//importing express
import express from "express";
import mongoose from "mongoose";
import adminRouter from "./routes/adminRoutes.js";
import userRouter from "./routes/userRoute.js";
import cors from 'cors';
import path from 'path';
import bodyParser from "body-parser";
const app = express();

app.use(express.static(path.join(process.cwd(),"/public")));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://infobeansfoundation:klMx5S446Jc4j7ay@cluster0.sdeerfc.mongodb.net/infobeansDB?retryWrites=true&w=majority",
  (err) => {
    if (err) console.log(err);
    else {
      console.log("database connected...");
      app.use("/", userRouter);
      app.use("/admin", adminRouter);
      app.listen(8000, () => {
        console.log("server started at 8000...");
      });
    }
  }
);
