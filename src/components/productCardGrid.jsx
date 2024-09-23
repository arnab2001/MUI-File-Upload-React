function ProductCardGrid() {
    return (
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="bg-yellow-500 p-4 flex justify-center">
          <p>Centered Item</p>
        </div>
        <div className="bg-yellow-500 p-4 flex justify-start">
          <p>Left Aligned</p>
        </div>
        <div className="bg-yellow-500 p-4 flex justify-end">
          <p>Right Aligned</p>
        </div>
      </div>
    );
  }

export default ProductCardGrid;