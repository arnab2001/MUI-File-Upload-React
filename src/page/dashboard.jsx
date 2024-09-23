function Dashboard() {
    return (
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 min-h-screen">
        {/* Sidebar */}
        <aside className="col-span-4 md:col-span-2 lg:col-span-2 bg-gray-800 text-white p-4 sm:hidden lg:block">
          <nav>
            <ul>
              <li className="py-2">Dashboard</li>
              <li className="py-2">Users</li>
              <li className="py-2">Settings</li>
            </ul>
          </nav>
        </aside>
  
        {/* Main Content */}
        <main className="col-span-4 md:col-span-4 lg:col-span-10 bg-white p-6">
          <header className="bg-gray-200 p-4 text-xl">Admin Dashboard</header>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-500 p-6 text-white">Widget 1</div>
            <div className="bg-green-500 p-6 text-white">Widget 2</div>
            <div className="bg-purple-500 p-6 text-white">Widget 3</div>
          </section>
        </main>
      </div>
    );
  }

  export default Dashboard;