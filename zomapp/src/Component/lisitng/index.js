import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './listing.css';
import axios from 'axios';
import ListingDisplay from './listingDisplay'

const base_url = process.env.REACT_APP_API_URL;

const Listing = () => {

    let params = useParams()
    let [mealId] = useState(params.mealId)
    const [resturant,setRestaurant] = useState()

    useEffect(() => {
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${base_url}/restaurant?mealtype_id=${mealId}`)
        .then((res) => setRestaurant(res.data))
        .catch((err)=>{console.log(err)})
    })

    return(
        <div className='row'>
            <div id="mainListing">
                <div id="filter">

                </div>
                <ListingDisplay listData={resturant}/>

            </div>
        </div>
    )

}

export default Listing