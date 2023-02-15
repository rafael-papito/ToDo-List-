
import styles from './App.module.css';
import { Add } from './components/Add';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import './Global.css';


function App() {
  return (
    <div>
        <Header/>
        <div className={styles.wrapper}>
          <Add/>
          <Tasks/>
        </div>
    </div>
  )
}

export default App
