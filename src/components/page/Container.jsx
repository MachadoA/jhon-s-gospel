import React, { useRef, useState } from 'react';
import { useDate } from '../../context/DateContext';
import Button from '../Button/Button';
import Itens from './Itens';
import leitura from '../../../public/leitura-joao.pdf';

export default function Container() {
    const itensRef = useRef(null);
    const [copySuccess, setCopySuccess] = useState(false);
    const { resetStartDate } = useDate();

    const handleCopy = () => {
      if (itensRef.current) {
        const textToCopy = itensRef.current.innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
          setCopySuccess(true);
          setTimeout(() => setCopySuccess(false), 3000); 
          console.log(textToCopy);
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      }
    };

    const handleShareWhatsApp = () => {
        const textToShare = itensRef.current ? itensRef.current.innerText : '';
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(textToShare)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <main className="container">
            <Itens ref={itensRef} />
            <section className="btnStyle">
                <div>
                    <Button className="copyBtn" label='Copiar' onClick={handleCopy} />
                    {copySuccess && <h3 className="textShowup">Conteúdo copiado!</h3>}
                </div>
                <div>
                    <Button className="copyBtn" label='Partilhar no WhatsApp' onClick={handleShareWhatsApp}/>
                </div>
            </section>

            <section className="btnStyle">
                <div>
                  <a href={leitura} target="_blank" rel="noopener noreferrer">
                    <Button className='copyBtn' label='Baixar plano completo' />
                  </a>
                </div>
                <div>
                    <Button className="copyBtn" label='Reiniciar Plano' onClick={resetStartDate}/>
                </div>
            </section>
        </main>
    );
}
