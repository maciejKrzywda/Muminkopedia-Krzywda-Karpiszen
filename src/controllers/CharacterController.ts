import {addCharacter} from "../services/CharacterService";

export async function postCharacter(req: Request, res: Response): Promise<void> {
    try {
        const {} = req.body;

        const newCharacter = await addCharacter();
        res.status(201).json({ message: "Character added successfully." });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : error;
        res.status(400).json({error: "Character addon failed."});
    }
}