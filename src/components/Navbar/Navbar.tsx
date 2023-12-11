import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ModeToggle'
import { HamburgerMenuIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between h-[60px] px-4 bg-primary'>
      <div>Blog</div>
      <div className='items-center justify-between gap-2 hidden md:flex p-1 bg-slate-50 rounded'>
        <input type="text" placeholder='Search item' className='outline-none bg-slate-50 rounded p-1 dark:text-priamry text-primary' />
        <button title='button with icon' className='bg-primary p-2 rounded'><MagnifyingGlassIcon className='text-secondary' /></button>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <ModeToggle />
        <Button className='md:hidden' variant={'outline'} size={'icon'}><HamburgerMenuIcon /></Button>
      </div>
    </nav>
  )
}
