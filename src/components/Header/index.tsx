import {
  Home,
  ListOrdered,
  LogIn,
  Menu,
  PercentIcon,
  ShoppingCart,
  User,
} from 'lucide-react'
import { Button, buttonVariants } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex items-center justify-between  border-b-2 border-gray-400/20 p-8 lg:px-24 lg:py-10">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="bg-transparent hover:bg-gray-500/30"
              size={'icon'}
              variant={'outline'}
              aria-label="Abrir menu"
              data-testid="button-menu"
            >
              <Menu size={18} color="white" />
            </Button>
          </SheetTrigger>
          <SheetContent side={'left'} data-testid="menu-content">
            <ul className="mt-6 space-y-2 font-bold">
              <li>
                <Link
                  href={'/'}
                  className={`${buttonVariants({
                    variant: 'outline',
                  })} w-full gap-2 px-10 py-4 text-xs font-bold capitalize lg:px-14`}
                >
                  <Home size={18} /> Início
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className={`${buttonVariants({
                    variant: 'outline',
                  })} w-full gap-2 px-10 py-4 text-xs font-bold capitalize lg:px-14`}
                >
                  <ListOrdered size={18} /> Catálogo
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className={`${buttonVariants({
                    variant: 'outline',
                  })} w-full gap-2 px-10 py-4 text-xs font-bold capitalize lg:px-14`}
                >
                  <PercentIcon size={18} /> Ofertas
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className={`${buttonVariants({
                    variant: 'outline',
                  })} w-full  gap-2 px-10 py-4 text-xs font-bold capitalize lg:px-14`}
                >
                  <LogIn size={18} /> Fazer Login
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>

      <h1 className="text-lg font-bold ">
        <span className="bg-text-gradient bg-clip-text uppercase text-transparent">
          fsw
        </span>{' '}
        Store
      </h1>

      <ul className=" hidden gap-6 font-bold lg:flex">
        <li>Início</li>
        <li>Catálogo</li>
        <li>Ofertas</li>
      </ul>

      <div className="lg:flex lg:gap-6">
        <Button
          className="hidden bg-transparent hover:bg-gray-500/30 lg:flex"
          size={'icon'}
          variant={'outline'}
        >
          <User size={18} color="white" />
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="bg-transparent hover:bg-gray-500/30"
              size={'icon'}
              variant={'outline'}
              aria-label="Ver carrinho"
            >
              <ShoppingCart size={18} color="white" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <h1>menu cart</h1>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
