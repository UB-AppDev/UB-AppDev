import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>UB App Dev Club</h1>
          <nav>
            <ul className={styles.navList}>
              <li><a href="#about" className={styles.navLink}>About</a></li>
              <li><a href="#benefits" className={styles.navLink}>Benefits</a></li>
              <li><a href="#join" className={styles.navLink}>Join</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <section id="hero" className={styles.hero}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroTitle}>Build the Future with UB App Dev Club</h2>
            <p className={styles.heroText}>Join a community of passionate developers and bring your app ideas to life!</p>
            <button className={styles.button}>Learn More</button>
          </div>
        </section>

        <section id="about" className={styles.about}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>About Us</h2>
            <div className={styles.aboutContent}>
              <div className={styles.aboutImage}>
                <Image 
                  src="/placeholder.svg?height=300&width=400" 
                  alt="Students collaborating on app development" 
                  width={400} 
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.aboutText}>
                <p>
                  The UB App Dev Club is a student-run organization dedicated to fostering app development skills and creativity among University at Buffalo students. We provide a collaborative environment where members can learn, share ideas, and work on exciting projects together.
                </p>
                <p>
                  Whether you're a beginner or an experienced developer, our club offers opportunities to enhance your skills, network with like-minded individuals, and stay up-to-date with the latest trends in app development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className={styles.benefits}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Benefits of Joining</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>Hands-on Workshops</h3>
                <p>Participate in regular workshops covering various aspects of app development, from UI/UX design to backend integration.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>Networking Opportunities</h3>
                <p>Connect with fellow students, alumni, and industry professionals who share your passion for app development.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>Project Collaboration</h3>
                <p>Work on real-world projects and build a portfolio that will impress future employers or clients.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="join" className={styles.join}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Join the Club</h2>
            <form className={styles.form}>
              <input type="text" placeholder="Full Name" required className={styles.input} />
              <input type="email" placeholder="UB Email Address" required className={styles.input} />
              <input type="text" placeholder="Major" required className={styles.input} />
              <input type="text" placeholder="Graduation Year" required className={styles.input} />
              <textarea 
                placeholder="Why do you want to join the UB App Dev Club?" 
                rows={4}
                required
                className={styles.textarea}
              ></textarea>
              <button type="submit" className={styles.submitButton}>
                Submit Application
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2025 UB App Dev Club. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>Privacy Policy</a>
            <a href="#" className={styles.footerLink}>Terms of Service</a>
            <a href="#" className={styles.footerLink}>Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
