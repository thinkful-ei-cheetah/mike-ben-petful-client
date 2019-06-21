import React from 'react';
import Cat from './Cat';
import Dog from './Dog';

export default class Pets extends React.Component {

    state = {
        dogs: {},
        cats: {}
    }

    setDogs = dogs => {
        this.setState( prevState => ({
            dogs: {
                ...prevState.dogs,
                dogs
            }
        }))
    }

    setCats = cats => {
        this.setState({
            cats
        })
    }
    
    render() {
        return (
            <section className='pet-list'>
                <Dog dogs={this.state.dogs} setDogs={this.setDogs}/>
                <Cat cats={this.state.cats} setCats={this.setCats}/>
            </section>
        )
    }
}