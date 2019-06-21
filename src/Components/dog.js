import React from 'react';
import ApiService from '../Services/api-services';


export default class Dog extends React.Component{
  
  async componentDidMount() {
    const dogs = await ApiService.getDogs()
    
    this.props.setDogs(dogs);
  }

  handleAdoptDog = async () => {
    const dogs = await ApiService.adoptDog()

    this.props.setDogs(dogs);
  }
  
  render() {
    
    if (!this.props.dogs.first) {
      return(
        <section>
          <div className='dogs-info'>
            <p>Dogs go Here!</p>
          </div>
        </section>
      )
    } else {
      const dogs = this.props.dogs.first.value;
      return(
        <section>
          <div className='dogs-info'>

            <img src={dogs.imageURL} height="300" width="300" alt="pet for adoption" />
            <p>Name: {dogs.name}</p>
            <p>Sex: {dogs.sex}</p>
            <p>Age: {dogs.age}</p>
            <p>Breed: {dogs.breed}</p>
            <p>Story: {dogs.story}</p>
            <p>Status: {this.props.status}</p>

          </div>

          <button onClick={this.handleAdoptDog}>Adopt this dog!</button>
        </section>
    )}
  }
}