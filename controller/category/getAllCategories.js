
import Category from '../../models/category'

const getAllCategories = async (req, res) => {
    try{
        const categories = await Category.find({})
        return res.json({ message: "ok", status: 200, result: categories }).status(200);
    }
    catch (e) {
        return res.json({ message: e.message }).status(500);
    }
}

export default getAllCategories;
