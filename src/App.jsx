import Container from './components/page/Container';
import { DateProvider } from './context/DateContext';
import './App.css';
import { useEffect, useState } from 'react';
import InstallPromptModal from './components/modal/InstallPromptModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      window.deferredPrompt = e;
      setShowModal(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  return (
    <DateProvider>
      {showModal && <InstallPromptModal onClose={() => setShowModal(false)} />}
      <Container />
    </DateProvider>
  )
}

export default App
