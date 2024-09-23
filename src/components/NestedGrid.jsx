function NestedGrid() {
  return (
    <div className="centered-container">
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="bg-blue-500 text-white p-4">Item 1</div>
        <div className="grid grid-cols-2 gap-2 bg-blue-500 text-white p-4">
          <div className="bg-green-500 p-2">Nested Item 1</div>
          <div className="bg-green-500 p-2">Nested Item 2</div>
        </div>
        <div className="bg-blue-500 text-white p-4">Item 3</div>
        <div className="bg-blue-500 text-white p-4">Item 4</div>
      </div>
      <div className="grid grid-cols-3 grid-flow-row gap-6 border-2 border-red-500">
        <div className="bg-red-500 p-4">Item 1</div>
        <div className="bg-red-500 p-4">Item 2</div>
        <div className="bg-red-500 p-4">Item 3</div>
        <div className="bg-red-500 p-4">Item 4</div>
      </div>
    </div>
  );
}

export default NestedGrid;