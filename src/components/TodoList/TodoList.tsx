import { TodoInfo } from '../TodoInfo';
import { Todos } from '../../App';
import { Users } from '../../App';
// import { useState } from 'react';

interface Props {
  todos: Todos[];
  users: Users[];
}

// function getRandomDigits() {
//   return Math.random().toFixed(16).slice(2);
// }

export const TodoList: React.FC<Props> = ({ todos, users }) => {
  // const [stateID] = useState<number>(() => +getRandomDigits());

  return (
    <section className="TodoList">
      {todos.map(todo => {
        const user = users.find(person => person.id === todo.userId);

        return (
          <TodoInfo
            key={todo.id}
            todo={todo}
            user={user}
            // onDispaptch={onDispaptch}
          />
        );
      })}
    </section>
  );
};
