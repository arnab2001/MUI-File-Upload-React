import React from 'react';

function SimpleGrid() {
    return (
      <div className="centered-container">
        <div className="grid-container grid grid-cols-3 gap-4">
          <div className="bg-purple-200 text-purple-900 p-4 rounded">Item 1</div>
          <div className="bg-purple-200 text-purple-900 p-4 rounded">Item 2</div>
          <div className="bg-purple-200 text-purple-900 p-4 rounded">Item 3</div>
          <div className="bg-purple-200 text-purple-900 p-4 rounded">Item 4</div>
          <div className="bg-purple-200 text-purple-900 p-4 rounded">Item 5</div>
          <div className="bg-purple-200 text-purple-900 p-4 rounded">Item 6</div>
        </div>
      </div>
    );
}

export default SimpleGrid;
