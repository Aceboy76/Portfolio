import { Link } from '@remix-run/react';
import { Github, Facebook, Mail } from 'lucide-react';
export default function Navbar() {
    return (
        <>
            <div className="w-full py-5 flex justify-between items-center ">
                <div className="flex space-x-10">

                    <Link to={'https://github.com/Aceboy76'} className='transition-transform  ease-in-out hover:scale-110' target='_blank'>
                        <Github size={50} color="#DABFFF" />
                    </Link>

                    <Link to={'https://www.facebook.com/harth.palaras'} className='transition-transform  ease-in-out hover:scale-110' target='_blank'>
                        <Facebook size={50} color="#DABFFF" />
                    </Link>

                    <Link to={'mailto:harthpalaras62@gmail.com'} className='transition-transform  ease-in-out hover:scale-110' target='_blank'>
                        <Mail size={50} color="#DABFFF" />
                    </Link>


                </div>

                <div className='flex space-x-10 text-2xl text-[#D6F5FF]'>
                    <Link to={'/'}>About me</Link>
                    <Link to={'/'}>Tech stack</Link>
                </div>
            </div>
        </>
    )
}