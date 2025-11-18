import '../App.css'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import { getAllBlogAPI } from '../Services/allApi';
import { useState } from 'react';
import { useEffect } from 'react';


function Blogs() {
  const [allBlog, setAllBlogs]=useState([]);

  const getAllBlogs=async()=>{
      const result= await getAllBlogAPI()
      setAllBlogs(result.data)
  }
  useEffect(()=>{
    getAllBlogs()
  },[])
  console.log(allBlog);
  
  return (
    
    
    <>
       <div className="blogMain w-100">
        <div className="row w-100 mx-auto">
            <div className="col-lg-6  mx-auto">
                <div className="p-3">

        <div className="featuredIcon mt-5 ms-4 px-4 small">{allBlog[7]?.tag}</div>
        <div className='blogHeading'>{allBlog[7]?.blogTitle}</div>
        <div><i className="fa-solid me-2 fa-calendar-days"></i>{allBlog[7]?.date} <i className="fa-regular mx-2 fa-clock"></i> {allBlog[7]?.time}</div>            
        </div>
            </div>
            <div className="col-lg-8 mx-auto">
                <div className="p-3 mx-auto">

        
        <img src={allBlog[7]?.imgUrl} className='my-3 mx-auto blogImage' alt="" />             
        </div>
            </div>
            <div className="col-lg-6  mx-auto">
            {allBlog[7]?.description.split('   ').map((paragraph, index) => (
        <p className='p-3 blogPara' key={index}>{paragraph}</p>
      ))}
                <div className="h2 fw-bolder mt-5">Share this Article</div>
                <div className="d-flex">
            <section className='mb-4'>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='/'
            role='button'
          >
            <MDBIcon fab className='fa-x-twitter footerIcon' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.facebook.com/sharer/sharer.php?u=http://localhost:5173/blogs'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f footerIcon' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='/'
            role='button'
          >
            <MDBIcon fab className='fa-whatsapp footerIcon' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='/'
            role='button'
          >
            <MDBIcon fas className='fa-envelope footerIcon' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='/'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin footerIcon' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='/'
            role='button'
          >
            <MDBIcon fas className='fa-link footerIcon' />
          </MDBBtn>

        </section>
            </div>
            </div>
            <div className="row my-5 mx-auto">
            <div className="h3 fw-bolder mt-5">You might also like</div>
            <div className="col-lg-3 col-6">
                <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI4fHxmYXNoaW9uJTIwYmVhdXR5fGVufDB8fHx8MTY5MjQ0NTA2MHww&ixlib=rb-4.0.3&q=80&w=2000" className='my-3 mx-auto blogImage' alt="" />
                <div className='h5 fw-bold'>{"Don't listen to what they say, go see"}</div>             
            </div>
            <div className="col-lg-3 col-6">
            <img src="https://images.unsplash.com/photo-1664574652984-5b5f769bef07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTY3MTQzMDcxMQ&ixlib=rb-4.0.3&q=80&w=2000" className='my-3 mx-auto blogImage' alt="" />
            <div className='h5 fw-bold'>Stop worrying about the potholes in the road and enjoy the journey</div>
            </div>
            <div className="col-lg-3 col-6">
            <img src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE2fHx0cmF2ZWx8ZW58MHx8fHwxNjcxNDMzMTI4&ixlib=rb-4.0.3&q=80&w=2000" className='my-3 mx-auto blogImage' alt="" />
            <div className='h5 fw-bold'>With age, comes wisdom. With travel, comes understanding</div>
            </div>
            <div className="col-lg-3 col-6">
            <img src="https://images.unsplash.com/photo-1591506317034-7169164238a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDI2fHxmZWFyfGVufDB8fHx8MTY3MTQzNDMwNw&ixlib=rb-4.0.3&q=80&w=2000" className='my-3 mx-auto blogImage' alt="" />
            <div className='h5 fw-bold'>Fear is only temporary, regrets last forever</div>            </div>
        </div>
        </div> 
        </div>
    </>
  )
}

export default Blogs