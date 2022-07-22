export default function Project() {
    return(
        <section id="projects" className="pt-10 pb-16 bg-slate-100" >
            <div className="container">
                <div className="w-full px-4">
                <div className="max-w-xl mx-auto text-center mb-16">
                    <h4 className="font-semibold md:text-3xl text-primary mb-2">Portfolio</h4>
                    <p className="font-medium text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat quis, esse exercitationem velit maxime veniam ea similique accusantium quam a commodi laboriosam enim doloremque! Id harum deserunt error dolore.</p>
                </div>
                </div>

                <div className="w-full px-4 flex-wrap justify-center">
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                    <img src="project-1.png" alt="anasisis disaster" width={"w-full"}/>
                    </div>
                    <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Analisis Disaster</h3>
                    <p className="font-medium text-base ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quibusdam enim distinctio ipsa facilis cupiditate expedita! Labore odio nostrum nisi!</p>
                </div>
                </div>
            </div>
        </section>
    )
}