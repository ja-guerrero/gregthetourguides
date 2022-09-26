
import Image from 'next/image'
import Default from '../components/Default'
import handleYelpCall from './api/Restaurants'

export default function Home() {

  return (
  <div className='App bg-slate-600'>
    <Default/>
  </div>
  )
}

