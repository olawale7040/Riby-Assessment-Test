import React from 'react';
import {connect} from 'react-redux';
import {imageDetails} from '../action';


class ImageComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            allImages:"",
        }

    }
    componentDidMount(){
        console.log(this.props.images, "Compare ....")
    }
    handleImage=(image)=>{
    this.props.handleDetails(image)
    this.props.imageDetails(image);  
    }
    render(){
        console.log(this.props.images, "Compare ....")
        if(this.props.images.length>0){
           let loop = this.props.images.map(image=>{
            return <div style={{marginBottom:20, cursor:'pointer'}} onClick={()=>{this.handleImage(image)}} className="card col-md-3" key={image.id}>
                <img src={image.images.original.url} alt={image.title} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{image.title}</h5>
             </div>
            </div>
           }) 
        return(
            <div className="row">
               {loop}
            </div>
        
        );
        }
        else{
            return(
                <div>
                    No Image
                </div>
            )
        }
    }
}
const mapStateToProps=(state)=>{
    console.log(state.selectedImage, "2nd componenet")
    
    return{
        images:state.imageList,
    }
    
}

export default connect(mapStateToProps, {imageDetails:imageDetails})(ImageComponent);