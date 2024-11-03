import React from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { About } from './pages/About';

function App() {
  const [currentPage, setCurrentPage] = React.useState('/');

  React.useEffect(() => {
    const handleNavigation = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {currentPage === '/' && <Home />}
        {currentPage === '/shop' && <Shop />}
        {currentPage === '/about' && <About />}
      </main>
    </div>
  );
}

export default App;