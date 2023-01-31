import Image from 'next/image'
import styles from './Footer.module.scss'

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footercontent}>
                <div className={styles.footcopy}>
                    <div className={styles.footcopycont}>
                        <Image
                            src="/logowobg.png"
                            alt="Strive"
                            width={80}
                            height={80}
                            className={styles.mainnavimg}
                            priority
                        />
                        <h2>Strive</h2>
                    </div>
                    <p className={styles.copyR}>STRIVEON TECHNOLOGIES PRIVATE LIMITED © 2022</p>
                </div>
                <div className={styles.footsocials}>
                    <div>
                    <h4>Follow Us</h4>

                    </div>
                    <div className={styles.foorsocial}>
                        <Image
                            src="/social/fb.svg"
                            alt="Facebook"
                            width={23}
                            height={23}
                            priority
                        />
                        <p>Facebook</p>
                    </div>
                    <div className={styles.foorsocial}>
                        <Image
                            src="/social/insta.svg"
                            alt="Instagram"
                            width={23}
                            height={23}
                            priority
                        />
                        <p>Instagram</p>
                    </div>
                    <div className={styles.foorsocial}>
                        <Image
                            src="/social/twitter.svg"
                            alt="Twitter"
                            width={23}
                            height={23}
                            priority
                        />
                        <p>Twitter</p>
                    </div>
                    <div className={styles.foorsocial}>
                        <Image
                            src="/social/linkedin.svg"
                            alt="LinkedIn"
                            width={23}
                            height={23}
                            priority
                        />
                        <p>LinkedIn</p>
                    </div>
                </div>
                <div className={styles.footcontact}>
                    <div className={styles.foorsocial}>
                        <Image
                            src="/contact/Mail.svg"
                            alt="LinkedIn"
                            width={23}
                            height={23}
                            priority
                        />
                        <p><a href="mailto:hey@strive.social">Hey@Strive.Social</a></p>
                    </div>
                    <div className={styles.foorsocial}>
                        <Image
                            src="/contact/Privacy.svg"
                            alt="LinkedIn"
                            width={23}
                            height={23}
                            priority
                        />
                        <p><a href="https://docs.google.com/document/d/1QhZlgxe5yoOF_6gVFcFZUXlwRd8OaX3SXliLnTUGW7A/edit">Privacy Policy</a></p>
                    </div>
                    <div className={styles.foorsocial}>
                        <Image
                            src="/contact/Paper.svg"
                            alt="LinkedIn"
                            width={23}
                            height={23}
                            priority
                        />
                        <p><a href="https://docs.google.com/document/d/15oAwoQPC2kjhRo5ucHVlDKyd2W9Q6zzokIRIg0e2em8/edit">Terms & Conditions</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}