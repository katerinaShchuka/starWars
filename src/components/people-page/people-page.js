import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import Row from '../row/row';


class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {

    if (this.state.hasError) {
        return <ErrorIndicator />
    }
    return this.props.children;
    }
}

export default class PeoplePage extends Component {

    state = {
        selectedPerson: 3,
        hasError: false
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        })
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

       
        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected} 
                getData={this.swapiService.getAllPeople}
                renderItem={({name, gender, birthYear}) => (
                `${name} (${gender}, ${birthYear})`
                )} />
        )

        const personDetails = (
            <PersonDetails personId = {this.state.selectedPerson}/>
        )

        return (
            <ErrorBoundary>
        <Row left={itemList} right={personDetails}/>
            </ErrorBoundary>
    )}
}