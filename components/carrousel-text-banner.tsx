"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay"

const dataCarrousel = [
  {
    id: 1,
    title: "Prueba 1",
    description: "Descripcion 1",
    link: "#"
  },
  {
    id: 2,
    title: "Prueba 2",
    description: "Descripcion 2",
    link: "#"
  },
  {
    id: 3,
    title: "Prueba 3",
    description: "Descripcion 3",
    link: "#"
  }
]

const CarrouselTextBanner = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-200 dark:bg-primary">
      <Carousel className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 2500
          })
        ]}
      >
        <CarouselContent>
          {dataCarrousel.map(({ id, title, description, link }) => (
            <CarouselItem key={id}
              onClick={() => router.push(link)}
              className="cursor-pointer"
            >
              <div>
                <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col p-2 items-center justify-center">
                    <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>


          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default CarrouselTextBanner