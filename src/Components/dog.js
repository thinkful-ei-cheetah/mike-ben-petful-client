import React from 'react';
import ApiService from '../Services/api-services';


export default class Dog extends React.Component{
  onComponentDidMount() {
    ApiService.getDogs();
  }
  
  render() {
    return(
      <section>
        <div className='dogs-info'>
          <p>Dogs go Here!</p>
        </div>
      </section>
    )
  }
}