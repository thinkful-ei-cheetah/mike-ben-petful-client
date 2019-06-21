import React from 'react';
import ApiService from '../Services/api-services';

export default class Cat extends React.Component{
  onComponentDidMount() {
    ApiService.getCats();
  }

  render() {
    return(
      <section>
        <div className='cats-info'>
          <p>Cats go here!</p>
        </div>
      </section>
    )
  }
}