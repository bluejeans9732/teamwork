import React from 'react';

function SelectedItems({ items }) {
  return (
    <div>
      <h2>선택한 상품 리스트:</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.label} ({item.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectedItems;