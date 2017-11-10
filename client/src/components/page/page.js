import React from 'react';
import './page.css';

const Page = props => (
  <div className="page">
    <h1 className="page__title">{props.title}</h1>
    <p>{props.content}</p>
  </div>
);

export default Page;
