import roomHeader from '../assets/images/roomHeader.jpg'
export default function Rooms() {
  return (
    <div>
        <div
  className="hero"
  style={{
    backgroundImage: `url(${roomHeader})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md py-8">
      <h2 className="my-5 text-5xl font-bold text-primary">Room List</h2>
    </div>
  </div>
</div>
    </div>
  )
}
