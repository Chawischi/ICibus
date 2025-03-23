"use client"
import React, { useEffect } from 'react'
import GlobalApi from '../_utils/GlobalApi';

function CategoryList() {
    const [categoryList, setCategoryList] = useState([]);
    useEffect(()=>{
        getCategoryList();
    },[])

    /*Obter a Lista das Categorias*/
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
    <div>CategoryList</div>
  )
}

export default CategoryList