const express = require('express');
const BlogSchema = require('../models/Blog');
const app = express();

const BlogController = async (req, res) => {
    const { title, desc, date, content } = req.body;

    let coverImage;
    let images = [];

    if (req.files.coverImage) {
        coverImage = req.files.coverImage[0].filename;
    }

    if (req.files.images) {
        images = req.files.images.map(file => file.filename);
    }

    const newBlog = new BlogSchema({
        title: title,
        desc: desc,
        date: date,
        content: content,
        coverImage: coverImage,
        images: images,
    });

    try {
        await newBlog.save();
        res.status(200).send('Blog post created successfully');
    } catch (err) {
        res.status(400).send('Blog post failed');
    }
};

module.exports = { BlogController };
