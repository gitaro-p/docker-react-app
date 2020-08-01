import React from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

// function App() {
//   return <div className="App"></div>;
// }

const App: React.FC = () => {
  const todos = [{ id: 't1', text: 'React+TypeScript' }];
  return (
    <div className="App">
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
};

export default App;