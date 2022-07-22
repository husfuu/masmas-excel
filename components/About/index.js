export default function About() {
    return (
        <section id="about" className="pt-36 pb-32" >
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-10 lg:w-1/2">
                        <h4 className="font-bold uppercase text-primary text-lg mb-3" >Tentang saya</h4>
                        <h2 className="font-bold text-dark text-3xl mb-5 max-w-xl">Data is gold</h2>
                        <p className="font-medium text-base max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim ad deserunt reiciendis temporibus nostrum accusantium, voluptatum neque vitae eum.</p>
                    </div>
                    <div className="w-full px-4 lg:w-1/2" >
                        <h3>Let connect</h3>
                        <div className="flex items-center">
                            {/* GitHub */}
                            <a href="https://github.com/husfuu" target="_blank" rel="noopener noreferrer" className="mr-3">
                                <img src="github.svg" alt="github" width={30} />
                            </a>
                            <a href="https://www.linkedin.com/in/muhammad-husni-nur-fadillah/" target="_blank" rel="noopener noreferrer" className="mr-3">
                                <img src="linkedin.svg" alt="linkedin" width={30} />
                            </a>
                            <a href="https://www.polywork.com/husfuu" target="_blank" rel="noopener noreferrer" className="mr-3">
                                <img src="polywork.svg" alt="polywork" width={30} />
                            </a>
                            <a href="https://medium.com/@husfuu" target="_blank" rel="noopener noreferrer" className="mr-3">
                                <img src="medium.svg" alt="twitter" width={30} />
                            </a>
                            <a href="https://twitter.com/tanakafuu" target="_blank" rel="noopener noreferrer" className="mr-3">
                                <img src="twitter.svg" alt="twitter" width={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}