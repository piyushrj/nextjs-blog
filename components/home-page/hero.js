import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/profile_pic.jpeg"
                    alt="An image showing Piyush"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I'm Piyush!</h1>
            <p>
                I blog about data science - especially about Python libraries like numpy and pandas.
            </p>
        </section>
    )
}

export default Hero;