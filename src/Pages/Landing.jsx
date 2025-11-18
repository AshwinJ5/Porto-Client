import PopularTags from '../Components/PopularTags'
import Featured from '../Components/Featured'
import LandingPosts from '../Components/LandingPosts'
import Header from '../Components/Header'

function Landing() {
  return (
    <>
        <Header/>
        <Featured/>
        <PopularTags/>
        <LandingPosts/>
    </>
  )
}

export default Landing