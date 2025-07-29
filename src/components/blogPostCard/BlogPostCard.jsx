import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import { useNavigate } from 'react-router';
import Blog from '../../pages/blog/Blog';

function BlogPostCard() {
  const context = useContext(myContext);
  const { mode, getAllBlog } = context;

  const navigate = useNavigate();

  return (
    <div>
      <section className="text-gray-600 body-font">
          <Blog />
          {/* See More Button  */}
          <div className="flex justify-center my-5">
            <Button
              style={{
                background: mode === 'dark'
                  ? 'rgb(226, 232, 240)'
                  : 'rgb(30, 41, 59)',
                color: mode === 'dark'
                  ?
                  'rgb(30, 41, 59)'
                  : 'rgb(226, 232, 240)'
              }}> See More
            </Button>
           
          </div>
        
      </section >
    </div >
  )
}

export default BlogPostCard