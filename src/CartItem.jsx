function TodoStats(props) {
    return(
        <div>
            <h2>Total: {props.total}</h2><h2>Completed: {props.completed}</h2><h2>Left: {props.left}</h2>
        </div>
    )

}
export default TodoStats;