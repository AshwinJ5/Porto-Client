import React from 'react'
import dark from '../assets/portodark.svg'
import light from '../assets/porto.svg'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'


function Footer() {
  return (
    <>
       <hr className='hrFooter' /> 
       <div className="p-5 ">
        <div className="row">
          <div className="col-lg-6 d-grid justify-content-around">
            <img className='my-3' src={dark} alt="" />
            <div className='footerDescription'>
              Explore insightful articles, tips, and stories on our blog, designed to inspire and inform your journey.
            </div>
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
            href='/'
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
            <MDBIcon fab className='fa-instagram footerIcon' />
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

        </section>
            </div>
          </div>
          <div className="col-lg-2 col-6">
            <div className="footerHeading my-3">Features</div>
            <div className="footerItems my-2">Style Guide</div>
            <div className="footerItems my-2">Tags</div>
            <div className="footerItems my-2">Authors</div>
            <div className="footerItems my-2">Features</div>
            <div className="footerItems my-2">Contact</div>
          </div>
          <div className="col-lg-2 col-6">
            <div className="footerHeading my-3">Pages</div>
            <div className="footerItems my-2">Membership</div>
            <div className="footerItems my-2">Sign In</div>
            <div className="footerItems my-2">Sign Up</div>
            <div className="footerItems my-2">Account Free</div>
            <div className="footerItems my-2">Account Paid</div>
          </div>
          <div className="col-lg-2 col-6">
            <div className="footerHeading my-3">About</div>
            <div className="footerItems my-2">Privacy Policy</div>
            <div className="footerItems my-2">Terms</div>
            <div className="footerItems my-2">Authors</div>
            <div className="footerItems my-2">Contact</div>
          </div>
        </div>
          <div className='text-center m-5'>
          © Porto 2024. Published with Porto
          
          </div>

       </div>
    </>
  )
}

export default Footer