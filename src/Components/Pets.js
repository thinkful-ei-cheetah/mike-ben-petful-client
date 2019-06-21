import React from 'react';
import Cat from './Cat';
import Dog from './Dog';

export default class Pets extends React.Component {
    render() {
        return (
            <section className='pet-list'>
                <Dog />
                <Cat />
            </section>
        )
    }
}