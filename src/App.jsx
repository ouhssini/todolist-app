import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";

function App() {
  const [filter, setFilter] = useState('all')
  const [Alltodos, setAllTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Alltodos));
    setTodos(Alltodos);
    setFilter('all')
  }, [Alltodos]);
  const [todos, setTodos] = useState(Alltodos);
  return (
    <>
      <Header />
      <main className="main container">
        <div className="side">
          <Input Alltodos={Alltodos} setAllTodos={setAllTodos} />
          <Filter setTodos={setTodos} Alltodos={Alltodos} filter={filter} setFilter={setFilter} />
        </div>
        <section className="all-todos">
          {todos.length === 0 && (
            <p className="no-todos">Nothing To show right Now</p>
          )}
          {todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} Alltodos={Alltodos} setAllTodos={setAllTodos} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
