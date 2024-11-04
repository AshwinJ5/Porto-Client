import './App.css'
import Footer from './Components/Footer'
import SvgBackground from './Components/SvgBackground'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'react-toastify/dist/ReactToastify.css';
import Suscribe from './Components/Suscribe.jsx';
import Landing from './Pages/Landing.jsx';
import Navbars from './Components/Navbars.jsx';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Components/Blogs.jsx';
import Tags from './Components/Tags.jsx';
import Authors from './Components/Authors.jsx';
import AuthorDetails from './Components/AuthorDetails.jsx';
import Features from './Components/Features.jsx';
import Authenication from './Components/Authenication.jsx';
import AddNewBlog from './Components/AddNewBlog.jsx';

function App() {

  return (
    <>
    <Navbars/>
      <SvgBackground/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/tags' element={<Tags/>}/>
          <Route path='/authors' element={<Authors/>}/>
          <Route path='/authorsdetails' element={<AuthorDetails/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/sign' element={<Authenication/>}/>
          <Route path='/addnew' element={<AddNewBlog/>}/>
        </Routes>
      <Suscribe/>
      <Footer/>
    </>
  )
}

export default App
