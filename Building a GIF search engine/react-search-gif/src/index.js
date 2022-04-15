import React from 'react';
import ReactDOMClient from 'react-dom';

import SearchBar from  './Component/SearchBar';
import {createRoot} from 'react-dom/client';
import GifList from  './Component/GifList';

import request from 'superagent'

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

class App extends React.Component {


constructor()
{
    super();
    this.state = 
    {
      gifs: []
    }
}

  handleTermChange(term){
    const url = 'http://api.giphy.com/v1/gifs/search?q=${term}&api_key=l9iSKRM53pzRDedo8Ij9sVl1sHVpYuvX'
    console.log('aaaaa')
    console.log(term);
  }
    render() {
        return (
            <div className="greeting">
                <SearchBar onTermChange = {this.handleTermChange}/>
                <GifList gifs = {this.state.gifs}/>
                
            </div>
        );
    }
}

root.render(
  
    <App />
  
);