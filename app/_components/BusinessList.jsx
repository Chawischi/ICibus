"use client"
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi';
import Businessitem from './Businessitem';
import BusinessItemSkeleton from './BusinessItemSkeleton';

function BusinessList() {
    const params = useSearchParams();
    const [category, setCategory] = useState('Tudo');
    const [businessList, setBusinessList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (params) {
            const categoryParam = params.get('category') || 'Tudo';
            setCategory(categoryParam);
            getBusinessList(categoryParam);
        }
    }, [params]);

    const getBusinessList = (category_) => {
        setLoading(true);
        GlobalApi.GetBusiness(category_).then(resp => {
            setBusinessList(resp?.restaurants || []);
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            console.error("Erro ao buscar restaurantes:", err);
        });
    };

    return (
        <div>
            <h2 className='font-bold text-2xl'>Restaurantes de {category} Populares</h2>
            <h2 className='font-bold text-primary'>{businessList?.length} Resultados</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-3'>
                {!loading ? (
                    businessList.map((restaurants, index) => (
                        <Businessitem key={index} business={restaurants} />
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
