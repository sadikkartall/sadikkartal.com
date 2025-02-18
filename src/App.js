import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams } from 'react-router-dom';
import './App.css';

const CONTACT_INFO = {
  email: "sdkkrtll@gmail.com",
  phone: "+90 544 620 1621",
  location: "Bursa, Türkiye"
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const heroStyle = {
    backgroundImage: `url(./homepage.gif)`,
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
    <Router>
    <div className="App">
        <header>
          <nav>
            <div className="logo">
              <div className="logo-container">
                <img src="./logo_foti.jpg" alt="Logo" className="logo-image" />
                <div className="logo-text">
                  <div>Sadık KARTAL</div>
                  <div className="subtitle">Software Engineer</div>
                </div>
              </div>
            </div>
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`}></i>
            </button>
            <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><Link to="/">Ana Sayfa</Link></li>
              <li className="dropdown">
                <Link to="/projeler">Projeler</Link>
                <div className="dropdown-content">
                  <div className="project-category">
                    <Link to="/csharp-projeler"><h3>C# Projeleri</h3></Link>
                  </div>
                  <div className="project-category">
                    <Link to="/python-projeler"><h3>Python Projeleri</h3></Link>
                  </div>
                  <div className="project-category">
                    <Link to="/web-projeler"><h3>Web Projeleri</h3></Link>
                  </div>
                </div>
              </li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/iletisim">İletişim</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage heroStyle={heroStyle} />} />
          <Route path="/projeler" element={<ProjectsPage />} />
          <Route path="/csharp-projeler" element={<ProjectCategory category="csharp" />} />
          <Route path="/python-projeler" element={<ProjectCategory category="python" />} />
          <Route path="/web-projeler" element={<ProjectCategory category="web" />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        {/* Footer */}
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
              <p>&copy; 2025 Tüm hakları saklıdır.</p>
            </div>

            {/* Sağ taraf - CV İndirme */}
            <div className="footer-cv">
              <a href="./cv.pdf" download className="cv-download">
                <i className="fas fa-file-pdf"></i>
                CV İndir
              </a>
            </div>
          </div>
        </footer>
    </div>
    </Router>
  );
}

// Sayfa Bileşenleri
const HomePage = ({ heroStyle }) => (
  <section id="anasayfa" className="hero" style={heroStyle}>
    <div className="hero-content">
      <h1>Hoş Geldiniz</h1>
      <p>Sadık KARTAL, Software Engineer</p>
    </div>
  </section>
);

const ProjectsPage = () => (
  <section id="projeler">
    <h2>Projelerim</h2>
    <div className="projects-container">
      {/* Buraya projelerin içeriği gelecek */}
    </div>
  </section>
);

const ProjectCategory = ({ category }) => {
  const getCategoryTitle = (cat) => {
    switch(cat) {
      case 'csharp':
        return 'C# Projeleri';
      case 'python':
        return 'Python Projeleri';
      case 'web':
        return 'Web Projeleri';
      default:
        return 'Projeler';
    }
  };

  return (
    <section id={category}>
      <h2>{getCategoryTitle(category)}</h2>
      <div className="projects-container">
        {/* Proje içerikleri buraya gelecek */}
      </div>
    </section>
  );
};

const BlogPage = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <section id="blog" className="page-section">
      <div className="container">
        <div className="blog-container">
          <article className="blog-post">
            <div className="blog-article">
              <h2>Yapay Zeka ve Siber Güvenlik</h2>
              <div className="post-meta">
                <span>
                  <i className="fas fa-calendar"></i>
                  19 Aralık 2024
                </span>
                <span>
                  <i className="fas fa-user"></i>
                  Sadık KARTAL, Erdoğan ÇİMEN
                </span>
              </div>
              <div className="post-content">
                <div className="content-preview">
                  <p>
                    Yapay zeka, en basit şekilde belirli görevleri yerine getirmek için insan zekasını taklit eden ve 
                    topladıkları bilgileri yineleyerek kendilerini geliştirebilen sistemler olarak tanımlanır...
                  </p>
                </div>
                <div className="content-full" style={{ display: showFullContent ? 'block' : 'none' }}>
                  <h3>Yapay Zeka (Artificial intelligence)</h3>
                  <p>
                    Yapay zeka, en basit şekilde belirli görevleri yerine getirmek için insan zekasını taklit eden ve 
                    topladıkları bilgileri yineleyerek kendilerini geliştirebilen sistemler olarak tanımlanır. Yapay zekayı 
                    günümüz teknoloji sistemlerinden ayıran en önemli özellik insan zekasını taklit edebilmesidir. Bu sistem, 
                    var olan durumları gözlemleyerek daha önceden belirlenen parametreler doğrultusunda ilgili durumu işler ve 
                    buna yönelik bir tepki verir. Bu süreçte, yapay zeka duruma ilişkin verileri hızlı, yinelemeli ve akıllı 
                    algoritmalarla birleştirilerek işler.
                  </p>

                  <h3>Yapay Zeka Nasıl Çalışır?</h3>
                  <p>
                    Yapay zeka, büyük ölçekli verileri akıllı algoritmalar ve yinelemeli işlemleme ile birleştirerek çalışır. 
                    Bu süreçte, işlemlenen verilere ait desen veya özellikler yapay zekanın otomatik olarak öğrenmesini sağlar.
                  </p>

                  <p>
                    Çeşitli işlevlere sahip yapay zeka farklı yöntem ve teknolojiler ile birlikte çalışır. Söz konusu yöntem 
                    ve teknolojiler şu şekilde özetlenebilir:
                  </p>

                  <h3>Yapay Zeka Nasıl Çalışır?</h3>
                  <ul>
                    <li><strong>Makine Öğrenimi:</strong> Yapay zeka makine öğrenimi ile analitik modeller oluşturmayı 
                    otomatikleştirerek ayrı bir programlama işlemi gerekmeden sinir ağları, istatistik, fizik yöntemlerini 
                    kullanarak verideki içgörüleri bulabiliyor</li>
                    
                    <li><strong>Yapay Sinir Ağı:</strong> Yapay zeka sayesinde harici girişlere yanıt vererek bilgilerin 
                    işlenmesini ve aralarında bilgi aktarımı olan birimlerden oluşan yapay sinir ağlarını içerir. Bu yöntem 
                    ile yapay zeka birimler arasındaki bağlantıları bularak birden çok geçiş ile tanımlanan verilerden anlam 
                    çıkarabiliyor.</li>
                    
                    <li><strong>Derin Öğrenme Teknolojisi:</strong> Yapay zeka bu yöntem ile pek çok veri birimine ait 
                    karmaşık modeli öğrenmek için gelişmiş hesaplama ve eğitim tekniklerinden yararlanır. Bu süreçte, çok 
                    sayıda işlem birimi katmanı ile büyük sinir ağlarını kullanır.</li>
                    
                    <li><strong>Bilişsel Hesaplama:</strong> Bu sistem yapay zekanın insan benzeri bir etkileşimi makinelere 
                    aktarılmasını sağlar. Bilişsel hesaplama ile yapay zekanın görüntüleri, konuşmaları, verileri yorumlama 
                    ve ardından bunlara tutarlı geri bildirimler vermesi sağlanır.</li>
                    
                    <li><strong>İleri Algoritma:</strong> Bu sistem yapay zekanın daha fazla veriyi daha hızlı ve birçok 
                    seviyede analiz etmesini sağlıyor. Ayrıca, ileri algoritma karmaşık sistemleri anlamak, nadir yaşanan 
                    senaryoları tanımlamak ve optimize etmek için kullanılır.</li>
                    
                    <li><strong>Grafik İşlem Birimleri:</strong> Yapay zekanın yinelemeli işlem yapabilmesi için ihtiyaç 
                    duyduğu hesaplama gücünü sağlayan grafik işlem birimleri sinir ağlarının eğitilmesini sağlar.</li>
                  </ul>

                  <h3>Yapay Zeka Tarihi Detaylı Zaman Çizelgesi</h3>
                  <div className="timeline">
                    <h4>1940-1950'ler: Yapay Zeka'nın Doğuşu</h4>
                    <div className="timeline-item">
                      <h5>1943</h5>
                      <p>McCulloch ve Pitts, yapay sinir ağlarının temelini atan ilk hesaplama modelini yayınladı.</p>
                    </div>

                    <div className="timeline-item">
                      <h5>1950</h5>
                      <p>Alan Turing, makinelerin düşünebilirliğini tartıştığı "Turing Testi" fikrini ortaya koydu.</p>
                    </div>

                    <div className="timeline-item">
                      <h5>1956</h5>
                      <p>Dartmouth Konferansı'nda "yapay zeka" terimi resmi olarak kullanılmaya başlandı; AI'nin bilimsel bir alan olarak temeli atıldı.</p>
                    </div>

                    <h4>1960-1970'ler: Uzman Sistemlerin Yükselişi</h4>
                    <p>AI araştırmaları basit problemleri çözebilen ilk uzman sistemleri (örneğin, DENDRAL ve MYCIN) geliştirdi.</p>
                    <p>Ancak hesaplama gücünün yetersizliği, projelerin ilerlemesini sınırladı ve bir duraklama dönemi başladı.</p>

                    <h4>1980'ler: Yapay Zeka Kışı ve İlerlemeler</h4>
                    <div className="timeline-item">
                      <h5>Yapay Zeka Kışı</h5>
                      <p>Beklentilerin karşılanamaması ve finansman kesintileri nedeniyle alan bir duraklama dönemi yaşadı.</p>
                    </div>

                    <div className="timeline-item">
                      <h5>1980</h5>
                      <p>Japonya'nın "5. Nesil Bilgisayar Projesi" AI'ye yeniden ilgi kazandırdı; uzman sistemler iş dünyasında yaygınlaştı.</p>
                    </div>

                    <h4>1990-2000'ler: Makine Öğrenimi ve Büyük Verinin Doğuşu</h4>
                    <p>Daha güçlü bilgisayarların ve büyük veri kaynaklarının ortaya çıkışı, makine öğrenimi algoritmalarının gelişimini hızlandırdı.</p>
                    <p>IBM'in Deep Blue bilgisayarı, dünya satranç şampiyonu Garry Kasparov'u yendi.</p>

                    <h4>2010 ve Sonrası: Derin Öğrenme ve Yapay Zekada Patlama</h4>
                    <p>Derin öğrenme algoritmaları, görsel tanıma, ses tanıma ve doğal dil işleme alanlarında büyük ilerleme sağladı.</p>
                    <p>Google DeepMind'ın AlphaGo sistemi, bir Go ustasını yenen ilk yapay zeka oldu.</p>
                    <p>AI, sağlık, otomotiv, finans gibi sektörlere hızla entegre edildi ve günlük yaşamın bir parçası haline geldi.</p>
                  </div>

                  <h3>Yapay Zeka Uygulama Alanları</h3>
                  <div className="application-areas">
                    <div className="area">
                      <h4>Finans Sektörü</h4>
                      <p>Yapay Zeka, finansal verileri analiz ederek şirketlerin yatırım kararlarını destekler.</p>
                    </div>

                    <div className="area">
                      <h4>Tıp</h4>
                      <p>Yapay Zeka, kanser taraması, tıbbi görüntüleme ve tanı yapmak için kullanılabilir.</p>
                    </div>

                    <div className="area">
                      <h4>Savunma Sanayi</h4>
                      <p>Yapay Zeka, insansız hava araçları ve füze sistemlerinin yönetimi için kullanılıyor.</p>
                    </div>

                    <div className="area">
                      <h4>Otonom Araçlar</h4>
                      <p>Yapay Zeka, sürücüsüz araçların kontrolünü sağlayarak trafikteki güvenliği artırıyor.</p>
                    </div>

                    <div className="area">
                      <h4>Siber Güvenlik</h4>
                      <p>Yapay zeka, siber tehditleri önlemek ve tespit etmek, anomali analizleri yapmak ve otomatik savunma mekanizmaları oluşturmak için kullanılır.</p>
                    </div>

                    <div className="area">
                      <h4>Sesli Asistanlar</h4>
                      <p>Siri, Alexa veya Google Asistan gibi yapay zeka destekli asistanlar, sesli komutları anlayarak kullanıcılara bilgi sağlar, görevleri yerine getirir ve yaşamı kolaylaştırır.</p>
                    </div>

                    <div className="area">
                      <h4>E-Ticaret</h4>
                      <p>Amazon veya eBay gibi platformlar, yapay zeka ile kişiselleştirilmiş alışveriş deneyimleri sunar, en uygun ürünleri önermeye yardımcı olur.</p>
                    </div>

                    <div className="area">
                      <h4>Navigasyon</h4>
                      <p>Waze veya Google Maps gibi navigasyon uygulamaları, gerçek zamanlı trafik durumunu analiz ederek en kısa veya en uygun rotayı sunar.</p>
                    </div>
                  </div>

                  <h3>Yapay Zekanın Faydaları</h3>
                  <div className="benefits">
                    <div className="benefit">
                      <h4>Verimlilik</h4>
                      <p>Yapay Zeka teknolojileri sayesinde, birçok iş süreci hızlandırılarak verimlilik artırılır.</p>
                    </div>

                    <div className="benefit">
                      <h4>Doğruluk</h4>
                      <p>Yapay Zeka sistemleri, hata payını minimuma indirerek daha doğru sonuçlar elde edilmesini sağlar.</p>
                    </div>

                    <div className="benefit">
                      <h4>Otomasyon</h4>
                      <p>Yapay Zeka teknolojileri, insan faktörünü elimine ederek işin otomatize edilmesine yardımcı olur.</p>
                    </div>
                  </div>

                  <h3>SİBER GÜVENLİĞİN ALT DALLARI</h3>
                  
                  <h4>OFANSİF</h4>
                  <p>
                    Saldırgan taraf olarak da nitelendirilen aynı zamanda kırmızı takım(red team) adı ile de bilinen dal 
                    daha çok bir sisteme sızma ve oradaki açıkları bulmak olarak nitelendirilmektedir.
                  </p>

                  <p>Ofansif ana dalı kendi arasında 3 alt başlık olarak incelenmektedir:</p>

                  <h4>1-Sızma Testi Uzmanı</h4>
                  <p>
                    Sistemlerin ve uygulamaların güvenlik açıklarını tespit etmek için saldırgan gibi davranarak testler 
                    gerçekleştiren güvenlik uzmanıdır.
                  </p>

                  <ul>
                    <li>
                      <strong>a) Ağ Sızma Testi Uzmanı:</strong> Kurumların ağ altyapısındaki açıkları belirlemek için 
                      ağ protokollerini, güvenlik duvarlarını ve cihazlarını test eden uzmandır.
                    </li>
                    <li>
                      <strong>b) Web Uygulama Güvenliği:</strong> Web sitelerindeki güvenlik açıklarını, SQL injection, 
                      XSS (Cross-Site Scripting) ve diğer açıkları test eden kişidir.
                    </li>
                    <li>
                      <strong>c) Mobil Uygulama Güvenliği:</strong> Mobil uygulamaları hedef alarak zararlı girişimler 
                      ve açıklar üzerinde çalışan, bunları tespit eden güvenlik uzmanıdır.
                    </li>
                  </ul>

                  <h4>2. Exploit Geliştirme</h4>
                  <p>
                    Exploit, bir güvenlik açığından faydalanan araçtır. Exploit geliştirme, sistemdeki zayıflıkları 
                    kullanarak güvenlik protokollerini aşabilen araçlar ve kodlar yazma sürecidir.
                  </p>

                  <h4>3. Zararlı Yazılım (Malware) Geliştirme</h4>
                  <p>
                    Kötü amaçlarla kullanılmak üzere tasarlanan yazılımlar üretme işlemidir. Bu yazılımlar, veri çalma, 
                    sistem kontrolünü ele geçirme veya sistemlere zarar verme gibi amaçlarla geliştirilir.
                  </p>

                  <h4>DEFANSİF</h4>
                  <p>
                    Daha çok savunma tarafını kapsayan mavi takım (blue team) olarak da adlandırılan saldırganların neler 
                    yapabileceğini bilip onlara karşı önlemler alan taraf olarak nitelendirilmektedir.
                  </p>

                  <p>Defansif ana dalı kendi arasında 5 alt başlık olarak incelenmektedir:</p>

                  <h4>1. SOC - Security Operation Center (Güvenlik Operasyon Merkezi) Analisti</h4>
                  <p>
                    Bir kurumun güvenliğini tehdit eden olayları 7/24 izleyen, analiz eden ve müdahale eden uzmanlardır. 
                    SOC analistleri, olası saldırıları tespit etmek ve engellemek için güvenlik olaylarını izler.
                  </p>

                  <h4>2. Adli Bilişim Uzmanı</h4>
                  <p>
                    Dijital cihazlarda gerçekleştirilen suçları analiz eden, delil toplayan ve bu delilleri mahkemede 
                    kullanılabilir şekilde sunan güvenlik uzmanıdır. Dijital izleri takip ederek olayların kaynağını tespit eder.
                  </p>

                  <h4>3. Sistem Güvenliği Uzmanı</h4>
                  <p>
                    Kurumların ağ, işletim sistemi ve donanım güvenliğini sağlayan uzmandır. Güvenlik açıklarını önleyici 
                    çözümler geliştirir.
                  </p>

                  <p>
                    <strong>a) Zafiyet Yönetim Uzmanı:</strong> Sistemlerdeki güvenlik açıklarını tarar, analiz eder ve 
                    bu açıkların kapatılmasına yönelik çözümler sunar.
                  </p>

                  <h4>4. Yazılım Güvenliği Uzmanı</h4>
                  <p>
                    Yazılım projelerinde, güvenlik açıklarını önlemek için kodları analiz eden ve yazılımların daha güvenli 
                    hale gelmesini sağlayan kişidir. Güvenli yazılım geliştirme süreçlerini uygular.
                  </p>

                  <h4>5. Malware (Zararlı Yazılım) Analisti</h4>
                  <p>
                    Zararlı yazılımları analiz eden, çalışma prensiplerini inceleyen ve bu zararlı yazılımlara karşı 
                    korunma yollarını geliştiren uzmandır. Çoğunlukla antivirüs yazılımlarında ve güvenlik çözümlerinde çalışırlar.
                  </p>

                  <h3>YAPAY ZEKA VE SİBER GÜVENLİK</h3>
                  <p>
                    Yapay zeka (AI) ve siber güvenlik, günümüzde birbirini tamamlayan iki kritik teknoloji alanıdır. 
                    Yapay zeka, siber tehditlerin daha hızlı algılanması, analiz edilmesi ve önlenmesi konusunda siber 
                    güvenliğe önemli katkılarda bulunur. Aynı şekilde, yapay zeka kullanımıyla gelişen yeni tehditlere 
                    karşı da özel güvenlik önlemlerinin alınmasını gerektirir.
                  </p>

                  <h4>SİBER GÜVENLİKTE YAPAY ZEKA KULLANIMI</h4>
                  <div className="ai-security-examples">
                    <div className="example">
                      <h5>Otomatik Yanıt</h5>
                      <p>
                        Bazı saldırılara otomatik yanıt verme yeteneği sunar. Örneğin, kötü niyetli bir IP adresini 
                        otomatik engellemek.
                      </p>
                      <p>
                        <strong>Örnek:</strong> Facebook, platformundaki kötü amaçlı spam mesajlarını otomatik olarak 
                        engellemek için yapay zeka kullanıyor. 2021'de, AI tabanlı bir sistem milyonlarca sahte hesabı 
                        ve kötü amaçlı linkleri tespit ederek engelledi.
                      </p>
                    </div>

                    <div className="example">
                      <h5>Siber Tehdit İstihbaratı</h5>
                      <p>
                        Yapay zeka, çevrimiçi tehdit bilgilerini toplar ve analiz eder. Böylece potansiyel saldırılar 
                        önceden tahmin edilebilir.
                      </p>
                      <p>
                        <strong>Örnek:</strong> 2020 yılında siber tehdit istihbaratı ekipleri, AI kullanarak Covid-19 
                        temalı oltalama saldırılarını tespit etti. Siber saldırganlar sahte web siteleri oluşturup yardım 
                        paketleri vaadiyle kullanıcı bilgilerini çalmaya çalıştı. AI destekli sistemler bu siteleri 
                        hızlıca tespit ederek engelledi.
                      </p>
                    </div>
                  </div>

                  <h3>YAPAY ZEKA DESTEKLİ SİBER SALDIRILAR</h3>
                  <div className="ai-attacks">
                    <div className="attack-type">
                      <h4>Gelişmiş Phishing (Oltalama)</h4>
                      <p>AI, kurbanları hedef alan kişiselleştirilmiş oltalama e-postaları oluşturabilir.</p>
                      <p><strong>Örnek:</strong> 2021'de bir siber saldırgan, AI destekli oltalama e-postalarıyla Tesla çalışanlarından birini hedef aldı. Çalışan, e-postayı gerçek zannetti ancak olay güvenlik sistemleri tarafından durduruldu.</p>
                    </div>

                    <div className="attack-type">
                      <h4>Otomatik Exploit (Açık Kullanma)</h4>
                      <p>AI, bir sistemin zayıflıklarını hızlıca tespit eder ve bunları kötüye kullanabilir.</p>
                      <p><strong>Örnek:</strong> WannaCry fidye yazılımı, bir güvenlik açığını kullanarak binlerce sisteme yayıldı. O dönemde yapay zeka destekli exploit yazılımlarının bu gibi saldırılarda etkili olduğu görüldü.</p>
                    </div>
                  </div>

                  <h3>YAPAY ZEKA DESTEKLİ SAVUNMALAR</h3>
                  <div className="ai-defenses">
                    <div className="defense-type">
                      <h4>Doğal Dil İşleme (NLP)</h4>
                      <p>Phishing e-postalarını veya kötü niyetli metinleri tespit etmek için kullanılır.</p>
                      <p><strong>Örnek:</strong> 2017 yılında, Google yapay zekası, bir oltalama e-posta saldırısını analiz ederek 100 milyon dolarlık bir dolandırıcılığı önledi. NLP, metin dilini detaylıca inceleyerek bu e-postaları yakaladı.</p>
                    </div>

                    <div className="defense-type">
                      <h4>Derin Öğrenme</h4>
                      <p>Daha karmaşık ve derinlemesine analizler yapar, özellikle sıfırıncı gün saldırılarına (zero-day attacks) karşı etkilidir.</p>
                      <p><strong>Örnek:</strong> 2018'de Google DeepMind'ın sağlık departmanı, bir sağlık siber saldırısını tespit etti. AI destekli sistemler sıfırıncı gün (zero-day) zafiyetleri tespit ederek saldırının büyümesini engelledi.</p>
                    </div>
                  </div>

                  <h3>IPS VE IDS NEDİR?</h3>
                  <div className="security-systems">
                    <div className="system">
                      <h4>IPS (Intrusion Prevention System - Saldırı Önleme Sistemi)</h4>
                      <p>IPS, ağda veya sistemde şüpheli ya da kötü niyetli etkinlikleri algılayıp bu etkinliklere müdahale ederek önleyen bir güvenlik sistemidir. Bir tehdit tespit edildiğinde, IPS genellikle otomatik olarak saldırıyı durdurur.</p>
                    </div>

                    <div className="system">
                      <h4>IDS (Intrusion Detection System - Saldırı Tespit Sistemi)</h4>
                      <p>IDS, sistem veya ağ üzerinde saldırı belirtilerini algılayan ve raporlayan bir sistemdir. Ancak, IDS otomatik bir müdahale yapmaz; sadece saldırıları tespit edip bildirimde bulunur.</p>
                    </div>

                    <h4>IPS VE IDS'İN ÇALIŞMA PRENSİPLERİ</h4>
                    <div className="working-principles">
                      <div className="principle">
                        <h5>IPS Çalışma Şekli</h5>
                        <ul>
                          <li>Tehditleri ağ veya sistem seviyesinde engeller.</li>
                          <li>Genellikle bir güvenlik duvarı gibi çalışır.</li>
                          <li>Kötü niyetli trafik algılandığında o trafiği engeller.</li>
                          <li>Daha çok proaktif bir yapıya sahiptir.</li>
                        </ul>
                      </div>

                      <div className="principle">
                        <h5>IDS Çalışma Şekli</h5>
                        <ul>
                          <li>Sistemde veya ağda olabilecek saldırıları tespit eder ve kayıt altına alır.</li>
                          <li>Genellikle saldırının fark edilmesini sağlar, ancak müdahalede bulunmaz.</li>
                          <li>Daha çok reaktif bir yaklaşıma sahiptir.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3>SİBER GÜVENLİKTE YAPAY ZEKANIN KULLANIMININ AVANTAJLARI</h3>
                  <ul className="advantages-list">
                    <li><strong>Hız ve Verimlilik:</strong> Yapay zeka, büyük veri setlerini hızla analiz ederek insan müdahalesine gerek kalmadan tehditleri tespit edebilir.</li>
                    <li><strong>Öğrenme ve Uyarlanabilirlik:</strong> AI, zaman içinde yeni saldırı türlerini öğrenir ve kendini geliştirebilir.</li>
                    <li><strong>Daha Yüksek Hassasiyet:</strong> AI, anormal davranışları algılayarak yanlış pozitifleri (false positive) azaltır.</li>
                    <li><strong>Tahmin Yeteneği:</strong> AI, geçmiş verileri analiz ederek olası saldırıları önceden tahmin edebilir.</li>
                    <li><strong>Sürekli İzleme:</strong> AI sistemleri 7/24 çalışarak manuel kontrolün olmadığı zamanlarda bile tehditleri algılayabilir.</li>
                    <li><strong>Büyük Veri Analizi:</strong> İnsanların analiz etmesinin çok uzun süreceği büyük veri setlerini saniyeler içinde analiz eder.</li>
                    <li><strong>Otomatik Yanıt Kapasitesi:</strong> AI, bazı saldırılara hızlı bir şekilde otomatik yanıt verebilir.</li>
                    <li><strong>Tehdit İstihbaratı:</strong> AI, dark web gibi kaynaklardan tehdit bilgileri toplayabilir ve şirketleri proaktif bir şekilde koruyabilir.</li>
                  </ul>

                  <h4>Sınırlamalar ve Endişeler</h4>
                  <ul className="limitations-list">
                    <li><strong>Yanlış Pozitif ve Negatifler:</strong> AI, bazı durumlarda güvenli bir davranışı yanlışlıkla tehdit olarak algılayabilir (false positive) veya gerçek bir saldırıyı kaçırabilir (false negative).</li>
                    <li><strong>Gizlilik Sorunları:</strong> AI, sürekli veri izleme yaptığı için kişisel bilgilerin gizliliği konusunda endişeler yaratır.</li>
                  </ul>

                  <h3>SİBER GÜVENLİKTE YAPAY ZEKANIN KULLANIMININ DEZAVANTAJLARI</h3>
                  <ul className="disadvantages-list">
                    <li><strong>Yanlış Pozitif ve Negatifler:</strong> AI, bazı durumlarda güvenli bir davranışı yanlışlıkla tehdit olarak algılayabilir (false positive) veya gerçek bir saldırıyı kaçırabilir (false negative).</li>
                    <li><strong>Gizlilik Sorunları:</strong> AI, sürekli veri izleme yaptığı için kişisel bilgilerin gizliliği konusunda endişeler yaratır.</li>
                    <li><strong>Maliyet ve Kaynak Gereksinimi:</strong> Gelişmiş AI sistemleri ve altyapıları, yüksek maliyetli olabilir.</li>
                    <li><strong>Yanlış Kullanım Riski:</strong> Aynı AI sistemleri saldırganlar tarafından kötü amaçlı olarak da kullanılabilir.</li>
                    <li><strong>Güçlü Bağımlılık:</strong> AI'ye aşırı bağımlılık, insan denetiminin zayıflamasına neden olabilir.</li>
                    <li><strong>Sıfırıncı Gün Açıklarında Gecikme:</strong> Bazı sıfırıncı gün saldırılarını tespit etmek zaman alabilir, çünkü AI bu kalıpları önce öğrenmek zorundadır.</li>
                    <li><strong>Yüksek Donanım Gereksinimi:</strong> AI sistemleri genellikle büyük hesaplama gücü ve güçlü donanım gerektirir.</li>
                    <li><strong>Önyargı ve Algoritmik Yanlışlıklar:</strong> AI, eğitildiği veri setindeki önyargıları taşıyabilir.</li>
                  </ul>
                </div>
              </div>
              <button 
                className="read-more" 
                onClick={() => setShowFullContent(!showFullContent)}
              >
                {showFullContent ? 'Daha Az Göster' : 'Devamını Oku'}
              </button>
            </div>
          </article>
          
          {/* Yeni SIEM blog yazısı */}
          <article className="blog-post">
            <div className="blog-article">
              <h2>SIEM (Security Information and Event Managament)</h2>
              <div className="post-meta">
                <span>
                  <i className="fas fa-calendar"></i>
                  28 Nisan 2024
                </span>
                <span>
                  <i className="fas fa-user"></i>
                  Sadık KARTAL
                </span>
              </div>
              
              <div className="post-content">
                <div className="content-preview">
                  <h3>SIEM Nedir?</h3>
                  <p>
                    SIEM (Security Information and Event Managament) türkçe olarak Güvenlik Bilgileri ve Olay Yönetimi 
                    olarak adlandırılır. Bir organizasyonun bilgi güvenliği alt yapısı güçlendiren ve güvenlik olaylarını 
                    etkili bir şekilde yönetmeyi sağlayan bir yazılım ve donanım kombinasyonudur...
                  </p>
                </div>

                <div className="content-full" style={{ display: showFullContent ? 'block' : 'none' }}>
                  <h3>SIEM Nasıl Çalışır?</h3>
                  <p>
                    SIEM, çeşitli kaynaklardan gelen güvenlik bilgilerini toplar. Bu kaynaklar arasında log dosyaları, 
                    ağ trafiği verileri, güvenlik aygıtları (firewall'lar, IPS/IDS'ler, antivirüs yazılımları), sunucular 
                    ve uygulamalar bulunabilir. SIEM, bu bilgileri merkezi bir konumda toplar ve birleştirir.
                  </p>
                  <p>
                    SIEM, bu verileri analiz eder ve olağandışı ya da potansiyel güvenlik tehditleri üzerine işaretler arar. 
                    Örneğin, bir kullanıcının birden fazla kez yanlış şifre girişi yapması gibi tipik bir güvenlik ihlali 
                    tespiti, SIEM tarafından hızlı bir şekilde algılanabilir. SIEM, bu tür olayları tespit ettiğinde, 
                    otomatik olarak uyarılar gönderir veya güvenlik ekibine bildirir.
                  </p>

                  <h3>SIEM Ürünleri:</h3>
                  <ul className="siem-products">
                    <li><strong>IBMQRadar:</strong> Olay yönetimi, tehdit zekası, güvenlik bilgisi ve uyumluluk yönetimi gibi geniş bir özellik yelpazesi sunar.</li>
                    <li><strong>Splunk Enterprise Security:</strong> Veri analitiği ve güvenlik bilgisi konusunda lider bir platformdur. Büyük veri analitiği yetenekleriyle gelişmiş tehdit tespiti ve yanıtı sağlar.</li>
                    <li><strong>LogRhythm:</strong> Tehdit zekası, olay yönetimi ve genlik bilgisi gibi özellikleri bir araya getirir.</li>
                    <li><strong>McAfee Enterprise Security Manager (ESM):</strong> McAfee ESM, güçlü bir SIEM çözümüdür.</li>
                    <li><strong>Symantec Managed Security Services (MSS):</strong> MSS, organizasyonlara güvenlik olaylarını yönetme ve izleme hizmeti sunar.</li>
                    <li><strong>RSA NetWitness:</strong> RSA, büyük organizasyonlar için gelişmiş bir SIEM çözümüdür.</li>
                    <li><strong>Fortinet FortiSIEM:</strong> Fortinet, olayları izleme, analiz etme ve raporlama konularında güçlü bir SIEM çözümüdür.</li>
                  </ul>

                  <h3>SIEM Amacı:</h3>
                  <p>
                    SIEM amacı, bir organizasyonun bilgisayar ağlarını, sistemlerini ve uygulamalarını sürekli olarak 
                    izlemek, güvenlik olaylarını tespit ermek, bu olaylara yanıt vermek ve bunları raporlamaktır. 
                  </p>

                  <ul className="siem-objectives">
                    <li><strong>Tehditleri tespit etme ve önleme:</strong> SIEM, bilgisayar korsanları, kötü amaçlı yazılımlar, 
                    veri sızıntıları ve diğer güvenlik tehditlerini tespit ederek bunlara karşı önlemler almayı amaçlar.</li>
                    
                    <li><strong>Güvenlik olaylarını yönetme ve analiz etme:</strong> SIEM, ağdaki veya sistemlerdeki herhangi 
                    bir olağandışı aktiviteyi veya güvenlik ihlallerini tanımlar, bu olayları analiz eder ve bunlara hızlı 
                    bir şekilde yanıt verir.</li>
                    
                    <li><strong>Uyumluluk gereksinimlerini karşılama:</strong> SIEM, çeşitli düzenleyici standartlara ve 
                    gereksinimlere uyum sağlamak için gerekli olan günlükleri toplar, depolar ve raporlar.</li>
                    
                    <li><strong>Veri analizi ve raporlama:</strong> SIEM, güvenlik olaylarını analiz ederek trendleri belirler 
                    ve detayları raporlar oluşturur. Bu raporlar, güvenlik zafiyetlerini kapatmak ve güvenlik politikalarını 
                    iyileştirmek için kullanılabilir.</li>
                  </ul>
                </div>
              </div>
              <button 
                className="read-more" 
                onClick={() => setShowFullContent(!showFullContent)}
              >
                {showFullContent ? 'Daha Az Göster' : 'Devamını Oku'}
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

const ContactPage = () => (
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
);

export default App;
