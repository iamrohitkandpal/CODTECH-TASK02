import Blog from "../models/blog.model.js"

const increaseVisits = async (req, res, next) => {
    const slug = req.params.slug;

    await Blog.findByIdAndUpdate(slug, { $inc: { visits: 1 } });

    next();
};

export default increaseVisits;