import { Menu, Github, Facebook, Mail } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import Navbar from './navbar';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import useThemeContext from '~/context/themeContext';



export default function Header() {
    const { setTheme, theme } = useThemeContext()

    const toggleTheme = () => {
        const newTheme = theme === "" ? "dark" : "";
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };


    return (
        <>
            <div className={`bg-[var(--background)] w-screen h-screen fira-code`}>

                {/* mobile */}

                <div className='w-full h-full p-5 space-y-5 laptop:hidden'>
                    <div className=" flex justify-between text-[var(--NavBarIcon)]">

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
                                    <Menu size={32} className='text-[var(--NavBarIcon)]' />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="text-[var(--NavBarLink)] bg-[var(--dropDownBg)] fira-code mx-5 ">
                                    <DropdownMenuLabel>Explore the site with</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem >Github</DropdownMenuItem>
                                    <DropdownMenuItem>facebook</DropdownMenuItem>
                                    <DropdownMenuItem>Email</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                    </div>

                    <div className='lg:hidden'>
                        <img src='/harth.png' alt='harth' className='rounded-full ' />
                    </div>

                    <div className='lg:hidden flex flex-col'>
                        <div className='text-lg text-[var(--text-xl)]'>
                            Hi!, my name is
                        </div>
                        <div className='text-3xl font-semibold text-[var(--text-5)]'>
                            Harth Pama Palaras
                        </div>

                        <div className='text-xl font-semibold text-[var(--text-3xl)] mt-7'>
                            Creating web solutions
                        </div>
                        <div className='text-base  text-[var(--text-xl)]'>
                            Fresh graduate and passionate programmer eager to create dynamic, user-friendly solutions and grow as a full stack developer.
                        </div>
                        <div className='mt-8'>
                            <Button className='bg-[var(--background)] text-xl font-bold p-4 border-2 border-[var(--focusBtnBorder)] text-[var(--focusBtnText)]'>Check my resume!</Button>
                        </div>
                    </div>

                </div>

                {/* pc */}
                <div className="hidden w-full px-40 laptop:flex flex-col">
                    <Navbar />

                    <div className='flex flex-row'>
                        <div className='w-1/2 flex flex-col justify-center'>
                            <div className='text-xl text-[var(--text-xl)]'>
                                Hi!, my name is
                            </div>
                            <div className='text-5xl font-semibold text-[var(--text-5)] mt-4'>
                                Harth Pama Palaras
                            </div>
                            <div className='text-3xl font-semibold  text-[var(--text-3xl)] mt-10'>
                                Creating web solutions
                            </div>
                            <div className='text-xl text-[var(--text-xl)] '>
                                Fresh graduate and passionate programmer eager to create dynamic, user-friendly solutions and grow as a full stack developer.
                            </div>
                            <div className='mt-20'>
                                <Button className='bg-[var(--background)] text-[var(--focusBtnText)] text-2xl font-bold p-6 transition-transform  ease-in-out hover:scale-110 border-2 border-[var(--focusBtnBorder)] hover:text-[var(--focusBtnHover)] z-10 absolute' variant={'secondary'}>Check my resume!</Button>
                            </div>
                        </div>

                        <div className=' w-1/2'>

                            <img src='/harth.png' alt='harth' className='rounded-full ' />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}