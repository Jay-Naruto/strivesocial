import Image from 'next/image'
import { ConnectButton } from './Button';
import styles from './Card.module.scss'

export function CoursesCard({ title, img, price, timing, link }) {
  return (
    <div className={styles.card}>
      <img
          src={img}
          alt="Course"
          className={styles.img}
          priority
        />
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.courcardfoot}>
        <div>
          <p>Free</p>
          <p>90 - 120 min</p>
        </div>
        <ConnectButton title="Enroll Now" link={link} />
      </div>
    </div>
  )
}