
import Pet from '../../models/pet'

const getPetById = async (req, res) => {
    try {
        const pet = await Pet.findOne({ _id: req.params.petId }).populate("category").populate("tags")
        if(pet) {
            return res.json({ message: "ok", status: 200, result: pet }).status(200);
        } else {
            return res.json({ message: "ok", status: 200, result: pet }).status(404);  
        }
    } catch (e) {
        return res
        .json({ message: e.message  })
        .status(500);    
    }
}

export default getPetById;
