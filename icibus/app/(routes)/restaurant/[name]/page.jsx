"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import RestroTabs from '../_components/RestroTabs';
import Intro from '../_components/Intro';

function RestaurantDetails() {

    const param= usePathname();
    const [restaurant,setRestaurant] = useState([]);
    useEffect(()=>{
        GetRestaurantDetail(param.split("/")[2])
    },[])
    const GetRestaurantDetail = (slug)=>{
        GlobalApi.GetBusinessDetail(slug).then(resp => {
            console.log(resp);
            setRestaurant(resp.restaurant)
        })
    }
  return (
    <div>
        <Intro restaurant = {restaurant}></Intro>
        <RestroTabs restaurant = {restaurant} />
    </div>
  )
}

export default RestaurantDetails