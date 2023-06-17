import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';

function Form({ addNewItem }) {
  // ! Props:
  // * newItem: useState responsible for keeping track of the name of the newItem being typed and added by the user
  // * setNewItem: useState function responsible for setting the name of the newItem being typed and added by the user
  // * items: useState list of all dictionaries with the grocery list created by the users
  // * setItems: useState function to set the list of all dictionaries with the grocery list created by the users
  // * setLocalState: function responsible for setting items list to the local browser storage

  //Acts as a reference for the input component
  //It is used to keep track of name typed by the user
  //In a uncontrolled form
  const refContainer = useRef(null);

  //handleSubmit handles when the user submits a form
  //creates a new item for the list and sets it to items and local storage
  function handleSubmit(e) {
    e.preventDefault();
    //sets name to the value of the input typed by the user
    const name = refContainer.current.value;
    //if the form is empty: return (stop the function here)
    if (!name) return;
    //adds new item to list:
    console.log(name);
    addNewItem(name);
    //clears input
    refContainer.current.value = '';
    //show toast success message
    toast.success('You have added a new item!');
  }

  return (
    <div>
      <form className='form-control' onSubmit={handleSubmit}>
        <input type='text' className='form-input' ref={refContainer} />
        <button type='submit' className='btn'>
          Add Item
        </button>
      </form>
    </div>
  );
}

export default Form;
