import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import HomeScreen from './components/HomeScreen'

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
  <HomeScreen />
);