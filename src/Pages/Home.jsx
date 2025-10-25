import React from 'react'
import HomeHero from '../Components/HomeHero'
import AboutSection from '../Components/AboutSection'
import RoomsOffer from '../Components/RoomsOffer'
import PhotoGallery from '../Components/PhotoGallery'
import ExclusiveRooms from '../Components/ExclusiveRooms'

const Home = () => {
  return (
    <div>
        <HomeHero/>
        <AboutSection/>
        <RoomsOffer/>
        <PhotoGallery/>
        <ExclusiveRooms/>
    </div>
  )
}

export default Home