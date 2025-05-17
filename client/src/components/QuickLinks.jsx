import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './QuickLinks.css';

const QuickLinks = () => {
  const [links, setLinks] = useState([]);

  const baseURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5050'
      : '';

  useEffect(() => {
    axios.get(`${baseURL}/api/quick-links`)
      .then(response => setLinks(response.data))
      .catch(error => console.error('Quick Links Error:', error));
  }, []);

  return (
    <div className="quick-links-wrapper mt-4 px-3">
      <div id="quick-links" className="d-flex flex-wrap justify-content-center gap-3">
        {links.map(link => (
          <div key={link.id} className="quick-link-card">
            <img src={link.subtitle} alt={link.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
