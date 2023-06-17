import React from 'react';
function NewItemRow({ id, isDone, name, removeItem, editItem }) {
  // ! Props:
  // * id: gets the id property from the item (dictionary) being passed
  // * idDone: gets the isDone property from the item (dictionary) being passed ---> responsible for saying if item has been completed or not in the checkbox
  // * name: gets the name property from the item (dictionary) being passed
  // * removeItem: a function that allows the user to remove an item from the grocery list
  // * editItem: function that allows user to switch isDone (item has been checked or not) between true and false
  return (
    <div className='single-item'>
      {/* checkbox input for changing isDone between true and false depending if grocery has been completed or not */}
      <input
        type='checkbox'
        checked={isDone}
        onChange={() => {
          editItem(id);
        }}
      />
      {/* if grocery has been checked then name will be displayed with a line in the middleware
      else name will be displayed without a line in the middle */}
      {isDone ? <s>{name}</s> : <p>{name}</p>}
      {/* button to remove any item from the list by calling removeItem function */}
      <button
        type='button'
        className='remove-btn btn'
        onClick={() => {
          removeItem(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default NewItemRow;
