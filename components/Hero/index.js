export default function Hero() {
    return(
        <section id="home" className="pt-36">
        <div className="container w-full self-center">
            <div className="flex flex-wrap">
                <div className="w-full self-center px-4 lg:w-1/2">
                    <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl" >Halo semua, saya <span className="block font-bold text-dark text-2xl mt-1 lg:text-4xl" >M. Husni Nur Fadillah</span> </h1>
                    <h2 className="font-medium lg:text-2xl " >Frash Graduate | Data Enthusiast</h2>
                    <p className="font-medium text-slate-400 mb-10" >Seorang fresh Graduate dari Jurusan Matematika dan memiliki passion di bidang data dan web developement</p>
                    <a href="#" className="text-base font-semibold text-white bg-main py-3 px-8 rounded-full hover:shadow-lg hover:opacity-70 transition duration-300 ease-in-out" >
                        Hubungi saya
                    </a>
                </div>
                    <div className="w-full self-end px-4 lg:w-1/2">
                        <div className="relative mt-10 lg:mt-9 lg:right-0">
                            <img src="financial_data.svg" alt="ilustration from undraw" className="max-w-full mx-auto"/>
                        </div>
                </div>
            </div>
        </div>
    </section>
    )
}