import React from 'react';
import BodyBlog from '../components/blog/BodyBlog';
import HeaderBlog from '../components/blog/HeaderBlog';


export default function Blog() {
  return (
    <div style={{ background: "#FFFFFF"}} className='wrap__blog__page'>
      <HeaderBlog />
      <BodyBlog />
      {/* <Footer /> */}
    </div>
  )
}