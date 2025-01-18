import { Link } from '@remix-run/react';
import { Github, Facebook, Mail } from 'lucide-react';
import { Switch } from './ui/switch';
import useThemeContext from '~/context/themeContext';

export default function Navbar() {


    const { setTheme, theme } = useThemeContext()

    const toggleTheme = () => {
        const newTheme = theme === "" ? "dark" : "";
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };



    return (
        <>
            <div className="w-full py-5 flex justify-between items-center ">
                <div className="flex space-x-10 text-[var(--NavBarIcon)]">

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

                <div className='flex space-x-10 text-2xl text-[var(--NavBarLink)]'>
                    <Link to={'/'}>About me</Link>
                    <Link to={'/'}>Tech stack</Link>
                    <Switch className='w-14 h-7'
                        checked={theme === 'dark'}
                        onCheckedChange={toggleTheme}
                    />

                </div>
            </div>
        </>
    )
}