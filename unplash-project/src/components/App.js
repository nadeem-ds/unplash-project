import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';

class App extends React.Component {

  state = {images: []}

  async onSearchSubmit(term){
    const responce = await axios
      .get('https://api.unsplash.com/search/photos',{
      params :{query: term},
      headers:{
        Authorization : 'Client-ID HdA_qZEge0GDlnDQjikjQICKYxVYM4epG6W_40P64Tg'
      }
    });
    this.setState({images:responce.data.results});
  }

  render () {
    return (
      <div className="ui container" style={{marginTop:"10px"}}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          Found: {this.state.images.length} images
      </div>
    );
}
}

export default App;