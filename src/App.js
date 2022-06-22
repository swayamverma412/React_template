import React from 'react'; 
import Header from './Component/Header';
import Feature from './Component/Feature';
import About from './Component/About';
import aboutimage from './images/about5.png';
import aboutimage1 from './images/download.png';
import Presentation from './Component/presentation';
import Contact from './Component/Contact';


function App(){
  return(
    <div className='App'>
      <Header/>
      <Feature/>
      <About image={aboutimage} title='Comes With All You Need for Daily Life' button='Get the App'/>
      <Presentation/>
      <About image={aboutimage1} title='Download And Get The App Now' button='Download'/>
      <Contact/>

    </div>
  )
}

export default App