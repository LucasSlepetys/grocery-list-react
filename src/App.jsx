import { Form, ItemsColumn } from './grocery_component';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';

//!Long way of getting local storage
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
  //Short version of getting items from local storage
  //If local storage is null it will create an empty list
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('list') || '[]')
  );

  //Local storage only storages data as strings
  //Therefore localStorage.setItem creates a key value pair
  //'list' is the key and items converted to string is the value
  function setLocalState(items) {
    localStorage.setItem('list', JSON.stringify(items));
  }

  //removeItem gets the id from the NewItemRow component
  //The function filters the dictionary with that id sets items and local storage to the new list
  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
    setLocalState(items.filter((item) => item.id !== id));
  }

  //editItem gets the id from the NewItemRow component
  //The function sets idDone from the dictionary with that specific id according to the state of the checkbox
  //It then sets items to the new list and the local storage
  function editItem(id) {
    //newItems maps through all items until it finds the one with the specific id
    //For the one with a specific ID, it deconstructs its dictionary while simultaneously setting isDone to the opposite value (0 or 1).
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

  //addNewItem takes the name of the new item being added, and adds it to the items list in both useState and local storage
  function addNewItem(newItemName) {
    //newItems is a list with all items from the grocery shopping list + the item item the user has just added
    //nanoid() creates a unique id for the item
    //name: newItem sets the name of the item to the one the user typed
    const newItems = [
      ...items,
      {
        id: nanoid(),
        name: newItemName,
        isDone: false,
      },
    ];
    setItems(newItems);
    setLocalState(newItems);
  }

  return (
    <main className='section-center'>
      {/* Displays form component responsible for adding new items to the grocery
      list */}
      <Form addNewItem={addNewItem} />
      {/* Displays ItemsColumn responsible for showing all items from the grocery list - each as a row */}
      <ItemsColumn items={items} removeItem={removeItem} editItem={editItem} />
      {/* Responsible for showing Toast messages when toast.success/error is selected */}
      <ToastContainer />
    </main>
  );
};

export default App;
