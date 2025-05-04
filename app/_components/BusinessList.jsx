"use client"
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Businessitem from './Businessitem';
import BusinessItemSkeleton from './BusinessItemSkeleton';

function BusinessList() {
    const params = useSearchParams();
    const [category, setCategory] = useState('Tudo');
    const [businessList, setBusinessList] = useState([]);
    const [loading, setLoading] = useState(false);

    // Função para buscar restaurantes pela categoria
    const getBusinessList = async (category_) => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants/category/${category_}`);
            const data = await response.json();
            setBusinessList(data || []);
        } catch (err) {
            console.error("Erro ao buscar restaurantes:", err);
        } finally {
            setLoading(false);
        }
    };

    // Atualiza a categoria e busca os restaurantes ao carregar a página
    useEffect(() => {
        if (params) {
            const categoryParam = params.get('category') || 'Tudo';
            setCategory(categoryParam);
            getBusinessList(categoryParam);
        }
    }, [params]);

    return (
        <div>
            <h2 className='font-bold text-2xl'>Restaurantes de {category} Populares</h2>
            <h2 className='font-bold text-primary'>{businessList?.length} Resultados</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-3'>
                {!loading ? (
                    businessList.map((restaurant, index) => (
                        <Businessitem key={index} business={restaurant} />
                    ))
                ) : (
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <BusinessItemSkeleton key={index} />
                    ))
                )}
            </div>
        </div>
    );
}

export default BusinessList;
