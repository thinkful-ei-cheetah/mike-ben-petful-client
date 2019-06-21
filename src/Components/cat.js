import React from 'react';
import ApiService from '../Services/api-services';

export default class Cat extends React.Component{
  async componentDidMount() {
    const cats = await ApiService.getCats();
    this.props.setCats(cats);
  }

  render() {
    if (!this.props.cats.first) {
      return (
        <section>
          <div className='cats-info'>
            <p>cats go Here!</p>
          </div>
        </section>
      )
    } else {
      const cats = this.props.cats.first.value;
      return (
        <section>
          <div className='cats-info'>
            <p>cats go Here!</p>

            <img src={cats.imageURL} height="300" width="300" alt="pet for adoption" />
            <p>Sex: {cats.sex}</p>
            <p>Age: {cats.age}</p>
            <p>Breed: {cats.breed}</p>
            <p>Story: {cats.story}</p>
            <p>Status: {this.props.status}</p>

            <p>'testing'</p>

          </div>
        </section>
      )
    }
  }
}
