import React, { useState } from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {
  let Herodata = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give into",text2:"your passion"},
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar />
      <Hero 
       heroData={Herodata[heroCount]} 
       setHeroCount={setHeroCount} 
       heroCount={heroCount}
       setPlayStatus={setPlayStatus}
       playStatus={playStatus}
       />  
    </div>
  )
}

export default App