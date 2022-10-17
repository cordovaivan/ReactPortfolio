import React from 'react';

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

function Portfolio() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Projects</div>
      <div style={styles.content}>
        <ul>
        <li><a href = "https://github.com/cordovaivan/Html-refactor">HTML Refactor</a></li>
        <li><a href = "https://github.com/cordovaivan/Password-Generator">Password-Generator</a></li>
        <li><a href = "https://github.com/cordovaivan/Weather-App">Weather-App</a></li>
        <li><a href = "https://github.com/cordovaivan/Work-Scheduler">Work-Scheduler</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
