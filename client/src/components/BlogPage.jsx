import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/blogpage/${id}`);
        setBlog(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card m-2 p-2">
        <h2>{blog.title}</h2>
        <p>{new Date(blog.date).toLocaleDateString()}</p>
        <p><b>description: {blog.description}</b></p>
        <img src={blog.image} alt="img1" />
      </div>
    </div>
  );
};

export default BlogPage;
