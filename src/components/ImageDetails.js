import React from 'react';
import {connect} from 'react-redux';



    class ImageDetails extends React.Component{
        constructor(props){
            super(props)
            this.state={
                images:"",
            }
    
        }
        
        render(){
    return(
        <div className="row">
            <div className="col-md 3">

            </div>
            <div className="col-md 6">
                <div className="card" style={{width:600,}}>
                    <img src={this.props.image.images.original.url} className="card-img-top"/>
                    <p className="card-text" style={{textAlign:'left'}}>Name:  {this.props.image.title} </p>
                    <p className="card-text" style={{textAlign:'left'}}>Source:  {this.props.image.source_tld} </p>
                </div>
            </div>
            <div className="col-md 3">

            </div>
        </div>

    )
    }

}
const mapStateToProps=(state)=>{
    console.log(state.selectedImage, "ppppp")
    return{
        image:state.selectedImage,
    }
    
}
export default connect(mapStateToProps)(ImageDetails);