
import { Menu } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import Link from "next/link"


const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <Link href="/categorias/margarita" className="block"> Pizza Margarita </Link>
        <Link href="/categorias/pepperoni" className="block"> Pizza Pepperoni </Link>
        <Link href="/categorias/vegetarian" className="block" >Pizza Vegetaria</Link>
        <Link href="/categorias/hawai" className="block"> Pizza Hawaiana</Link>  
        <Link href="/categorias/cuatro-quesos" className="block"> Pizza Cuatro Quesos</Link>
      </PopoverContent>
    </Popover>

  )
}

export default ItemsMenuMobile