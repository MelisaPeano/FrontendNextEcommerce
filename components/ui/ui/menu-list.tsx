"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      E-commerce
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Sumerjete en el mundo de las más ricas pizzas, 100% caseras.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda">
                Accede a toda tu infomación, pedidos y mucho más
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                Aquí encontrarás los mejores descuentos y ofertas especiales por tiempo limitado
              </ListItem>
              <ListItem href="/" title="Accesorios">
                Selecciona los extras para acompañar tu pizza!
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Pizzas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/accesorios" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Accesorios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default MenuList

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Pizza Margarita",
    href: "/docs/primitives/alert-dialog",
    description:
      "Se trata de la pizza napolitana más popular, creada en homenaje a la reina de Italia Margherita",
  },
  {
    title: "Pizza Pepperoni",
    href: "/docs/primitives/hover-card",
    description:
      "la combinación de la masa, la mozzarela y el embutido, variedad estadounidense de salami, es fabulosa",
  },
  {
    title: "Pizza Hawaiana",
    href: "/docs/primitives/progress",
    description:
      "Esta pizza es una fiesta para el paladar",
  },
  {
    title: "Pizza Cuatro Quesos",
    href: "/docs/primitives/scroll-area",
    description: "Una pizza con cuatro quesos, es una pizza deliciosa",
  },
  {
    title: "Pizza Vegetariana",
    href: "/docs/primitives/tabs",
    description:
      "Alternativa Plant based para la pizza vegetariana",
  },
  {
    title: "Pizza Napolitana",
    href: "/docs/primitives/tooltip",
    description:
      "Es sencilla, sin demasiadas pretensiones, pero la masa y ese borde crujiente lo es ¡TODO!",
  },
]
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
