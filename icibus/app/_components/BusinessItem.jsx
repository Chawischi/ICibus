import React from 'react';
import Image from 'next/image';

function Businessitem({ business }) {
  // Verificações de dados antes de acessar as propriedades
  const bannerUrl = business?.banner?.url || '/default-banner.jpg'; // URL padrão
  const businessName = business?.name || 'Nome não disponível';
  const rating = business?.rating || 'N/A';
  const businessType = business?.Tipo?.[0] || 'Tipo não disponível';
  const categoryName = business?.categories?.[0]?.name || 'Categoria não disponível';

  return (
    <div className='p-3 hover:border rounded-xl hover:border-primary transition-all duration-200 ease-in-out hover:bg-orange-50'>
      <Image 
        src={bannerUrl} 
        alt={businessName} 
        width={500} 
        height={130} 
        className='h-[130px] rounded-xl object-cover' 
      />
      <div className='mt-2'>
        <h2 className='font-bold text-lg'>{businessName}</h2>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <Image src="/star.png" alt='star' width={14} height={14} />
            <label className='text-gray-400 text-sm'>{rating}</label>
            <h2 className='text-gray-400 text-sm'>{businessType}</h2>
          </div>
        </div>
        <h2 className='text-sm text-primary'>{categoryName}</h2>
      </div>
    </div>
  );
}

export default Businessitem;
