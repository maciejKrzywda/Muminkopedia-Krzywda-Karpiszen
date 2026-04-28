import { Router } from "express";
import {
    createCharacterHandler,
    deleteCharacterHandler,
    getCharactersHandler,
    getCharacterHandler,
    updateCharacterHandler
} from "../controllers/CharacterController";

const router = Router();

router.get("/", getCharactersHandler);
router.get("/:id", getCharacterHandler);
router.post("/", createCharacterHandler);
router.put("/:id", updateCharacterHandler);
router.delete("/:id", deleteCharacterHandler);

export default router;