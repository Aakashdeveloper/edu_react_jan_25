import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Users from './Userlist';


const NotFound = () => <h1>404- Page Not Found</h1>

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="users" element={<Users/>}/>

                     {/* Catch All route for 404 */}
                     <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;