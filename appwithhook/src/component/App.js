import React,{Component,Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductDisplay';
import JSON from './data.json';


//JSX >JavaScript Xml
class App extends Component{

    constructor(){
        super()

        this.state={
            productData:JSON,
            filteredDat:JSON
        }
    }

    filterProduct = (keyword) => {
        let output = this.state.productData.filter((data) => {
            return (
                data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
                ||  data.description.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            )
        })
        this.setState({filteredDat:output})
    }

    render(){
        return(
            <Fragment>
                <Header userText={(data) => {this.filterProduct(data)}}/>
                <ProductDisplay products={this.state.filteredDat}/>
                <Footer year="2025" month="Jan"/>
            </Fragment>
            
        )
    }
    
}

export default App
