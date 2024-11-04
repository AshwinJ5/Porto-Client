import React from 'react'

function Features() {
  return (
    <>
    <div className="row w-100 mx-auto styleGuide">
            <div className="col-lg-6 col-md-10 col-12 mx-auto p-4 ">
                <h1 className='fw-bold text-center my-5'>Who is Porto?</h1>
                <p>Porto is an open-source publishing platform. It is a powerful app for creators and publishers to publish, share, and grow a business around their content.</p>
                <h1 className='fw-bold text-center my-5'>General Features</h1>
                <ul>
                        <li>Dark and light mode.</li>
                        <li>100% responsive, and looks nice on any device size.</li>
                        <li>Superfast performance.</li>
                        <li>Responsive image.</li>
                        <li>Content-focused, modern, and minimal.</li>
                        <li>Native image lazy loading.</li>
                        <li>System font or Google font.</li>
                </ul>
                <h1 className='fw-bold text-center my-5'>Supported Inbuilt Features</h1>
                <ul>
                        <li>Share to social sites.</li>
                        <li>Post content visibility based on the viewer's membership status.</li>
                        <li>Reading time.</li>
                </ul>
            </div>

        </div> 
    </>
  )
}

export default Features