function ResponsiveGrid() {
    return (
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-10">
        <div className="bg-green-500 text-white p-4">Item 1</div>
        <div className="bg-green-500 text-white p-4">Item 2</div>
        <div className="bg-green-500 text-white p-4">Item 3</div>
        <div className="bg-green-500 text-white p-4">Item 4</div>
        <div className="bg-green-500 text-white p-4">Item 5</div>
        <div className="bg-green-500 text-white p-4">Item 6</div>
      </div>
    );
}

export default ResponsiveGrid;