import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function About() {
    return (
        <>

            <div className={`bg-[var(--background)] w-screen h-fit py-40`}>

                {/* mobile */}
                <div className="w-full h-full p-5 flex flex-col items-center laptop:hidden space-y-20">

                    <div className="space-y-4">
                        <div className='text-3xl font-semibold text-center text-[var(--text-3xl)] mt-10'>
                            Education
                        </div>
                        <div className="space-y-8">
                            <Card className="border-none h-fit w-full">
                                <CardHeader className="px-0 pt-0">
                                    <CardDescription>
                                        <img src="https://www.sti.edu/cms/images/school/all/tacurong.jpg" className="w-full rounded-t-2xl" />
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>STI College Tacurong</p>
                                    <p>2021 - 2025</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Graduated With BSIT Degree</p>
                                </CardFooter>
                            </Card>

                            <Card className="border-none h-fit w-full">
                                <CardHeader className="px-0 pt-0">
                                    <CardDescription>
                                        <img src="https://th.bing.com/th/id/OIP.4RJ5hAq7GbnQuGzr6aWxgwHaEK?rs=1&pid=ImgDetMain" className="w-full rounded-t-2xl" />
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Cainta Senior High School</p>
                                    <p>2019 - 2021</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Graduated With ICT</p>
                                </CardFooter>
                            </Card>
                        </div>

                    </div>

                    <div className="space-y-4">
                        <div className='text-3xl font-semibold text-center text-[var(--text-3xl)] mt-10'>
                            Achievements
                        </div>
                        <div className="space-y-8">
                            <Card className="border-none h-fit w-full">
                                <CardHeader className="px-0 pt-0">
                                    <CardDescription>
                                        <img src="https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/406224975_746520220826660_8785080633285108215_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFMEQIG7KKjRdEbgj8E_54hqDU831xhqDKoNTzfXGGoMpvifgfuKRAD3h10qMCCH1U&_nc_ohc=t0yN3XgZAToQ7kNvgH-dxgQ&_nc_zt=23&_nc_ht=scontent.fdvo2-2.fna&_nc_gid=AVswKtDtRmaPYA6bueHnjLn&oh=00_AYAYj5NbBTBaJ0hw4riRCfPUwqYfVVm5EJX4uCHxxVUSAA&oe=67944044" className="w-full rounded-t-2xl" />
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Cainta Senior High School</p>
                                    <p>2019 - 2021</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Graduated With ICT</p>
                                </CardFooter>
                            </Card>
                            <Card className="border-none h-fit w-full">
                                <CardHeader className="px-0 pt-0">
                                    <CardDescription>
                                        <img src="https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/338007642_1280454686231266_4723179497846005420_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEq2qg2TvtWQXftfyZ6X9nn-dsk9twBLHT52yT23AEsdFmErlYxsOZyjVAZpaJOhww&_nc_ohc=-S6PD2Rti-sQ7kNvgHptbbB&_nc_zt=23&_nc_ht=scontent.fdvo2-1.fna&_nc_gid=AOJa6W7NpeADS9SdW-yl7kb&oh=00_AYDLu00OKW73q-NqlFGB2M7vFvY9eFQC6eBQCMog73OeMg&oe=67943970" className="w-full rounded-t-2xl" />
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Cainta Senior High School</p>
                                    <p>2019 - 2021</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Graduated With ICT</p>
                                </CardFooter>
                            </Card>
                        </div>

                    </div>

                </div>


                {/* desktop */}
                <div className="hidden w-full px-40 laptop:flex flex-col space-y-20">

                    <div className="space-y-4">
                        <div className='text-3xl font-semibold text-center  text-[var(--text-3xl)] mt-10'>
                            Education
                        </div>

                        <div className="flex flex-row space-x-8">
                            <Card className="border-none h-fit w-full shadow-2xl">
                                <CardHeader className="px-0 pt-0">
                                    <CardDescription>
                                        <img src="https://www.sti.edu/cms/images/school/all/tacurong.jpg" className="w-full h-80  object-cover rounded-t-2xl" />
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>STI College Tacurong</p>
                                    <p>2021 - 2025</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Graduated With BSIT Degree</p>
                                </CardFooter>
                            </Card>

                            <Card className="border-none h-fit w-full shadow-2xl">
                                <CardHeader className="px-0 pt-0">
                                    <CardDescription>
                                        <img src="https://th.bing.com/th/id/OIP.4RJ5hAq7GbnQuGzr6aWxgwHaEK?rs=1&pid=ImgDetMain" className="w-full h-80 object-cover rounded-t-2xl" />
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Cainta Senior High School</p>
                                    <p>2019 - 2021</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Graduated With ICT</p>
                                </CardFooter>
                            </Card>
                        </div>

                    </div>

                    <div className="space-y-4">
                        <div className='text-3xl font-semibold text-center text-[var(--text-3xl)] mt-10'>
                            Achivements
                        </div>
                        <div className="flex flex-row shadow-2xl">
                            <Card className=" rounded-b-none border-none h-fit w-full ">
                                <CardHeader className="px-0 pt-0">
                                    <CardDescription>
                                        <img src="https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/406224975_746520220826660_8785080633285108215_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFMEQIG7KKjRdEbgj8E_54hqDU831xhqDKoNTzfXGGoMpvifgfuKRAD3h10qMCCH1U&_nc_ohc=t0yN3XgZAToQ7kNvgH-dxgQ&_nc_zt=23&_nc_ht=scontent.fdvo2-2.fna&_nc_gid=AVswKtDtRmaPYA6bueHnjLn&oh=00_AYAYj5NbBTBaJ0hw4riRCfPUwqYfVVm5EJX4uCHxxVUSAA&oe=67944044" className="w-full h-80 object-cover rounded-tl-2xl" />
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>STI College Tacurong</p>
                                    <p>2021 - 2025</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Graduated With BSIT Degree</p>
                                </CardFooter>
                            </Card>
                            <Card className="border-none h-fit w-full rounded-b-none">
                                <CardHeader className="px-0 pt-0">
                                    <CardDescription>
                                        <img src="https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/338007642_1280454686231266_4723179497846005420_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEq2qg2TvtWQXftfyZ6X9nn-dsk9twBLHT52yT23AEsdFmErlYxsOZyjVAZpaJOhww&_nc_ohc=-S6PD2Rti-sQ7kNvgHptbbB&_nc_zt=23&_nc_ht=scontent.fdvo2-1.fna&_nc_gid=AOJa6W7NpeADS9SdW-yl7kb&oh=00_AYDLu00OKW73q-NqlFGB2M7vFvY9eFQC6eBQCMog73OeMg&oe=67943970" className="w-full h-80 object-cover rounded-tr-2xl" />
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Cainta Senior High School</p>
                                    <p>2019 - 2021</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Graduated With ICT</p>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}