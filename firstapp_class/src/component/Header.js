import React,{Component} from 'react';
import './Header.css';

class Header extends Component{

    constructor(){
        super()
        console.log("inside constructor")

        this.state={
            title:"React Search App",
            count:0,
            keyword:'User Input Here'
        }
    }

    // handleCounter = (event) => {
    //     //console.log(event)
    //     this.setState({count: this.state.count+1})
    // }

    handleChange = (event) => {
        //console.log(event.target.value)
        this.setState({keyword:event.target.value})
        this.props.userText(event.target.value)
    }


    
    render(){
        console.log("inside render")
        return(
            <header> 
                <div className="logo">{this.state.title}</div>
                <input onChange={this.handleChange}/>
                <div id="userText">{this.state.keyword}</div>
                {/* <div>
                    <h2>{this.state.count}</h2>
                    <button onClick={this.handleCounter}>Counter</button>
                </div> */}
                <hr/>
            </header>
        )
    }
}



// const Header = ( ) => {


//     return(
//         <header> 
//             <div className="logo">React</div>
//             <input/>
//             <div id="userText">User Text Here</div>
//             <hr/>
//         </header>
//     )
// }

export default Header