import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CardItem, CardsProps } from '../types/cards-data'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const Cards = ({ items } : CardsProps) => {
  return (
    <div className="w-full flex justify-center">
        <Carousel className="w-full h-full" opts={{ align: 'center', loop: true }}>
            <CarouselContent>
                {items.map( (item: CardItem, index: number) => 
                    (
                    <CarouselItem key={index} className="pl-1 md:pl-4 basis-full md:basis-1/3">
                        <Card key={index} className="border-border/60 transition-shadow hover:shadow-md">
                            <CardHeader className='items-center justify-center'>
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                                    <item.Icon className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <CardTitle className="text-base">{item.title}</CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    </CarouselItem>
                    ))
                }
            </CarouselContent>
            
            <CarouselPrevious className=' md:hidden' />
            <CarouselNext className=' md:hidden'/>

        </Carousel>
    </div>
  )
}

export default Cards