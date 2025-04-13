import { NextPage } from 'next';
import React from 'react';

const CalendarPage: NextPage = () => {
  // Calendar data
  const monthYear = '07/2020';
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const days = [
    null, null, null, 1, 2, 3, 4,
    5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        {/* Calendar Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">{monthYear}</h1>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 mb-6">
          {/* Weekday Headers */}
          {weekdays.map((day) => (
            <div key={day} className="text-center font-semibold py-1">
              {day}
            </div>
          ))}

          {/* Calendar Days */}
          {days.map((day, index) => (
            <div
              key={`day-${index}`}
              className={`text-center py-2 rounded ${
                day ? 'hover:bg-gray-100 cursor-pointer' : ''
              }`}
            >
              {day || ''}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-4"></div>

        {/* Game Info */}
        <div className="text-center mb-4">
          <p className="text-lg">Kirby Super Star Ultra Nintendo</p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-4"></div>

        {/* Download Play Message */}
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="font-bold text-center mb-2">DS Download Play</h2>
          <p className="text-center text-gray-700">There is no Game Pak inserted.</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;