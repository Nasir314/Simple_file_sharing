/**********************
Name - Autoseggestion input 
Author - Nasir Ansari, edited in npm modal
Description: This is auto suggestion input component 
***********************/

import React, { Fragment } from 'react';
import Autosuggest from 'react-autosuggest';
import { MDBRow, MDBCol } from 'mdbreact';
import './style.css';
var languages = []

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    if (escapedValue === '') {
        return [];
    }
    const regex = new RegExp('^' + escapedValue, 'i');
    return languages.filter(language => (regex.test(language.name) || regex.test(language.email)));
}

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function renderSuggestion(suggestion) {
    return (
        <Fragment >
            <MDBRow >
                <MDBCol xs="2" sm="2" md="1" lg="1" xl="1">
                    <img className="shar_img" src={suggestion.picture ? suggestion.picture : ""} />
                </MDBCol>
                <MDBCol style={{ marginLeft: "15px" }}>
                    <div style={{ marginTop: "5px" }}>
                        <div> {suggestion.name ? suggestion.name : "NA"} </div>
                        <div className="shar_div_email"> {suggestion.email ? suggestion.email : "NA"} </div>
                    </div>
                </MDBCol>
            </MDBRow>
        </Fragment>
    );
}

class AutoSuggestion extends React.Component {
    constructor(props) {
        super(props);
        languages = this.props.dummyData
        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
        if (event.target.value === undefined) {
            this.props.fnAddMember(newValue)
        }
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Type a name or email",
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps} />
        );
    }
}

export default AutoSuggestion
