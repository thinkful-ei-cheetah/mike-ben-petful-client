import React from 'react';
import ApiService from '../Services/api-services';

export default class Line extends React.Component {
    state = {
        people: {},
    }
    
    async componentDidMount() {
        const people = await ApiService.getPeople();

        this.setState({
            people,
        });

    }

    lengthOfLine = () => {
        let start = this.state.people.first;
        let counter = 1;
        let next = start.next;

        console.log(next);
        while (next !== null) {
            counter++;
            console.log(counter);
            next = next.next;
        }
        
        return counter;
    }

    adopted = async () => {
        
        const people = await ApiService.personAdopted();
        // await ApiService.getPeople()

        this.setState({
            people,
        })
    }

    addToLine = async() => {
        
        const people = await ApiService.personAdd();
        
        this.setState({
            people,
        })
    } 

    render() {

        if (!this.state.people.first) {
            return (
                <section>
                    <div className='dogs-info'>
                        <p>Setting up the line!</p>
                    </div>
                </section>
            )
        } else {
            let line = this.lengthOfLine();
            return (
                <section>
                    <p>There are {line} people in line! </p>
                    <p>The first person in line is {this.state.people.first.value.name}</p>
                    <button onClick={this.adopted}>test</button>
                    <button onClick={this.addToLine}>add</button>

                    
                </section>
            )
        }
    }
}