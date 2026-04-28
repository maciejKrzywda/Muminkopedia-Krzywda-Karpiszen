import { Router } from "express";
import {
    getArtifactsHandler,
    getArtifactHandler,
    createArtifactHandler,
    updateArtifactHandler,
    deleteArtifactHandler
} from "../controllers/ArtifactsController";

const router = Router();

router.get("/", getArtifactsHandler);
router.get("/:id", getArtifactHandler);
router.post("/", createArtifactHandler);
router.put("/:id", updateArtifactHandler);
router.delete("/:id", deleteArtifactHandler);

export default router;