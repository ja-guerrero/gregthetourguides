import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dataparams, {updateData} from '../redux/dataparams'

export default function Results() {
    
    const {location,data} = useSelector((state:any) => state.dataparams)
    const dispatch = useDispatch()
    useEffect(()=> {
        fetch(`./api/Restaurants`)
        .then((res) => res.json())
        .then((data) =>  {
            console.log(data)
            dispatch(updateData(data))
        })
        
    },[])
   
    
  return (
    <div>
        Hello
        {data.businesses?.map(function(buisness:any) {
            return(<li key={buisness.id} >
                {buisness.name}
            </li>)
            
        })}
        
    </div>
  )
}

