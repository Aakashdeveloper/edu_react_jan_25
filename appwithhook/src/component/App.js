import React,{Fragment,useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductDisplay';
import JSON from './data.json';


//JSX >JavaScript Xml
const App =() => {

    const [productData] = useState(JSON);
    const [filteredData,setFilterData] = useState(JSON);


    const filterProduct = (keyword) => {
        let output = productData.filter((data) => {
            return (
                data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
                ||  data.description.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            )
        })
        setFilterData(output)
    }

    return(
        <Fragment>
            <Header userText={(data) => {filterProduct(data)}}/>
            <ProductDisplay products={filteredData}/>
            <Footer year="2025" month="Jan"/>
        </Fragment>
        
    )
    
}

export default App
