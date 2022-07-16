
import Pet from '../../models/pet'

const deletePet = async (req, res) => {
    try {
        await Pet.deleteOne({ _id: req.params.petId });
        return res
          .json({ message: "la suppression à été effectué avec success", result: req.params.id })
          .status(200);
    } catch(error) {
        return res
          .json({ message: error.message  })
          .status(500);      
    }
}

export default deletePet;
