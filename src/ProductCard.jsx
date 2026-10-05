

function TodoItem(props) {
    return (
        <div>
    <h1> {props.item.completed ? "✅" : "❌"}
        {props.item.text}</h1>
            <button onClick={()=> props.pinnedNote(props.item.id)}>{ props.item.pinned ? "❌ UNPIN": "📌 PIN"}</button>
            <button onClick={()=> props.completeNote(props.item.id)}>COMPLETE</button>
            <button onClick={()=> props.removeNote(props.item.id)}>DELETE</button>
            <button onClick={()=> props.updateNote(props.item)}>EDIT</button>
        </div>
    )
}
export default TodoItem;