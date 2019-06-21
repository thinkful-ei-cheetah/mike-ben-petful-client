import React from 'react';
import ApiService from '../Services/api-services';

export default class Cat extends React.Component{
  async onComponentDidMount() {
    const cats = await ApiService.getCats();
    this.props.setCats(cats);
  }

  render() {
    return(
      <section>
        <div className='cats-info'>
          <p>Cats go here!</p>
          {/* {this.props.cats.first.value.imageURL} */}
        </div>
      </section>
    )
  }
}