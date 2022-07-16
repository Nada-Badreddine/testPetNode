
import Pet from '../../models/pet'
import Tag from '../../models/tag';

const  addPet = async (req, res) => {
    try{
        const newTags = req.body.tags.filter((tag) => !tag._id)
        const oldTagsIds = req.body.tags.filter((tag) => tag._id).map((tag) => tag._id)
        const addedNewTags = await Promise.all(newTags.map((tag) => Tag.create(tag)))
        const addedNewTagsIds = addedNewTags.map((tag) => tag._id);
        const pet = await Pet.create(Object.assign(req.body,{tags: [...oldTagsIds, ...addedNewTagsIds]} ))
        return res.json({ message: "ok", status: 200, result: pet }).status(200);
    }
    catch (e) {
        return res.json({ message: e.message }).status(500);
    }
}

export default addPet;
