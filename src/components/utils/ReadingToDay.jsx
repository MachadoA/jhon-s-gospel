import React from 'react';
import { useDate } from '../../context/DateContext';
import data from '../../data.json';

export default function ReadingToDay() {
  const { startDate } = useDate();

  const today = new Date();
  const idDay = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  const readingToDay = data[idDay] ? data[idDay].read : "Plano de leitura encerrado!";

  return (
    <>
        <p className='readingToDay'>
            {readingToDay}
        </p>
    </>
  )
}
