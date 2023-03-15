import './App.css';
import "./components/styles.css"

import SearchForm from './components/SearchForm';
import List from './components/List';
import Filtering from './components/Filtering';

import { useState } from "react";

const initialState = [
  {
    title: "Task 3",
    completed: true
  },
  {
    title: "Task 2",
    completed: false
  },
  {
    title: "Task 1",
    completed: false
  },
];




function App() {
  const [filter, setFiltered] = useState(0);
  const [liste, setListe] = useState(initialState);

  const myList = initialState;

  const filtered = () => {
    console.log(filter);
  
    if (filter === 0) {
      return liste.filter((item) => item);
    } else if (filter === 1) {
      return liste.filter((item) => item.completed === true);
    } else if (filter === 2) {
      return liste.filter((item) => item.completed === false);
    } else {
      return liste.filter((item) => item);
    }
  }

  
  const result = filtered();
  return (
    <div className="App">
      <section className="todoapp">
        <SearchForm liste={liste} myList={myList} setListe={setListe} filter={filter} setFilter={setFiltered} />
        <List liste={liste} myList={myList} setListe={setListe} filter={filter} setFilter={setFiltered} result={result}/>
        <Filtering liste={liste} myList={myList} setListe={setListe} filter={filter} setFilter={setFiltered} result={result}/>
      </section>




      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div>
  );
}

export default App;
