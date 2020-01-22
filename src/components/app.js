import React from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import SearchBox from './SearchBox';
import ImageComponent from './ImageComponent';
import ImageDetails from './ImageDetails';
import {gifImages} from '../action';


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            apiKey:"Sd1DxtuWvo66vUPjFXnjlUNriE5u6Cs5",
            images:[],
            page:1,
        }
    }
    componentDidMount(){
        Axios.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Sd1DxtuWvo66vUPjFXnjlUNriE5u6Cs5&limit=10")
        .then(response=>{
            console.log(response.data.data, "Giphy response comes here")
            this.props.gifImages(response.data.data)
        })
        .catch(err=>{
            console.log(err, "Giphy error comes here")
        })
    }
    handleSubmit= async (value)=>{
      const response = await  Axios.get("http://api.giphy.com/v1/gifs/search",
        {
        params:{q:value,api_key:this.state.apiKey,limit:10}
        }
        )
       console.log(response.data.data)
       this.setState({page:1})
       this.props.gifImages(response.data.data)
    //    this.setState({images:response.data.data})
    }
    handleDetails=(value)=>{
        this.setState({page:2})
        console.log(value, "Click Image")
    }
    render(){
        return(
            <div>
                <h2 style={{textAlign:'center', marginTop:20,}}>Simple Giphy App</h2>
                <div style={{textAlign:'center', marginTop:40,width:500}}>
                    <h2>Search any gif image and press Enter</h2>
                    <SearchBox handleSubmit={this.handleSubmit} />
                </div>
                {
                        this.state.page===1?
                            <ImageComponent handleDetails={this.handleDetails} />
                        :
                        <ImageDetails/>
                }
            </div>

        );
    }
}
const mapStateToProps=(state)=>{
    console.log(state)
    
}
export default connect(mapStateToProps, {gifImages:gifImages})(App);