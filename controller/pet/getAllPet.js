
import Pet from '../../models/pet'

const getAllPet = async (req, res) => {
    try{
        const pet = await Pet.find({})
        .populate("category")
        .populate("tags")
        return res.json({ message: "ok", status: 200, result: pet }).status(200);
    }
    catch (e) {
        return res.json({ message: e.message }).status(500);
    }
}

export default getAllPet;
