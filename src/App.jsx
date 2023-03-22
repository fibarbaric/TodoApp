import './App.css';
import TodoList from './Components/TodoList';

function App() {
  document.body.id = 'todo';
  return (
      <div className='App'>
      <TodoList />
      </div>
  );
}

export default App;
