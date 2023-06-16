import React from 'react';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';

export function Form({
  handleSubmit,
  newItem,
  setNewItem,
  setItems,
  items,
  setLocalState,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) return;
    const newItems = [
      ...items,
      {
        id: nanoid(),
        name: newItem,
        isDone: false,
      },
    ];
    setItems(newItems);
    setLocalState(newItems);
    setNewItem('');
    toast.success('You have added a new item!');
  }

  return (
    <div>
      <h4>Grocery Bud</h4>
      <form className='form-control' onSubmit={handleSubmit}>
        <input
          type='text'
          value={newItem}
          className='form-input'
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button type='submit' className='btn'>
          Add Item
        </button>
      </form>
    </div>
  );
}
