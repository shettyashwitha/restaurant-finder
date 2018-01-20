import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import './auto-complete.css';
class AutoComplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: 'Koramangala 3rd Block' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.loadRestuarantListFunction();
  }

  loadRestuarantListFunction() {
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(this.props.loadRestuarantList)
      .catch(error => console.error('Error', error))
  }

  componentDidMount() {
    this.loadRestuarantListFunction();
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <form className = "search-form" onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete inputProps={inputProps} onEnterKeyDown={this.loadRestuarantListFunction.bind(this)}/>
        <button type="submit">Find Restaurant</button>
      </form>
    )
  }
}

export default AutoComplete;
