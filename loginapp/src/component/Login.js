import {useRef,useState} from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

const base_url = process.env.REACT_APP_API_URL;

const Login = () => {

    const navigate = useNavigate()
    const emailRef = useRef();
    const passRef = useRef();
    const [message,setMessage] = useState()

    function handleSubmit(){
        const formData = {
            email: emailRef.current.value,
            password: passRef.current.value
        }

        console.log(formData)
        fetch(`${base_url}/login`,{
            method:'POST',
            headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth ===  false){
                setMessage(data.token)
            }else{
                sessionStorage.setItem('ltk',data.token)
                navigate('/profile')
            }
        })


        // axios.post(`${base_url}/login`,formData,{
        //     headers:{
        //         'Accept':'application/json',
        //         'Content-Type':'application/json'
        //     }
        // })
        // .then((res) => {
        //     console.log(res.data)
        //     if(res.data.auth ===  false){
        //         setMessage(res.data.token)
        //     }else{
        //         sessionStorage.setItem('ltk',res.data.token)
        //         navigate('/profile')
        //     }
        // })
        
    }

    return(
        <>
            <br/>
            <div className='panel panel-success'>
                <div className='panel-heading'>
                    <h3>Login User</h3>
                </div>
                <div className='panel-body'>
                    <h2 style={{color:'red'}}>{message}</h2>
                    <div className='row'>
                        <div className='col-md-6 form-group'>
                            <label>Email</label>
                            <input className='form-control' ref={emailRef}
                            defaultValue="aakash@gmail.com"/>
                        </div>
                        <div className='col-md-6 form-group'>
                            <label>Password</label>
                            <input className='form-control' ref={passRef}
                            defaultValue="12345678"/>
                        </div>
                    </div>
                    <button className='btn btn-info'
                    onClick={handleSubmit}>
                        Login
                    </button>
                </div>
            </div>
            
        </>
    )
}
export default Login;