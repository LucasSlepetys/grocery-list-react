import { Form } from './Form';
import { NewItemRow } from './NewItemRow';
import { useState } from 'react';
import data from './data';
import { ToastContainer, toast } from 'react-toastify';

// const getLocalStorage = () => {
//   let list = localStorage.getItem('list');
//   if (list) {
//     list = JSON.parse(localStorage.getItem('list'));
//   } else {
//     list = [];
//   }

//   const defaultList = JSON.parse(localStorage.get('list') || '[]');

//   return defaultList;
// };

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('list') || '[]')
  );
  const [newItem, setNewItem] = useState('');

  function setLocalState(items) {
    localStorage.setItem('list', JSON.stringify(items));
  }

  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
    setLocalState(items.filter((item) => item.id !== id));
  }

  function editItem(id) {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, isDone: !item.isDone };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalState(newItems);
  }

  return (
    <main className='section-center'>
      <Form
        newItem={newItem}
        setNewItem={setNewItem}
        setItems={setItems}
        items={items}
        setLocalState={setLocalState}
      />
      <div className='items'>
        {items.map((item) => {
          return (
            <NewItemRow
              key={item.id}
              {...item}
              removeItem={removeItem}
              editItem={editItem}
            />
          );
        })}
      </div>
      <ToastContainer />
    </main>
  );
};

export default App;
