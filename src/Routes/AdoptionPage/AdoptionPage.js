import React from 'react';
import { Link } from "react-router-dom";
import Pets from '../../Components/Pets';
import Line from '../../Components/Line';

export default class AdoptionPage extends React.Component{
  
  render() {

    return (
      <section>
        <h1>Adopt a cat or dog!</h1>
        <Line />
        
        <div className='pets-info'>
          <Pets />
        </div>
      
        <Link to={'/'}>
          <button>
            I'm not quite ready to adopt yet
          </button>
        </Link>
      </section>
    )
  }
}