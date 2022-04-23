# Trello App

We will create a simplified version of a kanban board, Apopular example of such an application is Trello.

#### In Trello
we can create tasks and organize them into lists, you can drag both cards and lists to reorder them. you can also add comments and attach files to your tasks.

In this application we will recreate only the core functionality: creating tasks, making lists and dragging them around.

### Finam Result :
we will build our app from scratch.
application will have a bulch of columns that you can drag around, Each column represents a list of tasks.
Each task is rendered as a draggable card. You can drag each card inside a column and between columns.
we can create a new columns by clicking the buttom that says (+).
Add anather list. Each column also has a button at the bottom that allows the creation of new cards.
Create a few more cards and columns and drag them around.
The state of the application is preserved on the backend, you can reload the paeg and all the lists and tasks will stay where you left them.
### How to boostrap React + Typescript App Automatically
We will use an automatic CLI tools to boostrap the project.
##### Why we use automati app generators :
Usually, when you create a React app, you need to create a bunch of boilerplate files.
First, you will need to set up a transpiler, React uses jsx syntax to describe the layout, and also you will probably want to use the modern JS features. To do this we will have to install and set up Babel. it will transform our code to normal JAVASCRIPT that current and older borwsers can cupport.
you will need a bundler. you will have plenty of different files: your components code, styles, maybe images and fonts. To bundle them together into small packages you will have to set up WebPack or Percel.
