import TechStackImg from "./TechStackImg";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function Stack() {
    return (
        <>
            <div className={`bg-[var(--background)] w-screen h-fit py-20`}>


                {/* desktop */}
                <div className="hidden w-full px-40 laptop:flex flex-col space-y-4">
                    <p className='text-3xl font-semibold text-center text-[var(--text-3xl)] mt-10'>
                        Tech Stack
                    </p>
                    {/* <div className="flex flex-row shadow-lg">
                        <div className="flex-col w-full">
                            <Card className="flex flex-row rounded-none">
                                <CardHeader className="py-0">
                                    <img src="https://pngimg.com/uploads/php/php_PNG43.png" className="w-40" />
                                </CardHeader>
                                <CardContent className="flex items-center">
                                    <div className='text-3xl font-semibold text-[var(--text-5)]'>
                                        PHP
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="flex flex-row rounded-none">
                                <CardHeader className="py-0">
                                    <img src="https://pngimg.com/uploads/mysql/mysql_PNG22.png" className="w-40" />
                                </CardHeader>
                                <CardContent className="flex items-center">
                                    <div className='text-3xl font-semibold text-[var(--text-5)]'>
                                        MySQL
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="flex flex-row rounded-none">
                                <CardHeader className="py-0">
                                    <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png" className="w-40 h-40 py-3" />
                                </CardHeader>
                                <CardContent className="flex items-center">
                                    <div className='text-3xl font-semibold text-[var(--text-5)]'>
                                        React
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="flex flex-row rounded-none">
                                <CardHeader className="py-0">
                                    <img src="https://logospng.org/download/java/logo-java-2048.png" className="w-40" />
                                </CardHeader>
                                <CardContent className="flex items-center">
                                    <div className='text-3xl font-semibold text-[var(--text-5)]'>
                                        Java
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="flex-col w-full">
                            <Card className="flex flex-row rounded-none">
                                <CardHeader className="py-0">
                                    <img src="https://logospng.org/download/laravel/logo-laravel-icon-1024.png" className="w-40" />
                                </CardHeader>
                                <CardContent className="flex items-center">
                                    <div className='text-3xl font-semibold text-[var(--text-5)]'>
                                        Laravel
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="flex flex-row rounded-none">
                                <CardHeader className="py-0">
                                    <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_official_icon_130107.png" className="w-40" />
                                </CardHeader>
                                <CardContent className="flex items-center">
                                    <div className='text-3xl font-semibold text-[var(--text-5)]'>
                                        Typescreipt
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="flex flex-row rounded-none">
                                <CardHeader className="py-0">
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/postgresql-9-1175120.png" className="w-40" />
                                </CardHeader>
                                <CardContent className="flex items-center">
                                    <div className='text-3xl font-semibold text-[var(--text-5)]'>
                                        PostgreSQL
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="flex flex-row rounded-none">
                                <CardHeader className="py-0">
                                    <img src="https://static-00.iconduck.com/assets.00/c-sharp-c-icon-1822x2048-wuf3ijab.png" className="w-40 h-40 py-3 px-3" />
                                </CardHeader>
                                <CardContent className="flex items-center">
                                    <div className='text-3xl font-semibold text-[var(--text-5)]'>
                                        C#
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div> */}

                    <TechStackImg />
                </div>

            </div>

            {/*  <div className="w-full flex flex-col px-20 space-y-16 text-center">
                        <div className="flex flex-row justify-between ">
                            <div className="space-y-4">
                               
                                <div className='text-lg text-[var(--text-xl)]'>PHP</div>
                            </div>
                            <div className="space-y-4">
                                
                                <div className='text-lg text-[var(--text-xl)]'>Laravel</div>
                            </div>
                            <div className="space-y-4">
                               
                                <div className='text-lg text-[var(--text-xl)]'>MySQL</div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="space-y-4">
                                
                                <div className='text-lg text-[var(--text-xl)]'>Typescript</div>
                            </div>
                            <div className="space-y-4">
                              
                                <div className='text-lg text-[var(--text-xl)]'>Remix</div>
                            </div>
                            <div className="space-y-4">
                              
                                <div className='text-lg text-[var(--text-xl)]'>PostgeSQl</div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center space-x-60">
                            <div className="space-y-4">
                             
                                <div className='text-lg text-[var(--text-xl)]'>JAVA</div>
                            </div>
                            <div className="space-y-4">
                              
                                <div className='text-lg text-[var(--text-xl)]'>C#</div>
                            </div>
                        </div>
                    </div> */}
        </>
    )
}