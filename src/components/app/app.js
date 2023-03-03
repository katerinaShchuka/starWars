import React, { Component } from 'react';
import './app.css';
import Header from '../header';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';
import SwapiService from '../services/swapi-service';
import Row from '../row/row';
import PlanetDetails from '../planet-details/planet-details';


export default class App extends Component {

    swapiService = new SwapiService();

state = {
    showRandomPlanet: true,
    selectedPerson: 5,
    hasError: false
}

toggleRandomPlanet = () => {

}

onPersonSelected = (id) => {
    this.setState({
        selectedPerson: id
    })
    }

    componentDidCatch() {
        console.log('componentDidCatch()');
        this.setState({ hasError: true })
    }


render() {

    if (this.state.hasError) {
        return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ? 
    <RandomPlanet /> :
    null;

const personDetails = (
    <PersonDetails personId = {11} />
)

const planetDetails = (
    <PlanetDetails planetId = {11} />
)


return (

    <div className="stardb-app">
        <Header />

        <Row 
        left = {personDetails}
        right = {planetDetails} />
    
        <div className="row mb2 button-row">
        <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
                Toggle random Planet
            </button>
            </div>

            <PeoplePage />

        <div className="row mb2">
            <div className="col-md-6">
                <ItemList onItemSelected={this.onPersonSelected} 
                getData={this.swapiService.getAllPlanets}
                renderItem={(item) => (
                <span>{item.name} <button>!</button></span>
                )}/>
            </div>
        <div className="col-md-6">
            <PersonDetails personId = {this.state.selectedPerson}/>
        </div>
        </div>

        <div className="row mb2">
            <div className="col-md-6">
                <ItemList onItemSelected={this.onPersonSelected} 
                getData={this.swapiService.getAllStarships()}
                renderItem={(item) => item.name}/>
            </div>
        <div className="col-md-6">
            <PersonDetails personId = {this.state.selectedPerson}/>
        </div>
         </div>
    </div>
)
}

}
