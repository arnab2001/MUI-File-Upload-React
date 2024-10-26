import { useState } from 'react';
import SimpleGrid from './components/SimpleGrid'
import ResponsiveGrid from './components/ResponsiveGrid'
import NestedGrid from './components/NestedGrid'
import ProductCardGrid from './components/productCardGrid'
import Dashboard from './page/dashboard'
import UploadButton from './components/Button';
import UploadForm from './components/Form';

function App() {
  const [showCode, setShowCode] = useState(false);
  const [codeSnippet, setCodeSnippet] = useState('');

  const handleShowCode = (code) => {
    setCodeSnippet(code);
    setShowCode(true);
  };

  return (
    <div className="w-full h-full  space-y-8 ">
      <div>
        {/* <h2 className="text-2xl font-bold mb-4">Simple Grid</h2> */}
        <UploadForm />
      </div>
      {/* <div>
        <h2 className="text-2xl font-bold mb-4">Responsive Grid</h2>
        <ResponsiveGrid />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Nested Grid</h2>
        <NestedGrid />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Product Card Grid</h2>
        <ProductCardGrid />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <Dashboard />
      </div>
      {showCode && (
        <div className="mt-4 p-4 bg-gray-800 text-white rounded">
          <pre>{codeSnippet}</pre>
        </div>
      )} */}
    </div>
  )
}

export default App
