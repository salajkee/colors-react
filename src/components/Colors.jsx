import React from 'react';
import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Colors.scss';

const colorsArr = [
  {
    id: uuidv4(),
    title: 'Red',
    isKilled: false,
  },
  {
    id: uuidv4(),
    title: 'Blue',
    isKilled: false,
  },
  {
    id: uuidv4(),
    title: 'Purple',
    isKilled: false,
  },
  {
    id: uuidv4(),
    title: 'Green',
    isKilled: false,
  },
  {
    id: uuidv4(),
    title: 'White',
    isKilled: false,
  },
  {
    id: uuidv4(),
    title: 'Pink',
    isKilled: false,
  },
  {
    id: uuidv4(),
    title: 'Orange',
    isKilled: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'kill':
      return state.map((item) =>
        item.id === action.id ? { ...item, isKilled: !item.isKilled } : item
      );
    case 'reset':
      return state.map((item) => ({ ...item, isKilled: false }));
    default:
      throw new Error('Error');
  }
};

const Colors = () => {
  const [colors, dispatch] = useReducer(reducer, colorsArr);

  const kill = (id) => {
    dispatch({ type: 'kill', id });
  };

  const reset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <div className="colors">
      <ul className="colors__items">
        {colors.map((item) => {
          return (
            <li key={item.id} className="colors__item">
              <p
                className={`colors__item-title ${
                  item.isKilled ? 'killed' : ''
                }`}
              >
                {item.title}
              </p>
              <button
                className="colors__item-btn"
                onClick={() => kill(item.id)}
              >
                {item.isKilled ? 'Revive' : 'Kill'}
              </button>
            </li>
          );
        })}
      </ul>
      <button className="colors__reset-btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Colors;
