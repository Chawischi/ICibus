"use client"
import React, { useEffect, useState} from 'react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function CategoryList() {

    const [categoryList, setCategoryList] = useState([]);
    const params = useSearchParams();
    const [selectedCategory, setSelectedCategory]= useState('Tudo')

    useEffect(()=>{
      setSelectedCategory(params.get('category'));
    },[params])


    useEffect(()=>{
        getCategoryList();
    },[])
    const getCategoryList = () => {
        GlobalApi.GetCategory()
          .then(resp => {
            console.log(resp.categories);
            setCategoryList(resp.categories);
          })
          .catch(err => {
            console.error("Erro ao buscar categorias:", err);
          });
      };
      return (
        <div className='mt-10 flex justify-center'>
          <div className='flex gap-4 overflow-auto'>
            {categoryList && categoryList.map((category, index) => (
              <Link 
                href={'?category=' + category.slug} 
                key={index} 
                className={`flex flex-col items-center gap-2 border p-3 rounded-xl min-w-28
                  hover: border-primary hover: bg-orange-50 cursor-pointer group 
                  ${selectedCategory === category.slug ? 'text-primary border-primary bg-orange-50' : ''}`}
              >
                {console.log(category.icon?.url)} 
                <Image 
                  src={category.icon?.url} 
                  alt={category.name} 
                  width={40} 
                  height={40} 
                  className='group-hover: scale-125 transition-all duration-2'
                />
                <h2 className='text-sm font-medium group-hover:text-primary'>{category.name}</h2>
              </Link>
            ))}
          </div>
        </div>
      );
      
}
      
export default CategoryList