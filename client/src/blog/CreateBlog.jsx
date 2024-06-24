import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../App.css"; // Ensure custom CSS is imported
import axios from "axios";

const CreateBlog = () => {
  const [editorContent, setEditorContent] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const quillRef = useRef(null);

  useEffect(() => {
    const quill = quillRef.current.getEditor();
    const handleClick = (event) => {
      const img = event.target;
      if (img.tagName === "IMG") {
        img.setAttribute("data-resizable", "true");
      }
    };

    const handleMouseDown = (event) => {
      const img = event.target;
      if (img.getAttribute("data-resizable")) {
        img.classList.add("resizing");
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      }
    };

    const handleMouseMove = (event) => {
      const img = document.querySelector(".resizing");
      if (img) {
        img.style.width = event.pageX - img.getBoundingClientRect().left + "px";
        img.style.height = "auto";
      }
    };

    const handleMouseUp = () => {
      const img = document.querySelector(".resizing");
      if (img) {
        img.classList.remove("resizing");
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      }
    };

    quill.root.addEventListener("click", handleClick);
    quill.root.addEventListener("mousedown", handleMouseDown);

    return () => {
      quill.root.removeEventListener("click", handleClick);
      quill.root.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleCoverImage = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const date = e.target.date.value;
    const content = editorContent;
    const formData = new FormData();
    formData.append("title", title); 
    formData.append("desc", desc);
    formData.append("date", date);
    formData.append("content", content);

    if (coverImage) {
      formData.append("coverImage", coverImage);
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const images = doc.querySelectorAll("img");
    for (const img of images) {
      const imageUrl = img.src;
      const imageBlob = await fetch(imageUrl).then((res) => res.blob());
      formData.append("images", imageBlob, "image.png");
    }

    try {
      const response=await axios.post("http://localhost:4000/api/blog", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
    } catch (error) {
      console.error("There was an error posting the blog:", error);
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      ["link", "image"],
      [{ align: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "list",
    "bullet",
    "bold",
    "italic",
    "underline",
    "link",
    "image",
    "align",
  ];

  return (
    <div>
      <form onSubmit={handleSubmit} className="m-2 p-2 border rounded">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            Title
          </span>
          <input type="text" className="form-control" name="title" />
        </div>

        <div className="input-group">
          <input
            type="file"
            className="form-control"
            name="coverImage"
            onChange={handleCoverImage}
            id="inputGroupFile02"
          />
        </div>

        <div className="input-group">
          <span className="input-group-text">Description</span>
          <textarea className="form-control" name="desc"></textarea>
        </div>

        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            Date
          </span>
          <input type="date" className="form-control" name="date" />
        </div>

        <ReactQuill
          ref={quillRef}
          value={editorContent}
          onChange={setEditorContent}
          modules={modules}
          formats={formats}
          theme="snow"
          className="quill-editor"
        />

        <div className="text-center m-2">
          <button className="btn btn-dark" type="submit">
            Post <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
