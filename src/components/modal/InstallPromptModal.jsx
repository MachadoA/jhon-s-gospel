import React from 'react';

const InstallPromptModal = ({ onClose }) => {
  const handleInstallClick = () => {
    if (window.deferredPrompt) {
      window.deferredPrompt.prompt();
      window.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuário aceitou a instalação');
        } else {
          console.log('Usuário rejeitou a instalação');
        }
        window.deferredPrompt = null;
        onClose();
      });
    }
  };

  return (
    <modal className="install-modal">
      <div className="install-modal-content">
        <h2>Adicionar à Tela Inicial</h2>
        <p>Adicione este aplicativo à sua tela inicial para acesso rápido.</p>
        <button onClick={handleInstallClick}>Adicionar</button>
        <button onClick={onClose}>Fechar</button>
      </div>
    </modal>
  );
};

export default InstallPromptModal;
