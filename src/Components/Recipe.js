import React, { Component } from 'react';
import '../App.css';

export default class Recipe extends Component {
   
  render() {
    const pStyle = {
     
      width:'400px',
      height:'300px',
      padding:'30px'
    };
    // console.log(this.props.recipeitem)
    const {
        image_url
        // title,
        // publisher,
        // source_url
        // recipe_id
    }=this.props.recipe;
    return (
     <>
   {/* <div className="row">
   <div className="col-sm-12 col-lg-4 my-3">
<div className="card">
<img src={image_url} className="img-card-top recipe-img" alt="recipe" /> 
<div className="card-body text-capitalize"  >
<h6>{title}</h6>
<h6 className="text-warning text-slanted">
    Provided by{publisher}
</h6>
</div>
<div className="card-footer">
    <button type="button" className="btn btn-primary text-capitalize">
        details
    </button>
<a href={source_url} className="btn btn-success text-capitalize mx-2" target="_blank"  rel="noopener noreferrer" >
   Recipe url 
</a>
</div>
</div>
   </div>
   </div> */}
<div className="row">
  <div className="col-md-6 col-lg-4">
  <img src={image_url} className=" recipe-img" alt="recipe" style={pStyle} /> 
  </div>
</div>
     </>
    )
  }
}
