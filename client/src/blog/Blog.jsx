import React, { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../App.css'; // Ensure custom CSS is imported

const Blog = () => {
  const [editorContent, setEditorContent] = useState('');
  const quillRef = useRef(null);

  useEffect(() => {
    const quill = quillRef.current.getEditor();
    const handleClick = (event) => {
      const img = event.target;
      if (img.tagName === 'IMG') {
        img.setAttribute('data-resizable', 'true');
      }
    };

    const handleMouseDown = (event) => {
      const img = event.target;
      if (img.getAttribute('data-resizable')) {
        img.classList.add('resizing');
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
    };

    const handleMouseMove = (event) => {
      const img = document.querySelector('.resizing');
      if (img) {
        img.style.width = event.pageX - img.getBoundingClientRect().left + 'px';
        img.style.height = 'auto';
      }
    };

    const handleMouseUp = () => {
      const img = document.querySelector('.resizing');
      if (img) {
        img.classList.remove('resizing');
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      }
    };

    quill.root.addEventListener('click', handleClick);
    quill.root.addEventListener('mousedown', handleMouseDown);

    return () => {
      quill.root.removeEventListener('click', handleClick);
      quill.root.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const modules = {
    toolbar: [
      [{ 'header': '1'}, { 'header': '2'}, { 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],
      ['link', 'image'],
      [{ 'align': [] }],
      ['clean']
    ]
  };

  const formats = [
    'header', 'font',
    'list', 'bullet',
    'bold', 'italic', 'underline',
    'link', 'image', 'align'
  ];

  return (
    <div>
      <ReactQuill 
        ref={quillRef}
        value={editorContent}
        onChange={setEditorContent}
        modules={modules}
        formats={formats}
        theme="snow"
      />
    </div>
  );
};

export default Blog;
