import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const YogaDemoVideos = () => {
  const videos = [
    { id: 1, title: 'Yoga Video 1', url: 'https://www.youtube.com/embed/ySINmTN_ArQ' },
    // Add more video objects here
    { id: 2, title: 'Yoga Video 2', url: 'https://www.youtube.com/embed/ySINmTN_ArQ' },
    { id: 3, title: 'Yoga Video 3', url: 'https://www.youtube.com/embed/ySINmTN_ArQ' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center">Yoga Demo Videos</h2>
      <div className="row">
        {videos.map(video => (
          <div key={video.id} className="col-md-6 mb-4">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={video.url}
                allowFullScreen
                title={video.title}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YogaDemoVideos;
