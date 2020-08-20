import React, {useState} from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import './stylesfff.css';
function TodoList() {

  const [items, setItems] = [
    { id: 0, text: 'Buy eggs' },
    { id: 1, text: 'Pay bills' },
    { id: 2, text: 'Invite friends over' },
    { id: 3, text: 'Fix the TV' },
  ]
  console.log(setItems);
  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <ul style={{ marginBottom: '1rem' }}>
        <TransitionGroup className="todo-list">
          {items.map(({ id, text }) => (
            <CSSTransition
              key={id}
              timeout={500}
              classNames="item"
            >
              <div className="listcss">
                <button
                  className="remove-btn"
                  variant="danger"
                  size="sm"
                  onClick={() =>
                    setItems(items =>
                      items.filter(item => item.id !== id)
                    )
                  }
                >

                </button>
                {text}
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </div>
  );
}
export default TodoList;
