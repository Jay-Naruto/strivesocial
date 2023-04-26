import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { MainNav } from '../components/Nav.js'
import { CoursesCard } from '../components/Card'
import { ConnectButton, PrimaryButton } from '../components/Button'
import { Footer } from '../components/Footer'

export default function Courses() {
  return (
    <>
      <Head>
        <title>Strive Social</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNav />
      <div className={styles.banner}>
          <img width="100%" src='./banner.png' alt=''/>
        
        <button
      className={styles.ConnectButton2}
      onClick={() => router.push("https://nftpass.strive.social/")}
    >
      Events
    </button>
      </div>
      
      <main className={styles.landingpage}>
        <div className={styles.welcome}>
          <div className={styles.welleft}>
            <h1>Check out <br></br>Strive&apos;s Utility Protocol<br></br><a style={{color:'white',cursor:'pointer'}} rel="noopener noreferrer" href='https://www.strv.network/'> on strv.network </a></h1>
            <h2>Learn Crypto</h2>
            <h2>Earn Crypto</h2>
            <h4>Attend live sessions with top experts and win Crypto rewards for your participation.</h4>


            {/* <PrimaryButton title="Join Now" /> */}
            <a target='_blank'  rel="noopener noreferrer"  href='https://www.strv.network/'>
            <button
      className={styles.ConnectButton2}
      style={{marginTop:50,marginBottom:50}}
    >
      Launch Dapp
    </button>
            </a>

          </div>
          <div style={{ marginTop: '-30px' }} className={styles.welright}>
            <img
              // src="/welcome.gif"
              src="/welcome.png"
              alt="Create NFT"
           
              className={styles.welcomeimg}
              priority
            />
          </div>
        </div>
      </main>
      <div className={styles.coursespage}>
        <div className={styles.coursescards}>
          <CoursesCard
          
            title="Invest in Cryptocurrency like a Pro !"
            img="/courses/21stJan.png"
            link="https://insider.in/invest-in-cryptocurrency-like-a-pro--jan21-2023/event"
          />
          
          <CoursesCard
            title="Everything you need to know about Cryptocurrency"
            img="/courses/5thfeb.png"
            link="https://insider.in/everything-you-need-to-know-about-cryptocurrency-feb5-2023/event"
          />
          <CoursesCard
            title="NFT Masterclass  For Beginners"
            img="/courses/19thfeb.png"
            link="https://insider.in/nft-masterclass-for-beginners-feb19-2023/event "
          />
          <CoursesCard
            title="Crypto Trading  Masterclass For Beginners"
            img="/courses/26thfeb.png"
            link="https://insider.in/crypto-trading-masterclass-for-beginners-feb26-2023/event"
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
