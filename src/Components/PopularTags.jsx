import React from 'react'
import { Link } from 'react-router-dom'
import { getAllTagAPI } from '../Services/allApi'
import { useState } from 'react'
import { useEffect } from 'react';

function PopularTags() {
    const [allTags , setAllTags]=useState([]);

    const getAllTags=async()=>{
        const result= await getAllTagAPI()
        setAllTags(result.data)
    }
    useEffect(()=>{
        getAllTags()
    },[])
    

  return (
    <>
        <div className="popularMain container">
            <h4 >Popular Tags</h4>
            <div className="tagFlex">
                {
                    allTags.map(tag=>(
                        <div className="tagsMain d-flex">
                    <div><img src={tag.imgUrl} alt="imgTag1" /></div>
                    <div className='px-3'>
                        <div className='tagFirst'>{tag.tagname}</div>
                        <div  className='mt-1'>10 Posts</div>
                    </div>
                </div>
                    ))
                }
                <Link to={'/tags'}>
                <div className="tagsMain d-flex">
                    <div className="Tagdiv">
                        See All Tags <i className="fa-solid fa-arrow-right ms-1"></i>
                        </div>
                </div>
                </Link>
            </div>
        </div>
    </>
  )
}

export default PopularTags