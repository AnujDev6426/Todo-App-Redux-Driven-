import {store} from './app/store.js'
import { Provider } from 'react-redux'
import Todo from './components/todo.jsx'

function App() {
 
  return (
    <>
    
      <Provider store={store}>
        <Todo/>
      </Provider>

    </>
  )
}

export default App
