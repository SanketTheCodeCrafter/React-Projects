function Hero() {
    return (
        <>
            <main className="hero-container">
                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                        SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                        SHOES.
                    </p>

                    <div className="hero-btn">
                        <button className="primary-btn">Shop Now</button>
                        <button className="secondary-btn">Category</button>
                    </div>
                    <div className="shopping">
                        <p>Aslo Available On</p>
                        <div className="brand-icons">
                            <img src="/images/shops.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/images/shoe_image.png" alt="" />
                </div>
            </main>
        </>
    );
}

export default Hero;