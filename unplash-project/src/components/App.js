import React from 'react';
import unplash from '../api/unplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

  state = {images: []}

  onSearchSubmit= async (term) => {
    const responce = await unplash.get('/search/photos',{
      params :{query: term},
    
    });
    this.setState({images:responce.data.results});
  }

  render () {
    return (
      <div className="ui container" style={{marginTop:"10px"}}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList/>
      </div>
    );
}
}

export default App;