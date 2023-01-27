import Image from 'next/image'
import { ConnectButton } from './Button';
import styles from './Card.module.scss'

export function CoursesCard({ title, price, timing }) {
  return (
    <div className={styles.coursescard}>
      <Image
          src="/courses/5thfeb.png"
          alt="Course"
          width={378}
          height={208}
          priority
        />
      <h4>NFT Masterclass for Beginners</h4>
      <div className={styles.courcardfoot}>
        <div>
          <p>Free</p>
          <p>90 - 120 min</p>
        </div>
        <ConnectButton title="Enroll Now" />
      </div>
    </div>
  )
}