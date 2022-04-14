import React from 'react';
import ReactDOMClient from 'react-dom';

import SearchBar from  './Component/SearchBar';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

class App extends React.Component {


  handleTermChange(term){
    console.log('aaaaa')
    console.log(term);
  }
    render() {
        return (
            <div className="greeting">
                <SearchBar onTermChange = {this.handleTermChange}/>
                <p className="greeting-text">Hello World!</p>
                
            </div>
        );
    }
}

root.render(
  
    <App />
  
);