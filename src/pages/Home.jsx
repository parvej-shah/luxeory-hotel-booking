import Banner from '../components/Banner'
import FeaturedRooms from '../components/FeaturedRooms'
import LuxuryHotelSection from '../components/LuxeryHotel'
import HotelMap from '../components/Map'
import HotelGrid from '../components/OurHotels'
import PlacesNearby from '../components/PlacesNearby'
import TestimonialSection from '../components/TestimonialSection'

export default function Home() {
  
  return (
    <div>
      <Banner/>
      <PlacesNearby/>
      <FeaturedRooms/>
      <HotelGrid/>
      <LuxuryHotelSection/>
      <HotelMap/>
      <TestimonialSection/>
    </div>
  )
}
