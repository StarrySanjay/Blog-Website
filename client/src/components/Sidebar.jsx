import React, { useEffect, useState } from 'react'

const Sidebar = () => {
    const [popularBlogs, setPopularBlogs] =useState([]);

    useEffect;{() => {
        fetch("http://localhost:5000/blogs").then(res=> res.json()).then(data =>)
    }, []}
  return ( 
    <div>
        <div>
            <h3 className='text-2xl font-semibold px-4 '>Latest Posts</h3>
        </div>
        
    </div>
  )
}

export default Sidebar