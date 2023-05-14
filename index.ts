import express from "express";
import data from "./data.json";
import cors from "cors";

const api = express();
const port: number = 3001;

api.use(cors({
    origin: "*"
}));

api.get("/items", (req, res) => {
  res.end(JSON.stringify(data.Items));
});

api.listen(port, () => {
    console.info(`Listening on port ${port}`)
});
