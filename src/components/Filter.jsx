
const Filter = ({ setTodos,Alltodos ,filter,setFilter}) => {
    
    const handleFilter = (e)=>{
        setFilter(e.target.innerText.toLowerCase())
        if(e.target.innerText.toLowerCase() === 'all'){
            setTodos(Alltodos)
        }
        if(e.target.innerText.toLowerCase() === 'active'){
            setTodos(Alltodos.filter(todo => todo.isDone === false))
        }
        if(e.target.innerText.toLowerCase() === 'completed'){
            setTodos(Alltodos.filter(todo => todo.isDone === true))
        }
    }
  return (
    <div className='filter'>
        <button onClick={handleFilter} className={`${filter==="all"? "active" :""}`}>All</button>
        <button onClick={handleFilter} className={`${filter==="active"? "active" :""}`}>Active</button>
        <button onClick={handleFilter} className={`${filter==="completed"? "active" :""}`}>Completed</button>

    </div>
  )
}

export default Filter