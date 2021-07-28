import React from 'react';

const AnchorPoint = ({ data }) => {
  const { title } = data;
  return (
    <div className="container">
      <h1>{title}</h1>
    </div>
  );
};
export default AnchorPoint;
