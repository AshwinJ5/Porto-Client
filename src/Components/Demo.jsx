import React, { useEffect, useState } from 'react';

function Demo() {
    // Function to get the current time in 12-hour format
    const getCurrentTime = () => {
        return new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
    };

    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const formattedDate = new Date().toLocaleDateString('en-US', options).toUpperCase();

    const [newBlogData, setNewBlogData] = useState({
        blogTitle: "", 
        imgUrl: "", 
        date: formattedDate, 
        time: getCurrentTime(), 
        tag: "",
        description: ""
    });

    useEffect(() => {
        console.log(newBlogData);
    }, [newBlogData]);

    // Handler to update state and time
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBlogData((prevData) => ({
            ...prevData,
            [name]: value,
            time: getCurrentTime(), // Update time on each change
        }));
    };

    return (
        <div className='addBlogNewMain'>
            <div className="tagHeading text-center h1 fw-bolder m">Add New Blogs</div>
            <div className="row w-100 mx-auto">
                <div className="col-lg-6 mx-auto">
                    <div className="inputLabel">Blog Title:</div>
                    <input 
                        name="blogTitle"
                        onChange={handleInputChange}
                        value={newBlogData.blogTitle}
                        placeholder='Blog Title'
                        type="text"
                    />
                    <div className="inputLabel">Blog Tag:</div>
                    <select
                        name="tag"
                        onChange={handleInputChange}
                        value={newBlogData.tag}
                    >
                        <option value="" hidden>Choose Blog Tag</option>
                        <option value="Technology">Technology</option>
                        <option value="Travel">Travel</option>
                        <option value="Food">Food</option>
                        <option value="Health">Health</option>
                        <option value="Nature">Nature</option>
                        <option value="Lifestyle">Lifestyle</option>
                    </select>
                    <div className="inputLabel">Image:</div>
                    <input
                        name="imgUrl"
                        type="text"
                        onChange={handleInputChange}
                        value={newBlogData.imgUrl}
                    />
                    <div className="inputLabel">Blog Description:</div>
                    <div className='text-end mb-2'>
                        <small className="inputLabel">For paragraph please add 3 spaces between the sentences.</small>
                    </div>
                    <textarea
                        name="description"
                        onChange={handleInputChange}
                        value={newBlogData.description}
                    ></textarea>
                </div>
            </div>
        </div>
    );
}

export default Demo;
