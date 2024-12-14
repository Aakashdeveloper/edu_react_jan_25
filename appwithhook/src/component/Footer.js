//import React,{Component} from 'react';
import React from 'react';

const Footer = (props) =>{

    const {month,year} = props  //destructure

    return(
            <React.Fragment>
                <hr/>
                <center>
                    {/* &copy; Developer Funnel {props.month} {props.year} */}
                    &copy; Developer Funnel {month} {year}
                </center>
            </React.Fragment>
        )

}

// class Footer extends Component{
//     render(){
//         const {month,year} = this.props  //destructure
//         return(
//             <React.Fragment>
//                 <hr/>
//                 <center>
//                     {/* &copy; Developer Funnel {this.props.month} {this.props.year} */}
//                     &copy; Developer Funnel {month} {year}
//                 </center>
//             </React.Fragment>
//         )
//     }
// }

export default Footer