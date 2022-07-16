import Category from '../../models/category'

const  addCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        return res.json({ message: "ok", status: 200, result: category }).status(200);
    }
    catch (e) {
        return res.json({ message: e.message }).status(500);
    }
}

export default addCategory;