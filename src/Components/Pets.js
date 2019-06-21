import React from 'react';
import Cat from './Cat';
import Dog from './Dog';

export default class Pets extends React.Component {

    state = {
        dogs: {},
        cats: {},
        firstInLine: false,
    }

    setDogs = dogs => {
        this.setState({
            dogs
        })
    }

    setCats = cats => {
        this.setState({
            cats
        })
    }

    handleAdoptDog = () => {
        console.log('adopted')
    }

    handleAdoptCat = () => {
        console.log('adopted')
    }
    
    render() {
        return (
            <section className='pet-list'>
                <Dog dogs={this.state.dogs} setDogs={this.setDogs} adopt={this.handleAdoptDog}/>
                <Cat cats={this.state.cats} setCats={this.setCats} adopt={this.handleAdoptCat}/>
            </section>
        )
    }
}