import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  const onMouseOut = (event) => {
    event.target.style.color = '#cccccc'
  }

  const SocialWidget = [
    {
      SocialMediaName: 'LinkedIn',
      ProfileLink: 'https://br.linkedin.com/in/gustavomoraes-x',
      fontAwesomeIconName: 'fab fa-linkedin',
      OnMouseOverColor: '#4875B4'
    },
    {
      SocialMediaName: 'GitHub',
      ProfileLink: 'https://github.com/piagja',
      fontAwesomeIconName: 'fab fa-github',
      OnMouseOverColor: '#211F1F'
    },
    {
      SocialMediaName: 'Gmail',
      ProfileLink: 'mailto:piagja@gmail.com',
      fontAwesomeIconName: 'far fa-envelope',
      OnMouseOverColor: '#D44638'
    },
    {
      SocialMediaName: 'WhatsApp',
      ProfileLink: 'https://wa.me/+5513997171782',
      fontAwesomeIconName: 'fab fa-whatsapp',
      OnMouseOverColor: '#25d366'
    },
    {
      SocialMediaName: 'Facebook',
      ProfileLink: 'https://www.facebook.com/sathananthan.sabesan',
      fontAwesomeIconName: 'fab fa-facebook-f',
      OnMouseOverColor: '#1877f2'
    }
  ]

  return (
    <>
      <div className={styles.container}>
        <h6
          style={{
            display: 'block',
            marginBottom: '0px',
            fontSize: 20,
            marginTop: '40px',
            textAlign: 'center'
          }}
        >
          Criado por {' '}
          <a
            href='https://github.com/sabesansathananthan/covid-19-tracker'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgba(0,0,255,0.6)', textDecoration: 'none' }}
          >
            Gustavo "Piá"
          </a>
        </h6>
      </div>
      <div className={styles.container}>
        <br />
        <ul className='list' style={{ listStyleType: 'none' }}>
          {SocialWidget.map((data, key) => {
            return (
              <li
                key={key}
                style={{ display: 'inline-block', marginRight: '17px' }}
              >
                <a
                  onMouseOver={(e) => {
                    e.target.style.color = `${data.OnMouseOverColor}`
                  }}
                  onMouseOut={onMouseOut}
                  href={data.ProfileLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: '#cccccc', fontSize: '40px' }}
                >
                  <i className={`${data.fontAwesomeIconName}`} />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.container}>
        <h6
          style={{
            display: 'block',
            marginBottom: '0px',
            fontSize: 16,
            marginTop: '20px',
            textAlign: 'center'
          }}
        >
          API Feita por {' '}
          <a
            href='https://github.com/mathdroid/covid-19-api'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgba(0,0,255,0.6)', textDecoration: 'none' }}
          >
            Mathdroid 💖
          </a>
        </h6>
      </div>
    </>
  )
}

export default Footer
