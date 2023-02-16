
import styles from './App.module.css';
import { Header } from './components/Header';
import { TaskListe } from './components/TaskListe';

import './Global.css';


function App() {
  return (
    <div>
        <Header/>
        <div className={styles.wrapper}>
          <TaskListe/>
        </div>
    </div>
  )
}

export default App
