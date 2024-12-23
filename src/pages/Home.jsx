import Banner from '../components/Banner'
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
      <HotelGrid/>
      <LuxuryHotelSection/>
      <HotelMap/>
      <TestimonialSection/>
    </div>
  )
}
