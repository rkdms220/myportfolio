import React, { useState } from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section id="portfolio">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="images/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>

      <div className="content">
        <h2>My Portfolio</h2>
        <p>Here are some of my works...</p>

        <div className="gallery">
          <div className="gallery-item" onClick={() => openModal('images/work1.jpg')}>
            <img src="images/work1.jpg" alt="Work 1" />
          </div>

          <div className="gallery-item" onClick={() => openModal('images/work2.jpg')}>
            <img src="images/work2.jpg" alt="Work 2" />
          </div>

          <div className="gallery-item" onClick={() => openModal('images/work3.jpg')}>
            <img src="images/work3.jpg" alt="Work 3" />
          </div>
        </div>
      </div>

      {/* Modal for image preview */}
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Enlarged" />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
