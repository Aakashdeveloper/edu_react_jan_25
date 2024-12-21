import {useState,useEffect} from 'react';
import './details.css';
import axios from 'axios';
import {Link, useSearchParams,useNavigate} from 'react-router-dom';
import MenuDisplay from './menuDisplay';

const base_url = process.env.REACT_APP_API_URL;

const Details = () => {
    return(
        <>
            <div className='main'>
                <div className='tileImage'>
                    <div className='imageClass'>
                        
                    </div>

                </div>
                <div className='tileContent'>

                </div>

                <div className='col-md-12'>
                    <hr/>
                    <center><h2>Menu</h2></center>
                    <hr/>
                    <MenuDisplay/>
                </div>
            </div>
        </>
    )

}

export default Details