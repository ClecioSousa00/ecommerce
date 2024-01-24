'use client'

import { LogIn, LogOut, User } from 'lucide-react'
import { Button } from '../ui/button'

import Link from 'next/link'
import { CartMenu } from '../CartMenu'
import { signIn, signOut, useSession } from 'next-auth/react'

import { UserAvatar } from '../UserAvatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { MenuMobile } from './MenuMobile'

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
      <MenuMobile handleLogin={handleLogin} handleLogOut={handleLogOut} />
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
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="hidden bg-transparent hover:bg-gray-500/30 lg:flex"
                size={'icon'}
                variant={'outline'}
              >
                <User size={18} color="white" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                {status === 'authenticated' && data?.user && (
                  <UserAvatar data={data} />
                )}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                {status === 'unauthenticated' && (
                  <Button
                    className="w-full  gap-2 px-10 py-4 text-xs font-bold capitalize lg:px-14"
                    variant={'outline'}
                    onClick={handleLogin}
                  >
                    <LogIn size={18} /> Fazer Login
                  </Button>
                )}
                {status === 'authenticated' && (
                  <Button
                    className="w-full  gap-2 px-10 py-4 text-xs font-bold capitalize lg:px-14"
                    variant={'outline'}
                    onClick={handleLogOut}
                  >
                    <LogOut size={18} /> Fazer LogOut
                  </Button>
                )}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <CartMenu />
      </div>
    </header>
  )
}
