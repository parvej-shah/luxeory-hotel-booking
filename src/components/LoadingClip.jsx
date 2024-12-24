import { BeatLoader } from 'react-spinners'

export default function LoadingClip() {
  return (
    <div className='min-h-screen bg-bgEnd flex justify-center items-center'> 
        <BeatLoader color='#D4AF37' size={16}/>
    </div>
  )
}
