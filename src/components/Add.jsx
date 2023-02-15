import styles from './Add.module.css' 
import { PlusCircle } from 'phosphor-react'

export function Add(){
    return(
       <div>
            <form className={styles.formTask}>
                <input type="text" placeholder="Adicionar uma nova tarefa" />
                <button type="submit">Criar <span><PlusCircle size={16} /></span></button>
            </form>
            
       </div>
    )
}