import React, { forwardRef } from 'react';
import CurrentDay from '../utils/CurrentDay';
import ReadingToDay from '../utils/ReadingToDay';

const Itens = forwardRef((props, ref) => {
  return (
    <article className="information" ref={ref}>
        <h1>*Leitura Bíblica*</h1>
        <h2>Evangelho de João</h2>

        <CurrentDay />
        <p>*Leitura de hoje*</p>
        <ReadingToDay />
    </article>
  );
});

export default Itens;
