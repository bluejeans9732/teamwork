import React, { useState } from 'react';

// product아래에 예약 물품 dropdown 함수입니다

function DropDown2({ title, items, onDropdownChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    onDropdownChange({ ...item, quantity: 1 });
  };

  const handleIncrement = () => {
    onDropdownChange({ ...selectedItem, quantity: selectedItem.quantity + 1 });
  };

  const handleDecrement = () => {
    onDropdownChange({ ...selectedItem, quantity: selectedItem.quantity - 1 });
  };

  return (
    <div className="dropdown w-[240px] bg-slate-800 text-white p-3">
      <div className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedItem ? selectedItem.label : title}
      </div>
      {isOpen && (
        <div className="dropdown-menu mt-5">
          {items.map((item) => (
            <div
              key={item.id}
              className={`dropdown-item ${selectedItem && selectedItem.id === item.id ? 'active' : ''} hover:bg-slate-600 cursor-pointer border-l-transparent mt-1`}
              onClick={() => handleItemClick(item)}
            >
              {item.label}
              {selectedItem && selectedItem.id === item.id && selectedItem.quantity > 0 && (
                <div>
                  <button onClick={handleIncrement}>+</button>
                  <button onClick={handleDecrement}>-</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default DropDown2;