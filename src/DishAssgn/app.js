import React, { Component } from 'react';
import Dish from "./dish";
import './app.css';

class App extends Component {

    state={
        existingDishes:{
            A:{name:'Lays',Energy:'Energy '+34,price:'Price '+20},
            B:{name:'Burger',Energy:'Energy '+ 60,price:'Price '+ 45},
            C:{name:'Pizza',Energy:'Energy '+150,price:'Price '+280}
        },
        newdishCounter:0

    };
    createDish=()=>{
        this.state.newdishCounter+=1;
        let newDishObjectName='newDish'+this.state.newdishCounter;
        this.state.existingDishes[newDishObjectName]={name:'French Fries',Energy:'Energy '+35,price:'Price '+50};
        this.setState({})
    };

    render() {
        return (

            <div className='container'>
                <h1>Menu</h1>
                <div className="card">

                    {this.state.existingDishes && Object.keys(this.state.existingDishes).map((detail, id) => {
                        return <Dish key={id} DishObject={this.state.existingDishes[detail]}/>;
                    })}
                </div>
                <button onClick={()=>{this.createDish('newDish')}}>Add Dish</button>

            </div>
        );
    }
}

export default App;