import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const res = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    console.log(this);
    this.setState({ images: res.data.results });
  }

  // onSearchSubmit(term) {
  //   axios.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term },
  //     headers: {
  //       Authorization: 'Client-ID RwRusfu0PUGLIAIu88x06dE7MCFGmRE0KbWi21rxPy4'
  //     }
  //   }).then(res => {
  //     console.log(res.data.results);
  //   });
  // }


  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmitSearchBar={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  };
}


export default App;
