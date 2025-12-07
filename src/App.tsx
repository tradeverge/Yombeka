import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentId, setCurrentId] = useState<number>(1);

  const handleNavigate = (page: string, id?: number) => {
    setCurrentPage(page);
    if (id) setCurrentId(id);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    document.title = 'Yombeka Construction - Building Uganda\'s Future';
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'projects':
        return <Projects onNavigate={handleNavigate} />;
      case 'project':
        return <ProjectDetail projectId={currentId} onNavigate={handleNavigate} />;
      case 'blog':
        return <Blog onNavigate={handleNavigate} />;
      case 'blogpost':
        return <BlogPost blogId={currentId} onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
