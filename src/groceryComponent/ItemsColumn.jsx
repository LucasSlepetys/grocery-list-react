import NewItemRow from './NewItemRow';

import React from 'react';
function ItemsColumn({ items, removeItem, editItem }) {
  //Props that will go to next component:
  const passPropToNewItemsRow = { removeItem, editItem };
  //! Props:
  // * items: useState list of all dictionaries with the grocery list created by the users
  // * removeItem: a function that allows the user to remove an item from the grocery list
  // * editItem: function that allows user to switch isDone (item has been checked or not) between true and false
  return (
    <div className='items'>
      {/* maps through all items within the items list and creates a NewItemRow to display grocery list */}
      {items.map((item) => {
        return (
          <NewItemRow key={item.id} {...item} {...passPropToNewItemsRow} />
        );
      })}
    </div>
  );
}

export default ItemsColumn;
