import {useState, useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';

const base_url = process.env.REACT_APP_API_URL;

const Profile = () => {
    const navigate = useNavigate()
    const [user,setUser] = useState()

    const userData = async() => {
        const response = await fetch(`${base_url}/userinfo`,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })

        const data = await response.json();
        setUser(data)
    }

    useEffect(() => {
        userData()
    },[])

    const renderUser = (data) => {
        if(data){
            sessionStorage.setItem('rtk',data.role)
            return(
                <>
                    <h1>Hi {data.name}</h1>
                    <h2>Your Email Id is {data.email}</h2>
                    <h2>Your Phone Number is {data.phone}</h2>
                    <h2>Your Role is {data.role}</h2>
                </>
            )
        }
    }

    const handleLogout = () => {
        sessionStorage.removeItem('rtk') 
        sessionStorage.removeItem('ltk') 
        navigate('/')
    }

    const conditionalRender = (data) => {
        if(data){
            if(data.role.toLowerCase() === "admin"){
                return(
                    <Link to="/users" className='btn btn-success'>
                        Users
                    </Link>
                )
            }
        }
    }

    if(sessionStorage.getItem('ltk') === null){
        navigate('/')
    }else{
        return(
            <>
                <hr/>
                    <div className='panel panel-success'>
                        <div className='panel-heading'>
                            <h3>Profile</h3>
                        </div>
                        <div className='panel-body'>
                            {renderUser(user)} 
                            {conditionalRender(user)} &nbsp;
                            <button onClick={handleLogout}
                            className="btn btn-danger">
                                Logout
                            </button>
                        </div>
                    </div>
            </>
        )
    }
    
}
export default Profile;