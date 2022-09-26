import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'
import dataparams, {updateData} from '../redux/dataparams'

export default function Results() {
    
    const {location,data} = useSelector((state:any) => state.dataparams)
    const dispatch = useDispatch()
    useEffect(()=> {
        fetch(`./api/Restaurants?zipcode=${location}`)
        .then((res) => res.json())
        .then((json) =>  {
            dispatch(updateData(json))
            console.log(data)
        })
        
    },[])
   
    
  return (
    <div className='Restaraunts'>
        <div className="header flex justify-center "> 
        <h1>Top Places near you!</h1>
        </div>
        <div className='Cards flex flex-wrap justify-between items-center'>
        {data.businesses?.map(function(buisness:any) {
            return(
            <Card key={buisness.id} phone={buisness.phone} name={buisness.name} description={buisness.rating} img={buisness.image_url}/>
                
           )
            
        })}
        </div>
        
    </div>
  )
}

