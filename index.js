import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
import connectDB from "./connectMongoDb.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use(
//   cors({
//     origin: ["https://stack-overflow-prod.netlify.app/"],
//     method: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );

app.get('https://stack-overflow-prod.netlify.app/',(req, res) => {
    res.send("This is a stack overflow clone API")
})

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);

const PORT = process.env.PORT || 5000;

// const DATABASE_URL = process.env.CONNECTION_URL

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
