import React from 'react';
import process from './process'
import { Link } from 'react-router-dom';
// import ApiService from "../../src/Services/api-services";
// import Dog from "../Components/dog";
// import Cat from '../Components/cat';




export default class HomePage extends React.Component {
   
    render() {
        return (
            <section>
                <h1>Welcome to FIFO Pet Adoption!</h1>
                <h2>Where you take what we give you!</h2>

                {process}
                <br />
                
                <Link to={'/adoptions'}>
                    <button>
                        START
                    </button>
                </Link>

            </section>
        )
    }
}