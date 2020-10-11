import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (search) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: search,
      },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <div className="ui message">
          <div className="header">Usage</div>
          <p>Type a word (i.e cars, cats, dogs, labrador) and press 'Enter'.</p>
        </div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
