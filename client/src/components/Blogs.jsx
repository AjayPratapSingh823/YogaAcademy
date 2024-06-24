import React, { useEffect, useState } from 'react';
import css from "../css/blogs.module.css";
import axios from 'axios';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/blogfetch');
                setBlogs(response.data);
                console.log(response.data); // Make sure to log the response data to verify
            } catch (err) {
                console.log(err);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div>
            <section className={css["blogHead"]}>
                <div className={css["blogHeadDiv"]}>
                    <h1>Blogs</h1>
                </div>
            </section>
            {blogs.length > 0 ? (
                <section className={css["blogs"]}>
                    {blogs.map((blog) => (
                        <div key={blog._id} className={css["blogDiv"]}>
                            <div className={css["blogOuter1"]}>
                                <img src={`http://localhost:4000/middleware/blog/${blog.coverImage}`} alt="Cover" />
                            </div>
                            <div className={css["blogOuter2"]}>
                                <h2>{blog.title}</h2>
                                <p>{blog.date}</p>
                                <p>{blog.desc}</p>
                            </div>
                            <a href="/blog-page">Read more....</a>
                        </div>
                    ))}
                </section>
            ) : (
                <p>Loading....</p>
            )}
        </div>
    );
};

export default Blogs;
