import {useState} from 'react'

function SearchForm({liste, setListe, myList}) {
    const [task, setTask] = useState({title: "", completed: false});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        
    
        // setListe((prevState) => [...prevState, {task}])
        // setListe([...liste,task])
        setListe([task, ...liste])

        console.log(liste);
    }


    const arrowFunc = (e) => {

         setTask({...task,title:e.target.value})
    }

    
  return (
    <header className="header">
    <h1>todos</h1>
    <form onSubmit={handleSubmit}>

        <input className="new-todo" placeholder="What needs to be done?" autoFocus onChange={arrowFunc}/>

    </form>
</header>
  )
}

export default SearchForm;