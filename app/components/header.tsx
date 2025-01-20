import { Link } from 'lucide-react';
import Navbar from './navbar';
import { Button } from './ui/button';



export default function Header() {

    return (
        <>
            <div className={`bg-[var(--background)] w-screen h-screen `}>

                {/* mobile */}
                <div className="laptop:hidden">
                    <Navbar />
                </div>


                <div className='w-full h-full p-5 space-y-5 laptop:hidden'>

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
                            <a href={'HARTH_PALARAS_RESUME.pdf'} download={'HARTH_PALARAS_RESUME'}>
                                <Button className='bg-[var(--background)] text-xl font-bold p-4 border-2 border-[var(--focusBtnBorder)] text-[var(--focusBtnText)]'>Check my resume!</Button>
                            </a>
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
                                <a href={'HARTH_PALARAS_RESUME.pdf'} download={'HARTH_PALARAS_RESUME'}>
                                    <Button className='bg-[var(--background)] text-[var(--focusBtnText)] text-2xl font-bold p-6 transition-transform  ease-in-out hover:scale-110 border-2 border-[var(--focusBtnBorder)] hover:text-[var(--focusBtnHover)] z-10 absolute' variant={'secondary'}>Check my resume!</Button>
                                </a>

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