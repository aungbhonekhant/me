import React from 'react';
import allBlogs from '../Components/allBlogs';
import Title from '../Components/Title';

function BlogsPage() {
    return (
        <>
            <div className="b-title">
                <Title title="Recent Blogs" span="Blogs Page" />
            </div>
        
            <div className="BlogsPage">
                {
                    allBlogs.map(blog => {
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt={blog.title} />
                                <a href={blog.link} className="blog-link">{blog.title}</a>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default BlogsPage
