import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import CategoryList from "./_components/CategoryList";
import BusinessList from "./_components/BusinessList";
import RestaurantPage from "./restaurants/[slug]/page";

export default function Home() {
  return (
    <div>
      <CategoryList/>
      <BusinessList/>  
      
      </div>
  );
}
