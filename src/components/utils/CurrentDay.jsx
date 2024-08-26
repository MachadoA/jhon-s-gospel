import React, { useState } from 'react';

export default function CurrentDay() {
    const today = new Date();
    const dateSettings = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formatDate = today.toLocaleDateString('pt-BR',dateSettings); 
    
  return (
    <p className='dateToday'>{formatDate}</p>
  )
}
