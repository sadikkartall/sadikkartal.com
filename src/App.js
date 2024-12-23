import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('anasayfa');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const heroStyle = {
    backgroundImage: 'url(/homepage.gif)',
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0
  };

  return (
    <div className="App">
      {/* Header Bölümü */}
      <header>
        <nav>
          <div className="logo">
            <div className="logo-container">
              <img 
                src="/logo_foti.jpg"
                alt="Logo" 
                className="logo-image"
              />
              <div className="logo-text">
                <div>Sadık KARTAL</div>
                <div className="subtitle">Software Engineer</div>
              </div>
            </div>
          </div>
          <ul className="nav-links">
            <li><a href="#!" onClick={() => handlePageChange('anasayfa')}>Ana Sayfa</a></li>
            <li><a href="#!" onClick={() => handlePageChange('hakkimda')}>Hakkımda</a></li>
            <li className="dropdown">
              <a href="#!" onClick={(e) => e.preventDefault()}>Projeler</a>
              <div className="dropdown-content">
                <div className="project-category" onClick={() => handlePageChange('csharp')}>
                  <h3>C# Projeleri</h3>
                </div>
                <div className="project-category" onClick={() => handlePageChange('python')}>
                  <h3>Python Projeleri</h3>
                </div>
                <div className="project-category" onClick={() => handlePageChange('web')}>
                  <h3>Web Projeleri</h3>
                </div>
                <div className="project-category" onClick={() => handlePageChange('security')}>
                  <h3>Bilgi Güvenliği</h3>
                </div>
                <div className="project-category" onClick={() => handlePageChange('ai')}>
                  <h3>Yapay Zeka</h3>
                </div>
              </div>
            </li>
            <li><a href="#!" onClick={() => handlePageChange('iletisim')}>İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* Ana Sayfa Bölümü */}
      {currentPage === 'anasayfa' && (
        <section id="anasayfa" className="hero" style={heroStyle}>
          <div className="hero-content">
            <h1>Hoş Geldiniz</h1>
            <p>Sadık KARTAL, Software Engineer</p>
          </div>
        </section>
      )}

      {/* Hakkımda Bölümü */}
      {currentPage === 'hakkimda' && (
        <section id="hakkimda">
          <div className="about-content fade-in">
            <div className="intro">
              <p>Merhaba, ben Sadık KARTAL. Fırat Üniversitesi Yazılım Mühendisliği Öğrencisiyim.</p>
            </div>

            <div className="interests">
              <h3>İlgi Alanlarım</h3>
              <ul>
                <li>Bilgi Güvenliği/Siber Güvenlik</li>
                <li>Proje Yönetimi ve Dökümantasyonu</li>
                <li>Yapay Zeka</li>
                <li>Web Geliştirme</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Projeler Bölümü */}
      {currentPage === 'projeler' && (
        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="projects-container">
            {/* Buraya projelerin içeriği gelecek */}
          </div>
        </section>
      )}

      {/* İletişim Bölümü */}
      {currentPage === 'iletisim' && (
        <section id="iletisim">
          <div className="contact-container">
            {/* Sol taraf - İletişim Bilgileri */}
            <div className="contact-info-container">
              <h3>İletişim Bilgileri</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div className="contact-details">
                    <h4>E-posta</h4>
                    <a href="mailto:sdkkrtll@gmail.com">sdkkrtll@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div className="contact-details">
                    <h4>Telefon</h4>
                    <a href="tel:+905446201621">+90 544 620 1621</a>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="contact-details">
                    <h4>Konum</h4>
                    <p>Bursa, Türkiye</p>
                  </div>
                </div>
              </div>
              
              <div className="social-media-container">
                <h3>Sosyal Medya</h3>
                <div className="social-links">
                  <a href="https://instagram.com/sadikkartal21" target="_blank" rel="noopener noreferrer" className="social-item">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://x.com/sadikkartall" target="_blank" rel="noopener noreferrer" className="social-item">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/sadik-kartal-725427188/" target="_blank" rel="noopener noreferrer" className="social-item">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/sadikkartall" target="_blank" rel="noopener noreferrer" className="social-item">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Sağ taraf - İletişim Formu */}
            <div className="contact-form-container">
              <h3>Mesaj Gönder</h3>
              <form 
                action="https://formspree.io/f/xjkkvazd" 
                method="POST"
                onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                    const form = e.target;
                    const response = await fetch(form.action, {
                      method: 'POST',
                      body: new FormData(form),
                      headers: {
                        'Accept': 'application/json'
                      }
                    });
                    if (response.ok) {
                      form.reset();
                      // Modern bildirim göster
                      const notification = document.createElement('div');
                      notification.className = 'notification success';
                      notification.innerHTML = `
                        <i class="fas fa-check-circle"></i>
                        <p>Mesajınız başarıyla gönderildi!</p>
                      `;
                      document.body.appendChild(notification);
                      
                      // 3 saniye sonra bildirimi kaldır
                      setTimeout(() => {
                        notification.classList.add('fade-out');
                        setTimeout(() => {
                          document.body.removeChild(notification);
                        }, 300);
                      }, 3000);
                    } else {
                      throw new Error('Mesaj gönderilemedi');
                    }
                  } catch (error) {
                    // Hata bildirimi göster
                    const notification = document.createElement('div');
                    notification.className = 'notification error';
                    notification.innerHTML = `
                      <i class="fas fa-times-circle"></i>
                      <p>Mesaj gönderilirken bir hata oluştu!</p>
                    `;
                    document.body.appendChild(notification);
                    
                    setTimeout(() => {
                      notification.classList.add('fade-out');
                      setTimeout(() => {
                        document.body.removeChild(notification);
                      }, 300);
                    }, 3000);
                  }
                }}
              >
                <div className="form-group">
                  <label htmlFor="name">İsim</label>
                  <input type="text" id="name" name="name" placeholder="Adınız Soyadınız" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-posta</label>
                  <input type="email" id="email" name="email" placeholder="ornek@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mesaj</label>
                  <textarea id="message" name="message" placeholder="Mesajınızı buraya yazın..." required></textarea>
                </div>
                <button type="submit">Gönder <i className="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
        </section>
      )}

      <footer>
        <div className="footer-content">
          {/* Sol taraf - İletişim */}
          <div className="footer-contact">
            <div className="footer-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:sdkkrtll@gmail.com">sdkkrtll@gmail.com</a>
            </div>
            <div className="footer-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+905446201621">+90 544 620 1621</a>
            </div>
          </div>

          {/* Orta - Telif Hakkı */}
          <div className="footer-copyright">
            <p>&copy; 2024 Tüm hakları saklıdır.</p>
          </div>

          {/* Sağ taraf - CV İndirme */}
          <div className="footer-cv">
            <a href="/cv.pdf" download className="cv-download">
              <i className="fas fa-file-pdf"></i>
              CV İndir
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
