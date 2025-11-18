import { Link } from 'react-router-dom'

function Authors() {
  return (
    <div className='my-5'>
    <div className="tagHeading text-center h1 fw-bolder m">Authors</div>
    <div className="row p-4 mx-auto justify-content-center">
        <div className="col-lg-3 col-6 p-3" >
                
        <div className="postsFirstColumn p-3">
                <Link to={'/authorsdetails'}>
                <div className="authorsImage">
                        <img src="https://pixahive.com/wp-content/uploads/2020/10/A-beautiful-girl-portrait-125229-pixahive.jpg" alt="" />
                        <div className="mt-3 fw-bold h6 text-center">Dona</div>
                        <div className="mb-3 small  text-center">8 Posts</div>
                </div>
                </Link>
                </div>
        </div>
        <div className="col-lg-3 col-6 p-3" >
        <div className="postsFirstColumn p-3">
                <div className="authorsImage">
                        <img src="https://porto.gbjsolution.com/content/images/2023/08/Apurba.jpg" alt="" />
                        <div className="mt-3 fw-bold h6 text-center">Sam</div>
                        <div className="mb-3 small  text-center">8 Posts</div>
                </div>
                </div>
        </div>
        <div className="col-lg-3 col-6 p-3" >
        <div className="postsFirstColumn p-3">
                <div className="authorsImage">
                        <img src="https://img.freepik.com/free-photo/portrait-fair-haired-woman-with-warm-blue-eyes-dry-lips-healthy-skin-looking-directly-alluring-girl-with-beautiful-appearance-dressed-casually-posing_273609-7635.jpg" alt="" />
                        <div className="mt-3 fw-bold h6 text-center">Celin</div>
                        <div className="mb-3 small  text-center">8 Posts</div>
                </div>
                </div>
        </div>
        <div className="col-lg-3 col-6 p-3" >
        <div className="postsFirstColumn p-3">
                <div className="authorsImage">
                        <img src="https://porto.gbjsolution.com/content/images/2023/08/harini.jpg" alt="" />
                        <div className="mt-3 fw-bold h6 text-center">Sandra</div>
                        <div className="mb-3 small  text-center">8 Posts</div>
                </div>
                </div>
        </div>
        <div className="col-lg-3 col-6 p-3" >
        <div className="postsFirstColumn p-3">
                <div className="authorsImage">
                        <img src="https://porto.gbjsolution.com/content/images/2023/08/suravi.jpg" alt="" />
                        <div className="mt-3 fw-bold h6 text-center">Hanna</div>
                        <div className="mb-3 small  text-center">8 Posts</div>
                </div>
                </div>
        </div>
        <div className="col-lg-3 col-6 p-3" >
        <div className="postsFirstColumn p-3 ">
                <div className="authorsImage ">
                        <img src="https://porto.gbjsolution.com/content/images/2023/08/ishan.jpg" alt="" />
                        <div className="mt-3 fw-bold h6 text-center">Allan</div>
                        <div className="mb-3 small  text-center">8 Posts</div>
                </div>
                </div>
        </div>
       
    </div>
</div>
  )
}

export default Authors