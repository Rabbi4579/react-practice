import React from 'react';
import './Blog.css'
const Blog = (props) => {
    return (
        <div>
          <div className='blog-site'>
          <h1>This is Blog page</h1> 
            <h3>Heading: {props.heading}</h3>
            <p>Author: {props.author}</p>
          </div> 
        </div>
    );
};

export default Blog;<h1>This is Blog page</h1>