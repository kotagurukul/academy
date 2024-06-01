import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Title from './Components/Title/Title.jsx';
import Results from './Components/Results/Results.jsx';
import Courses from './Components/Courses/Courses.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';


function App() {
  return(
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Title subTitle="Our Results"></Title>
        <Results></Results>
        <Title subTitle="Courses We Offer"></Title>
        <Courses></Courses>
        <About></About>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
  
}

export default App
