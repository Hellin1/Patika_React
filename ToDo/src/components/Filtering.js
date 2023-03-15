import React from 'react'

function Filtering({liste, setListe, myList,filter,setFilter, result}) {
    // myList = liste.filter((obj) => obj.completed === true);

    console.log("lisste: ", liste);

    const filtered = () => {


        myList = liste.filter((obj) => obj.comppleted === true);
    }

    const clearCompleted = () => {
        setListe((current) => current.filter((obj,i) => {
            return obj.completed === false; 
        }  ))
    }

    console.log("myList: ",myList);


  return (
  <footer className="footer">
    <span className="todo-count">
        <strong> 
        {
            result.filter(item => !item.completed).length

        } items left
        </strong>
    </span>

    <span>
        {console.log(liste.length)}
    </span>

    <ul className="filters">
        <li>
            <a href="#/"  onClick={() => setFilter(0)} className={filter === 0 ? "selected" : ""} >All</a>
        </li>
        <li>
            <a href="#/"  onClick={() => setFilter(2)} className={filter === 2 ? "selected" : "" }>Active</a>
        </li>
        <li>
            <a href="#/" onClick={() => setFilter(1)} className={filter === 1 ?  "selected" : ""}>Completed</a>
        </li>
    </ul>

    <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
    </button>
 </footer>
  )}

export default Filtering;