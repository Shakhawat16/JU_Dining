import React, { useState } from 'react';

const Dining = () => {
  const [selectedDiningOption, setSelectedDiningOption] = useState('Breakfast');
  const [count, setCount] = useState(0);

  const handleOptionChange = (option) => {
    setSelectedDiningOption(option);
  };

  const handleCountChange = (event) => {
    const newCount = event.target.value <= 0 ? 0 : event.target.value;
    setCount(newCount);
  };

  const calculateTotalCost = () => {
    const couponCost = 30;
    return couponCost * count;
  };

  const handleConfirm = () => {
    const totalCost = calculateTotalCost();
    alert(`You selected ${selectedDiningOption} with ${count} coupons, totaling ${totalCost} Tk.`);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center mb-4">Dining Coupon</h1>

      <div className="mb-4">
        <p className="text-lg font-semibold">Select an Option:</p>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="Breakfast"
              checked={selectedDiningOption === 'Breakfast'}
              onChange={() => handleOptionChange('Breakfast')}
              className="mr-2"
            />
            Breakfast
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="Lunch"
              checked={selectedDiningOption === 'Lunch'}
              onChange={() => handleOptionChange('Lunch')}
              className="mr-2"
            />
            Lunch
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="Dinner"
              checked={selectedDiningOption === 'Dinner'}
              onChange={() => handleOptionChange('Dinner')}
              className="mr-2"
            />
            Dinner
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold">Number of Coupon Selection:</label>
        <input
          type="number"
          value={count}
          onChange={handleCountChange}
          className="w-full px-3 py-2 border rounded-md text-gray-800"
        />
      </div>

      <div className="mb-4">
        <p className="text-lg font-semibold">Total Cost:</p>
        <p>{calculateTotalCost()} Tk</p>
      </div>

      <button
        onClick={handleConfirm}
        className="bg-blue-500 text-white hover:bg-blue-600 font-semibold px-4 py-2 rounded-md"
      >
        Confirm
      </button>
    </div>
  );
};

export default Dining;
