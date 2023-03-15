import { useState, useEffect } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client';
function List({ liste, setListe, myList, filter, setFiltered, result }) {
    const [kapali, setkapali] = useState(false);

    // ✅ Update one or more objects in a state array
    const updateObjectInArray = (id) => {
        console.log(id);
        setListe(current =>

            current.map((obj, i) => {
                if (i === id) {
                    const result = !obj.completed;
                    return { ...obj, completed: result };
                }
                return obj;
            }),
        );
    };

   

    console.log("filtered: ", result);

    const deleteTask = (index) => {
        setListe(current =>

            current.filter((obj, id) => {
                if (id === index) {
                    console.log("silincek: ", obj);

                }
                return id !== index;
            })
        )
    }

    const toggleAll = () => {
        if (kapali === false)
        {
            
            
            setListe(current =>
                current.map((obj, i) => {
                    return { ...obj, completed: true };
                })
                )
            setkapali(true);
        }
        else
         {
            setListe(current =>
                current.map((obj, i) => {
                    return { ...obj, completed: false };
                })
                )
            setkapali(false)
        }
    }

    


    return (

        <section className="main" id='section'>
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all" onClick={() => toggleAll()}>
                Mark all as complete
            </label>

            {/* List */}


            <ul className="todo-list">




                {
                    result.map((obj, key) => (
                        <li className={obj.completed ? "completed" : undefined} key={key}>
                            {console.log("completed: ", key, obj.completed)}
                            <div className='view'>
                                {/*  e.target.completed input objesinin completed */}
                                <input className="toggle" type="checkbox" checked={obj.completed} onChange={(e) => updateObjectInArray(e.target.checked)} onClick={() => updateObjectInArray(key)} />
                                <label>{obj.title}</label>
                                <button className="destroy" onClick={() => deleteTask(key)}></button>
                            </div>
                        </li>
                    ))

                }


            </ul>
            {/* <ul className="todo-list">
                {
                    liste.map((obj, key) => (
                        <li className={obj.completed ? "completed" : undefined} key={key}>
                            {console.log("completed: ", key, obj.completed)}
                            <div className='view'>
                                <input key={Math.random()} className="toggle" type="checkbox" defaultChecked={obj.completed ? true : undefined} onClick={() => updateObjectInArray(key)}/>
                                <label>{obj.title}</label>
                                <button className="destroy" onClick={() => deleteTask(key)}></button>
                            </div>
                        </li>
                    ))
                }
            </ul> */}
        </section>
    )
}

export default List;