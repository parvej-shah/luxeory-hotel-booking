import Banner from '../components/Banner'
import HotelMap from '../components/Map'
import PlacesNearby from '../components/PlacesNearby'

export default function Home() {
  return (
    <div>
      <Banner/>
      <PlacesNearby/>
      <HotelMap/>
    </div>
  )
}
