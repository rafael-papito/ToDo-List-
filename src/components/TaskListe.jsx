import styles from './Tasks.module.css'
import { Trash } from 'phosphor-react'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export function TaskListe(){
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    function handleCreateNewTask(){
        if (!newTaskTitle) return;
        const newTask = {
            id: uuidv4(),
            title: newTaskTitle,
            isComplete: false,
        }
        setTasks([... newTaskTitle, newTask])
        setNewTaskTitle('')
    }
    console.log(handleCreateNewTask)
    function handleNewTaskChange(){
        setNewTaskTitle(event.target.value)
    }
    function handleToggleTaskCompletion() {
        // Altere entre `true` ou `false` o campo `isComplete` de uma task com dado ID
        const checkTask = tasks.map(task => task.id == id ? {
          ... task,
          isComplete: !task.isComplete,
        }: task)
        setTasks(checkTask)
      }
    function handleDeleteTask(){

    }
    return(
        <article  className={styles.tasks}>
             <form className={styles.formTask}>
                <input 
                   
                    type="text"
                    placeholder="Adicionar uma nova tarefa" 
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    value={newTaskTitle}
                    required
                />
                <button type="submit" onClick={handleCreateNewTask}>Criar <span><PlusCircle size={16} /></span></button>
            </form>
            <header>
                <div className={styles.created}>
                    <p>Tarefas criadas <span>5</span></p>
                </div>
                <div className={styles.completed}>
                <p>concluidos<span>2 de 5</span></p>
                </div>
            </header>
            <div className={styles.list}>
            {tasks.map(task =>(
                    <form key={task.id} className={styles.format}>
                    <div className={task.isComplete ? 'completed' : ''} data-testid="task">
                        <label className={styles.container}>
                            <div className={styles.check}>
                                <input 
                                    type="checkbox"
                                    readOnly
                                    checked={task.isComplete}
                                    onClick={ handleToggleTaskCompletion}
                                />
                                <span className={styles.checkmark}></span>
                            </div>
                        </label>
                    </div>
                    <div className={styles.content}>
                        <p>{task.title}</p>
                    </div>
                    <div className={styles.delete}>
                        <button onClick={handleDeleteTask} className={styles.deleteHover} title='Deletar task'>
                            <Trash size={24}/>
                        </button>
                    </div>
                    </form>
                ))}
            </div>
        </article>
    )
}
/*
{tasks.map(task =>(
                    <form key={task.id} className={styles.format}>
                    <div className={task.isComplete ? 'completed' : ''} data-testid="task">
                        <label className={styles.container}>
                            <div className={styles.check}>
                                <input 
                                    type="checkbox"
                                    readOnly
                                    checked={task.isComplete}
                                    onClick={() => handleToggleTaskCompletion(task.id)}
                                />
                                <span className={styles.checkmark}></span>
                            </div>
                        </label>
                    </div>
                    <div className={styles.content}>
                        <p>{task.title}</p>
                    </div>
                    <div className={styles.delete}>
                        <button onClick={handleDeleteTask} className={styles.deleteHover} title='Deletar task'>
                            <Trash size={24}/>
                        </button>
                    </div>
                    </form>
                ))}
* */