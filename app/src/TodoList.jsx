export function TodoList ({tasks, setTasks}){

	const handleDelete = e =>{
		const itemId = +(e.target.parentNode.getAttribute('data-id'));

		setTasks(tasks.filter(item => item.id !== itemId));
	}

	const handleCross = e =>{
		const itemId = +(e.target.parentNode.getAttribute('data-id'));

		setTasks(tasks.map(item => item.id === itemId ? {...item, isChecked: !(item.isChecked)} : item));
	}

	return  <ul className="js--todos-wrapper">
		{tasks.map(item => <li className= {item.isChecked ? "todo-item todo-item--checked" : "todo-item"} key={item.id} data-id={item.id}>
           <input type="checkbox" data-type="cross" onChange={handleCross}></input>
           <span className="todo-item__description">{item.value}</span>
           <button className="todo-item__delete" data-type="delete" onClick={handleDelete}>Видалити</button>
       </li>)}
	</ul>
}