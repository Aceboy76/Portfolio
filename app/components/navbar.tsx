import { Link } from '@remix-run/react';
import { Github, Facebook, Mail, Menu } from 'lucide-react';
import { Switch } from './ui/switch';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { useThemeContext } from '~/context/themeContext';
export default function Navbar() {

    const { setTheme, theme } = useThemeContext()

    const toggleTheme = () => {
        const newTheme = theme === "" ? "dark" : "";
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };



    return (
        <>
            <div className="w-full py-5 ">

                {/* mobile */}

                <div className="px-8 w-full flex justify-between text-[var(--NavBarIcon)] laptop:hidden">

                    <div className='flex space-x-4'>
                        <Github size={32} />
                        <Facebook size={32} />
                        <Mail size={32} />
                    </div>

                    <div className='flex items-center space-x-3'>
                        <Switch className='w-14 h-7'
                            checked={theme === 'dark'}
                            onCheckedChange={toggleTheme}
                        />
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Menu size={32} className="text-[var(--NavBarIcon)]" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className={`text-[var(--NavBarLink)] ${theme} bg-[var(--DropDownBg)] fira-code mx-5 font-semibold`}>
                                <DropdownMenuLabel>Explore the site with</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Github</DropdownMenuItem>
                                <DropdownMenuItem>facebook</DropdownMenuItem>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>

                </div>

                {/* desktop */}

                <div className='hidden laptop:flex justify-between items-center w-full'>
                    <div className="hidden laptop:flex space-x-10 text-[var(--NavBarIcon)]">

                        <Link to={'https://github.com/Aceboy76'} className='transition-transform  ease-in-out hover:scale-110' target='_blank'>
                            <Github size={50} />
                        </Link>

                        <Link to={'https://www.facebook.com/harth.palaras'} className='transition-transform  ease-in-out hover:scale-110' target='_blank'>
                            <Facebook size={50} />
                        </Link>

                        <Link to={'mailto:harthpalaras62@gmail.com'} className='transition-transform  ease-in-out hover:scale-110' target='_blank'>
                            <Mail size={50} />
                        </Link>


                    </div>

                    <div className='flex space-x-10 font-semibold text-2xl text-[var(--NavBarLink)]'>
                        <Link to={'/'}>About me</Link>
                        <Link to={'/'}>Tech stack</Link>
                        <Switch className='w-14 h-7'
                            checked={theme === 'dark'}
                            onCheckedChange={toggleTheme}
                        />

                    </div>
                </div>


            </div>
        </>
    )
}