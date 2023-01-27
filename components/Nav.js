import Image from 'next/image'
import styles from './Nav.module.scss'
import { mainNavData } from '../data/nav'
import { useRouter } from 'next/router'
import Link from 'next/link'

export function MainNav() {
  const router = useRouter()
  const currentRoute = router.pathname
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
        <div className={styles.mncright}>
          <ul>
            {
              mainNavData.map(n => 
                <li key={n.id}><Link href={n.link}>{n.title}</Link></li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}