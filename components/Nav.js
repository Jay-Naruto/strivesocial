import Image from 'next/image'
import styles from './Nav.module.scss'

export function MainNav() {
  return (
    <div className={styles.mainnav}>
      <div className={styles.mainnavcontent}>
        <div className={styles.mncleft}>
          <Image
            src="/strivelogo.jpg"
            alt="Strive"
            width={80}
            height={80}
            className={styles.mainnavimg}
            priority
          />
          <h2>Strive</h2>
        </div>
        <div />
      </div>
    </div>
  )
}