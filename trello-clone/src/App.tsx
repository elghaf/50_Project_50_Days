import React from 'react';



// import contianer styles 

import {
  AppContainer,
  ColumnContainer,
  ColumnTitle,
  CardContainer
} from './styles'


function App() {
  return (
    <AppContainer>
      <ColumnContainer>
        <ColumnTitle>ToDo:</ColumnTitle>
        <CardContainer>First Item</CardContainer>
        <CardContainer>Second</CardContainer>
        <CardContainer>Third</CardContainer>
      </ColumnContainer>
    </AppContainer>
  );
}

export default App;
