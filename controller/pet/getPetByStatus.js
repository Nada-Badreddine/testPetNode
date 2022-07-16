
import Pet from '../../models/pet'

const getPetByStatus = async (req, res) => {
    try {
        const pets = await Pet.find({ status: req.params.status }).populate("category").populate("tags");
        return res.json({ message: "ok", status: 200, result: pets }).status(200);
    } catch (e) {
        return res
        .json({ message: e.message  })
        .status(500);    
    }
}

export default getPetByStatus;
