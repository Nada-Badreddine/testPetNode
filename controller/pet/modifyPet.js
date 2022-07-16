
import Pet from '../../models/pet'
import Tag from '../../models/tag';

const  modifyPet = async (req, res) => {
    try {
        const newTags = req.body.tags.filter((tag) => !tag._id)
        const oldTagsIds = req.body.tags.filter((tag) => tag._id).map((tag) => tag._id)
        const addedNewTags = await Promise.all(newTags.map((tag) => Tag.create(tag)))
        const addedNewTagsIds = addedNewTags.map((tag) => tag._id);
        const pet = await Pet.update({ _id: req.params.petId},Object.assign(req.body,{tags: [...oldTagsIds, ...addedNewTagsIds]} )  );
        return res.json({ message: "ok", status: 200, result: pet }).status(200);
    } catch (err) {
        return res.json({ result: null, status: 500, error: err }).status(500);
    }
}

export default modifyPet;