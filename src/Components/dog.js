import React from 'react';
import ApiService from '../Services/api-services';


export default class Dog extends React.Component{
  async componentDidMount() {
    const dogs = await ApiService.getDogs()
    
    this.props.setDogs(dogs);
    console.log('hi')
  }
  
  render() {
    return(
      <section>
        <div className='dogs-info'>
          <p>Dogs go Here!</p>
          {Object.keys(this.props.dogs)}

        </div>
      </section>
    )
  }
}