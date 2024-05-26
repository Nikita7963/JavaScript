const Hero = () => {
    return (
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p>
                    YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                </p>


                <div className="hero-btn">
                    <button>Shop now</button>
                    <button>Category</button>
                </div>

                <div className="shopping">
                    <p>Also available on</p>

                    <div className="brand-icons">
                        <img src='/images/amazon.png' alt="" />
                        <img src='/images/flipkart.png' alt="" />
                    </div>
                </div>
            </div>

            <div className="hero-image">
                <img src='/images/shoe_image.png' alt="" />
            </div>

        </main>
    )
}

export default Hero;