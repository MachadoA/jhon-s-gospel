import React from 'react';
import Button from '../Button/Button';

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
        <h2>Adicionar ao Ecrã</h2>
        <p className='p-modal'>Adiciona este aplicativo ao tua ecrã inicial para acesso rápido.</p>
        <Button className='btnModal' label='Adicionar' onClick={handleInstallClick}/>
        <Button className='btnModal' label='Fechar' onClick={onClose}/>
      </div>
    </modal>
  );
};

export default InstallPromptModal;
