import React, { Component } from 'react'
import './App.css';
// import axios from 'axios';
import {recipes} from './tempList';
import RecipeList from './Components/RecipeList';
import RecipeDetails from './Components/RecipeDetails';

 class App extends Component {
  state={
    recipes:recipes,
    url:"https://www.food2fork.com/api/search?key=4b2708e59815dd151680de318dd08363&q=chicken%20breast&page=2",
    details_id:35383
};
    async getRecipes(){

try{
    const data=await fetch(this.state.url);
    const jsondata=await data.json();
    this.setState({
        recipes:jsondata.recipes
    })
}catch(error){
    console.log(error)

}
    }
    componentDidMount(){
      this.getRecipes();
    }

    // componentDidMount(){
    //   axios.get("https://www.food2fork.com/api/search?key=4b2708e59815dd151680de318dd08363")
    //   .then(res => {
    //     const recipes = res.data;
    //     this.setState({ recipes });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    // }
  render() {
    console.log(this.state.recipes)
    return (
      <>
          <RecipeList recipes={this.state.recipes}/>
         <RecipeDetails id={this.state.details_id}/>
         </>
    )
  }
}

// function App() {
//   return (
//     <>
//     <RecipeList/>
//     <RecipeDetails/>
//     </>
//   );
// }

export default App;
