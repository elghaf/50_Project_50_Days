# Building a GIF search engine :

Part 1 : Building a GIF Search Engine
Part 2 : Refactoring with Redux 
Part 3 : Routing and Auth
Part 4 : Firebase

Why React 
A lot of people are excited about react, Facebook new JAVASCRIPT Framework.
Big companies, among them Netflix, Yahoo...
are making React a critical part of their stack, and it seems like more and more developers are singing its praises.

## The fundamentals of React :
To understand React, you need to think in terms of self-contained components. A component is a module that contains all of the HTML and JS it needs.

The app we are going to create takes text input from a search field and returns a list of individual gifs. this can be broken down into four seperate React components.

{ App : {
            {Search bar : inputText}
            {Gif List : {Gif Item : Image}}

        }

}

Adding it to our render method as a self losing component.
(Please note that <SearchBar> alone is not valid JSX; if the component does not have a body, it is important to add /> to close the tag)
Lets refactor this code to be more interactive. we need to create an input field in our SearchBar component and be able to track what term we are searching for in our main app component so that we can use it to search the Gipy API

## Constructor()
We added a constructor() method at the top of the class. Similar to what you might find in other OOP languages, the constructor runs automatically when the class is initialized. calling super() within that method lets us access this.state within the constructor. since our class is a subclaass of React.Component.
We are aleady extending react.Component when initializing our SearchBar class, but if we want access to React's this.state in the constuctor, we need to make sur that our class is inheriting whatever properties are inside of the constructor of the parent. ReactComponent

### onChange( )
Every time we update our input, React's onchange property automatically fires.
you probably notices the odd-looking  syntax within the curly braces.
#### A fat arrow function like this
e => this.onInputChange(e.target.value)

is equivalent to the following code :
function(event){
    this.onInputChange(event.target.value);
}

