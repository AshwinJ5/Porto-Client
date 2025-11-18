import { useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { addNewBlogAPI } from '../Services/allApi';


function AddNewBlog() {
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
        time: getCurrentTime, 
        tag: "",
        description: "",
        userId: sessionStorage.getItem("userId")
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBlogData((prevData) => ({
            ...prevData,
            [name]: value,
            time: getCurrentTime(), // Update time on each change
        }));
    };
    console.log(newBlogData);

    const addNewBlogDetails = async () => {
        const { blogTitle, imgUrl, date, time, tag, description, userId } = newBlogData;
        if (!blogTitle || !imgUrl || !date || !time || !tag || !description || !userId ) {
            toast.warning("Missing Fields")
        } else {
            const reqBody = new FormData();
            reqBody.append("blogTitle", blogTitle);
            reqBody.append("imgUrl", imgUrl);
            reqBody.append("date", date);
            reqBody.append("time", time);
            reqBody.append("tag", tag);
            reqBody.append("description", description);
            reqBody.append("userId", userId);
            

            const token = sessionStorage.getItem("token");
            const username = sessionStorage.getItem("username");
            if (token && username ) {
                const reqHeader = {
                    "Authorization": `Bearer ${token}`
                };
                try {
                    const result = await addNewBlogAPI(reqBody, reqHeader);
                    console.log(result);
                    
                    if (result.status === 200) {
                       toast.success("Blog successfully added")
                        setNewBlogData({
                            blogTitle:"", 
                            imgUrl:"", 
                            time:"", 
                            tag:"", 
                            description:""
                        });

                    } else {
                        toast.warning("error!")
                    }
                } catch (error) {
                    console.error(error);
                    toast.info("Error! An error occurred while adding new blog");
                }
            } else {
                toast.success("Admin not logged in!", "You are not authorized to perform this action.");
            }
        }
    }


    
  return (
    <div className='addBlogNewMain'>
            <div className="tagHeading text-center h1 fw-bolder m">Add New Blogs</div>
            <div className="row w-100 mx-auto">
                <div className="col-lg-6  mx-auto">
                    <div className="inputLabel">Blog Title:</div>
                    <input name='blogTitle' onChange={handleInputChange} value={newBlogData.blogTitle} placeholder='Blog Title' type="text" />
                    <div className="inputLabel">Blog  Tag</div>
                    <select name="tag" id=""  onChange={handleInputChange} value={newBlogData.tag} >
                        <option value="Technology">Technology</option>
                        <option value="Travel">Travel</option>
                        <option value="Food">Food</option>
                        <option value="Health">Health</option>
                        <option value="Nature">Nature</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="" hidden selected>Choose Blog Tag</option>
                    </select>
                    <div className="inputLabel">Image</div>
                    <input type="text" name='imgUrl'  onChange={handleInputChange} value={newBlogData.imgUrl}/>
                    <div className="inputLabel">Blog Description:</div>
                    <div className='text-end mb-2'>
                    <small className="inputLabel">For paragraph please add 3 spaces between the sentences.</small>
                    </div>
                    <textarea  onChange={handleInputChange} value={newBlogData.description} name="description" id=""></textarea>
                    <div className='mx-auto'>
                    <div onClick={addNewBlogDetails
                    } className="navNtn addNewBlogButton fw-bolder px-4 text-center mx-auto">Add Blog</div>

                    </div>
                </div>
            </div>
            <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition= {Bounce}
            />
    </div>
  )
}

export default AddNewBlog