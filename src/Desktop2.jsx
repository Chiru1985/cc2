import React from 'react';
import PropTypes from 'prop-types';
import './Desktop2.css';

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <div className="logo" aria-label="ERI logo"></div>
      <span className="brand">ERI</span>
    </div>
    <nav className="nav">
      {['Ambulance Services', 'Available Doctors', 'Notification', 'Profile'].map((item) => (
        <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="nav-link">
          {item}
        </a>
      ))}
    </nav>
  </header>
);

const WelcomeSection = ({ name }) => (
  <section className="welcome-container">
    <img 
      src="https://i.ibb.co/FbYStNRj/Ellipse-78.png
" 
      alt={`${name}'s profile`} 
      className="profile-image"
    />
    <div className="text-container">
      <h1 className="welcome-text">Welcome {name}</h1>
      <p className="sub-text">How is it going today?</p>
    </div>
    <button className="seek-care-button">
      Seek child care
    </button>
  </section>
);

WelcomeSection.propTypes = {
  name: PropTypes.string.isRequired,
};

const CareCard = ({ name, location, distance, imageUrl }) => (
  <div className="care-card">
    <img 
      src={imageUrl} 
      alt={name} 
      className="hospital-image"
    />
    <div className="hospital-info">
      <h3 className="hospital-name">{name}</h3>
      <p className="hospital-location">{location}</p>
      <p className="distance">{distance} away</p>
    </div>
  </div>
);

CareCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const EmergencyCareSection = () => (
  <section className="emergency-care-container">
    <h2 className="emergency-title">Nearby Emergency Care</h2>
    <div className="cards-container">
      <CareCard 
        name="Karolinska University Hospital"
        location="Solna"
        distance="800m"
        imageUrl="https://i.ibb.co/xRJG1TR/2153928-1200-675-1.png"
      />
      <CareCard 
        name="Astrid Lindgren Children's Hospital"
        location="Eugeniavägen 23, 171 64"
        distance="5.2 Kms"
        imageUrl="https://i.ibb.co/n8mvHZwW/2152918-1200-674-2.png"
      />
    </div>
  </section>
);

const Desktop2 = () => {
  return (
    <div className="desktop-container">
      <Header />
      <main className="main-content">
        <WelcomeSection name="Ruchita" />
        <img 
          src=" https://i.ibb.co/cX3vph42/young-woman-doctor-white-coat-with-stethoscope-pointing-with-index-finger-side-with-serious-face-sta.png
" 
          alt="Doctor smiling" 
          className="doctor-image" 
        />
      </main>
      <EmergencyCareSection />
    </div>
  );
};

export default Desktop2;
