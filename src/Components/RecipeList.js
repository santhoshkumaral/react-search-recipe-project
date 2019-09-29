import React, { Component } from 'react'
import RecipeSearch from './RecipeSearch';
import Recipe from './Recipe';
// import {recipes } from '../tempList';

export default class RecipeList extends Component {

  render() {
    const {recipes}=this.props;
    return (
        <>
        <h1>Recipe Lists</h1>
        <RecipeSearch/>
        <div className="container my-5">
<div className="row">
  <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
      <h1 className="text-slanted">recipes</h1>
      </div>  
</div>
<div className="row">
    {
      recipes.map((recipe)=>{
           return(
                <Recipe key={recipe.recipe_id}recipe={recipe}/>  
           )
        })
    }
</div>
        </div>
      
         </>
    )
  }
}
