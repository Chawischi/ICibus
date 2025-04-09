import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


function RestroTabs({restaurant}) {
  return (
<Tabs defaultValue="category" className="w-[400px] mt-10">
  <TabsList>
    <TabsTrigger value="category">Categoria</TabsTrigger>
    <TabsTrigger value="about">Sobre</TabsTrigger>
    <TabsTrigger value="review">Avaliações</TabsTrigger>

  </TabsList>
  <TabsContent value="category">Categoria</TabsContent>
  <TabsContent value="about">Sobre</TabsContent>
  <TabsContent value="review">Avaliações</TabsContent>
</Tabs>

  )
}

export default Tabs