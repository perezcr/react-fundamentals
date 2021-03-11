// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react';

const allItems = [
  {id: 'apple', value: '🍎 apple'},
  {id: 'orange', value: '🍊 orange'},
  {id: 'grape', value: '🍇 grape'},
  {id: 'pear', value: '🍐 pear'},
];

function App() {
  const [items, setItems] = React.useState(allItems);

  function addItem() {
    setItems([
      ...items,
      allItems.find(i => !items.map(({id}) => id).includes(i.id)),
    ]);
  }

  function removeItem(item) {
    setItems(items.filter(i => i.id !== item.id));
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {items.map(item => (
          //  If you don't have an id, then maybe you could generate an id for the items before you go to render them, or you could use something else about the items that's unique but don't try to use the index of that item because that's the default behavior.
          <li key={item.id}>
            <button onClick={() => removeItem(item)}>remove</button>{' '}
            <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
