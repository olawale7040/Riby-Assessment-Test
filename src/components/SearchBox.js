import React from 'react';


class SearchBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search:"",
        }

    }
    handleFormSubmit=(e)=>{
        e.preventDefault();
        this.props.handleSubmit(this.state.search);
    }
    render(){
        return(
            <div style={{marginBottom:20,}}>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" className="form-control" value={this.state.search} onChange={(e)=>this.setState({search:e.target.value})}/>
                </form>
               
            </div>

        );
    }
}

export default SearchBox;