import React from 'react';
import { Link } from 'react-router-dom';


export default props => {
  console.log("props",props)
  return (
    <div>
      <h1>This is my home page</h1>
      <p>
        <Link to="/gallery">Gallery</Link>
      </p>
      <p>
        <Link to="/users"> Users Page</Link>
      </p>
    </div>
  );
};