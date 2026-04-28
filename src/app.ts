import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import characterRoutes from "./routes/CharacterRoutes";
import artifactRoutes from "./routes/ArtifactsRoutes";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // Parsowanie JSON w requestach

app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/characters", characterRoutes);
app.use("/api/artifacts", artifactRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Muminkopedia działa pomyślnie!" });
});

export default app;