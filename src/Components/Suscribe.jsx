import React from 'react'

function Suscribe() {
  return (
    <>
        <div id='contact' className="suscribeMain container w-100 my-5">
            <div className="row ">
                <div className="col-lg-6 headingSuscribe p-5">
                Subscribe to Porto newsletter and stay updated.
                <div className="h5 my-3">
                Don't miss anything. Get all the latest posts delivered straight to your inbox. It's free!
                </div>
                </div>
                <div className="col-lg-6 py-4">
                    <div className="container p-5 suscribeContainer p-5">
                        <input type="text" className='px-5' placeholder='Your Name'/>
                        <input type="text" className='px-5' placeholder='Your Email Address'/>
                        <button className="suscribeButton">Suscribe</button>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Suscribe