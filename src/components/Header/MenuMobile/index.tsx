import { UserAvatar } from '@/components/UserAvatar'
import { Button, buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Home,
  ListOrdered,
  LogIn,
  LogOut,
  Menu,
  PercentIcon,
} from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

type MenuMobileProps = {
  handleLogin: () => Promise<void>
  handleLogOut: () => Promise<void>
}

export const MenuMobile = ({ handleLogOut, handleLogin }: MenuMobileProps) => {
  const { status, data } = useSession()
  return (
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
            <UserAvatar data={data} />
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
  )
}
