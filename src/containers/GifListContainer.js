import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

// const SEARCH = this.state.searchTerm
// const URL= 'http://api.giphy.com/v1/gifs/search?q=' + `${SEARCH}` + '&api_key=dc6zaTOxFJmzC'

class GifListContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: [],
      searchTerm: ''
    }
  }



  fetchGifs() {
    const search = this.state.searchTerm
    // debugger
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC`)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        gifs: [json.data[0], json.data[1], json.data[2]]
      })
    })
  }

  // shouldComponentUpdate(nextState) {
  //   debugger
  //   return (this.state.searchTerm !== nextState.searchTerm)
  // }


  updateSearchTerm(event) {
    const term = event.target.value
    this.setState({
      searchTerm: term
    })
  }

  fireFetch(event) {
    event.preventDefault();
    this.fetchGifs()
  }

  render() {
    return (
      <div>
        <GifSearch updateSearchTerm={this.updateSearchTerm.bind(this)} fireFetch={this.fireFetch.bind(this)} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}






export default GifListContainer;
