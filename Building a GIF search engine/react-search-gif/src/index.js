import React from 'react';
import ReactDOMClient from 'react-dom';

import SearchBar from  './Component/SearchBar';
import {createRoot} from 'react-dom/client';
import GifList from  './Component/GifList';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

class App extends React.Component {


constructor()
{
    super();
    this.state = 
    {
      gifs: [
        {id: 1, 
        url: 'http://fakeimg.pl/300/'},
        {id: 2, 
        url: 'http://fakeimg.pl/300/'},
        {id: 3,
        url: 'http://fakeimg.pl/300/'}
      ]
    }
}

  handleTermChange(term){
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