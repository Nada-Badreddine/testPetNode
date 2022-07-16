import Tag from '../../models/tag'

const  addTag = async (req, res) => {
    try {
        console.log("test")
        const tag = await Tag.create(req.body);
        return res.json({ message: "ok", status: 200, result: tag }).status(200);
    }
    catch (e) {
        return res.json({ message: e.message }).status(500);
    }
}

export default addTag;