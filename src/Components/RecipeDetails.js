import React, { Component } from 'react'
import {recipe} from '../tempDetails'

export default class RecipeDetails extends Component {
    // constructor(props){
    //     super(props);
    //     // this.state={
    //     //     recipe1: recipe,
    //     //     url:`https://www.food2fork.com/api/get?key=4b2708e59815dd151680de318dd08363&rId=${
    //     //         this.props.id}`
    //     // };
    // }
    
            // async componentDidMount(){
            //     try{
            //         const data=await fetch(this.state.url);
            //         const jsondata=await data.json();
            //         this.setState({
            //             recipe1:jsondata.recipe
            //         })
            //     }
            //     catch(error){
            //         console.log(error)
                
            //     }
            // }
           state={
            recipe: recipe 
        };
        async componentDidMount(){
            console.log(this.props.id)
            const id=this.props.id;
           const url=`https://www.food2fork.com/api/get?key=4b2708e59815dd151680de318dd08363&rId=${id}`;
           try{
                    const data=await fetch(url);
                    const jsondata=await data.json();
                    this.setState((state,props)=>{
                        return{recipe:jsondata.recipe}
                    },()=>{});
                    
                }
                catch(error){
                    console.log(error)
                
                }
        }

  render() {
    const {
        image_url,
        publisher,
        publisher_url,
        source_url,
         title,
        ingredients
    } =this.state.recipe;
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <button type="button" className="btn btn-warning text-capitalize mb-3"> Back to Recipelist</button>
               <img src={image_url} alt="recipe"/>
                </div>
                <div className="col-md-6 mt-5">
                 <h6 className="text-capitalize">{title}</h6> 
                 <h6 className="text-capitalize text-slanted"> provided by {publisher}</h6>  
                 <a href={publisher_url} className="btn btn-success text-capitalize mx-2" target="_blank"  rel="noopener noreferrer" >publisher </a>
                 <a href={source_url} className="btn btn-warning text-capitalize mx-2" target="_blank"  rel="noopener noreferrer" >Recipe url </a>
                 <ul className="list-group mt-4">
                     <h2 className="mt3 mb-4">Ingradients</h2>
                     {
                      ingredients.map((item,i)=>{
                          return(
                              <li key={i} className="list-group text-slanted">{item}</li>
                          )
                      })   
                     }

                 </ul>
               </div>
            </div>
        </div>
        </>
    )
  }
}
