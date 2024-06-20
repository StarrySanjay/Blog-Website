import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards'
import { data } from 'autoprefixer';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import Sidebar from './Sidebar';


const BlogPage = () => {
    const [blogs, setBlogs] =useState([]);
    const [currentPage,setCurrentPage] =useState(1)
    const pageSize = 12 // blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);


    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
            
            //filtered by category
            if(selectedCategory){
                url== `&category=${selectedCategory}`;
            }

            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }
        fetchBlogs();
    },[currentPage,pageSize,selectedCategory])

    //page change btn
    const handledPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }
  return (
    <div>
        {/*category section */}
        <div>
            <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory}
            activeCategory={activeCategory}/>
        </div>

        {/*blogCards section*/}
        <div className='flex flex-col lg:flex-row gap-12'>
            <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>

            {/*Sidebar section*/}
            <div>
                <Sidebar/>
            </div>
        </div>

        {/*pagination section*/}
        <div>
            <Pagination currentPage={currentPage}  blogs={blogs} pageSize={pageSize} onPageChange={handledPageChange}/>
            </div>
    </div>
  )
}

export default BlogPage