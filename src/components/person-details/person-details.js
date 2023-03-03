import React, { Component } from 'react';
import './person-details.css';

export default class PersonDetails extends Component {

    state = {
        person: null
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }
               
    updatePerson() {

    const { personId } = this.props;
    if(!personId) {
        return;
    }

    this.swapiService
    .getPerson(personId)
    .then((person) => {
        this.setState({ person });

    });
}

    render() {

        if (!this.state.person) {
            return <span>Select a person from a list</span>
        }

        const { person: {
            id, name, gender, birthYear, eyeColor }} = this.state;
        

        return (
            <div className="person-details card">
                <img className="person-image"
                src={`https://starwars-visualguide.com/#/characters/${id}.jpeg`}
                alt="character" />

                <div className="card-boy">
                    <h4>{name} {this.props.personId}</h4>
                    <ul className="list-group list-group-flush">
                        <li className='list-group-item'>
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}