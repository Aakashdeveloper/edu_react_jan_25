import {useRef} from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

const base_url = process.env.REACT_APP_API_URL;

const Register = () => {

    const navigate = useNavigate()
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    function handleSubmit(){
        const formData = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            password: passRef.current.value
        }

        console.log(formData)
        axios.post(`${base_url}/register`,formData,{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(() => navigate('/'))
        .catch((err) =>  console.error(err))
    }

    return(
        <>
            <br/>
            <div className='panel panel-primary'>
                <div className='panel-heading'>
                    <h3>Register User</h3>
                </div>
                <div className='panel-body'>
                    <div className='row'>
                        <div className='col-md-6 form-group'>
                            <label>Name</label>
                            <input className='form-control' ref={nameRef}/>
                        </div>
                        <div className='col-md-6 form-group'>
                            <label>Phone</label>
                            <input className='form-control' ref={phoneRef}/>
                        </div>
                        <div className='col-md-6 form-group'>
                            <label>Email</label>
                            <input className='form-control' ref={emailRef}/>
                        </div>
                        <div className='col-md-6 form-group'>
                            <label>Password</label>
                            <input className='form-control' ref={passRef}
                            type="password"/>
                        </div>
                    </div>
                    <button className='btn btn-success'
                    onClick={handleSubmit}>
                        Register
                    </button>
                </div>
            </div>
            
        </>
    )
}
export default Register;