'use client'

import {
  Home,
  ListOrdered,
  LogIn,
  LogOut,
  Menu,
  PercentIcon,
  ShoppingCart,
  User,
} from 'lucide-react'
import { Button, buttonVariants } from '../ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '../ui/sheet'
import Link from 'next/link'
import { CartMenu } from '../CartMenu'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Separator } from '../ui/separator'

export const Header = () => {
  const { status, data } = useSession()

  const handleLogin = async () => {
    await signIn()
  }
  const handleLogOut = async () => {
    await signOut()
  }

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
            <SheetHeader className="mb-4 text-left text-lg font-medium">
              Menu
            </SheetHeader>
            {status === 'authenticated' && data?.user && (
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>
                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>
                <p>{data.user.name}</p>
              </div>
            )}
            <Separator className="my-4" />
            <ul className="mt-6 space-y-2 font-bold">
              <li>
                <SheetClose asChild>
                  <Link
                    href={'/'}
                    className={`${buttonVariants({
                      variant: 'outline',
                    })} w-full gap-2 px-10 py-4 text-xs font-bold capitalize lg:px-14`}
                  >
                    <Home size={18} /> Início
                  </Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link
                    href={'/catalog'}
                    className={`${buttonVariants({
                      variant: 'outline',
                    })} w-full gap-2 px-10 py-4 text-xs font-bold capitalize lg:px-14`}
                  >
                    <ListOrdered size={18} /> Catálogo
                  </Link>
                </SheetClose>
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
              {status === 'unauthenticated' && (
                <li>
                  <Button
                    className="w-full  gap-2 px-10 py-4 text-xs font-bold capitalize lg:px-14"
                    variant={'outline'}
                    onClick={handleLogin}
                  >
                    <LogIn size={18} /> Fazer Login
                  </Button>
                </li>
              )}
              {status === 'authenticated' && (
                <li>
                  <Button
                    className="w-full  gap-2 px-10 py-4 text-xs font-bold capitalize lg:px-14"
                    variant={'outline'}
                    onClick={handleLogOut}
                  >
                    <LogOut size={18} /> Fazer LogOut
                  </Button>
                </li>
              )}
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
        <li>
          <Link href={'/'}>Início</Link>
        </li>
        <li>
          <Link href={'/catalog'}>Catálogo</Link>
        </li>
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
            <CartMenu />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
