import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Link from "next/link";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
        <div className={styles.heroBackground}>
        
          <div className={styles.heroBackgroundInner}>
          <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from black to purple"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
          <p className={styles.heroSubtitle}>
              </p>
              <p className={styles.heroSubtitle}>
              </p>
              
          </div>
          <p className={styles.heroSubtitle}>
              </p>
              
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
            <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  POLYWATCH MARKETPLACE
                </span>
                <br />
                
                </h1>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://www.polywatch.org/polywatch-world"
                  target="_blank"
                >
                  BACK TO POLYWATCH WORLD
                </Link>{" "}
               
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  Get Started
                </Link>

                
               
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
};

export default Home;
