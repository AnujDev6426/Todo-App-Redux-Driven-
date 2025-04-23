import { Provider } from 'react-redux'
import { store } from './app/store.js'
import Todo from './components/todo.jsx'

function App() {
 
  return (
    <>
    
      <Provider store={store}>
        <Todo />
        
      </Provider>

    </>
  )
}

export default App
