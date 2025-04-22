import { useSelector } from "react-redux"

function Todo() {
    const todos = useSelector((state) => state.todos)
    console.log(todos);
    
    return (<>
    
        <h1>Hello this is Anuj</h1>

    </>)
}

export default Todo 