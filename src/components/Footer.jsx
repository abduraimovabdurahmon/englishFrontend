import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import telegram icon

const Footer = () => {
  return (
    
    <footer className="bg-dark text-white text-center py-4">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="container">
        <p>&copy; 2023 Abdurakhmon. Barcha huquqlar himoyalangan.</p>
        <a href="https://t.me/abdurakhmon_04" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-telegram"></i> Telegram
        </a>
      </div>

        

    </footer>
  );
};

export default Footer;
