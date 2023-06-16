import React, { useState } from 'react';
export function NewItemRow({ id, isDone, name, removeItem, editItem }) {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={isDone}
        onChange={() => {
          editItem(id);
        }}
      />
      {isDone ? <s>{name}</s> : <p>{name}</p>}
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
