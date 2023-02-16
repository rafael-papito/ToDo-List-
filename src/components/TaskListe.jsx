import styles from './Tasks.module.css'
import { Trash } from 'phosphor-react'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react';



export function TaskListe(){
    const [tasks, setTasks] = useState([
        'Teste'
    ]);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    function handleCreateNewTask(){
        event.preventDefault()
        setTasks([... tasks, newTaskTitle]);
        setNewTaskTitle('');
       
    }
    console.log(handleCreateNewTask)

    function hendleNewTaskChange(){
        setNewTaskTitle(event.target.value);
    }
    function handleDeleteTask(taskToDelete){
        const taskWithoutDeletedOne = tasks.filter(task =>{
            return task != taskToDelete
        })
        setTasks(taskWithoutDeletedOne)
    }
   
    const isNewTaksEmpty = newTaskTitle.length == 0;
    return(
        <article  className={styles.tasks}>
             <form className={styles.formTask}>
                {tasks.map(line => (
                    <input 
                    name='task'
                    type="text"
                    placeholder="Adicionar uma nova tarefa" 
                    onChange={hendleNewTaskChange}
                    value={newTaskTitle}
                    required
                />
                ))}
                <button type="submit" onClick={handleCreateNewTask} disabled={isNewTaksEmpty}>Criar <span><PlusCircle size={16} /></span></button>
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
                {tasks.map(task => (
                    <form key={task} className={styles.format}>
                        <label className={styles.container}>
                            <div className={styles.check}>
                                <input type="checkbox" name="" id=""/>
                                <span className={styles.checkmark}></span>
                            </div>
                        </label>
                        <div className={styles.content}>
                            <p>Lorem ipsum dolorveritatis.</p>
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