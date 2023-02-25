import React, {Component} from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService()

state = {
    planet: {},
    loading: true,
}



componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000)
}

componentWillUnmount() {
    console.log('componentWillUnmount()')
}

onPlanetLoaded = (planet) => {
    this.setState({
        planet,
        loading: false,
        error: false,
    }) 
}

onError = (err) => {
    this.setState({
        error: true,
        loading: false,
    })
}

updatePlanet = () => {
    console.log('update');
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapiService.getPlanet(id)
    .then(this.onPlanetLoaded)
    .catch(this.onError)
} 

render() {

    console.log('render()')
    const { planet, loading, error } = this.state

    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;
   
    if (loading) {
    return <Spinner />
    }

    return (
        <div className="random-planet jumbotron rounded">
            {errorMassage}
            {spinner}
            {content}
        </div>
        
    )
}
}

const PlanetView = ({planet}) => {

     const { id, name, population, rotationPeriod, diameter } = planet;


    return (
        <React.Fragment>
            <img/>
            <div/>
        </React.Fragment>
    )
}

