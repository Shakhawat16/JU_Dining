import React from 'react';

function NotificationPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Notifications</h1>

        <div className="space-y-4">
          <div className="bg-blue-100 p-4 rounded-lg flex items-center">
            <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
              <i className="fas fa-info-circle"></i>
            </div>
            <div className="ml-4">
              <p className="text-blue-800 font-semibold">Info Notification</p>
              <p className="text-blue-600">This is an informational notification.</p>
            </div>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg flex items-center">
            <div className="bg-red-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <div className="ml-4">
              <p className="text-red-800 font-semibold">Warning Notification</p>
              <p className="text-yellow-600">You have 30 Minutes left to have your meal from Canteen</p>
            </div>
          </div>

          <div className="bg-red-100 p-4 rounded-lg flex items-center">
            <div className="bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <div className="ml-4">
              <p className="text-green-800 font-semibold">Confirmation Notification</p>
              <p className="text-black-600">Your Order have <strong className='text-green-600'>Confirmed Successfully</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationPage;
