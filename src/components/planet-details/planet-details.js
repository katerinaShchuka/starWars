import React, { Component } from 'react';
import './planet-details.css';
import SwapiService from '../../services/swapi-service';

export default class PlanetDetails extends Component {


    swapiService = new SwapiService();

    state = {
        planet: null
    }

    componentDidMount() {
        this.updatePlanet();
    }

    updatePlanet() {
        const { planetID } = this.props;
        if (planetID) {
            return;
        }

        this.swapiService
            .getPlanet(planetId)
            .then((planet) => {
                this.setState({planet}) 
            })
    }

    render() {
        return (
            <div>Planet Details</div>
        )
    }
}