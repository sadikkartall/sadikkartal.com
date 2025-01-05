import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('anasayfa');
  const [blogContent, setBlogContent] = useState('');
  const [siem_content, setSiemContent] = useState('');

  useEffect(() => {
    if (currentPage === 'blog') {
      const content = `
        <h3>Yapay Zeka ve Siber Güvenlik</h3>
        <h3>Yapay Zeka (Artificial intelligence)</h3>
        
        <p>Yapay zeka, en basit şekilde belirli görevleri yerine getirmek için insan zekasını taklit eden ve topladıkları bilgileri yineleyerek kendilerini geliştirebilen sistemler olarak tanımlanır. Yapay zekayı günümüz teknoloji sistemlerinden ayıran en önemli özellik insan zekasını taklit edebilmesidir. Bu sistem, var olan durumları gözlemleyerek daha önceden belirlenen parametreler doğrultusunda ilgili durumu işler ve buna yönelik bir tepki verir. Bu süreçte, yapay zeka duruma ilişkin verileri hızlı, yinelemeli ve akıllı algoritmalarla birleştirilerek işler.</p>

        <h3>Yapay Zeka Nasıl Çalışır?</h3>
        <p>Yapay zeka, büyük ölçekli verileri akıllı algoritmalar ve yinelemeli işlemleme ile birleştirerek çalışır. Bu süreçte, işlemlenen verilere ait desen veya özellikler yapay zekanın otomatik olarak öğrenmesini sağlar.</p>
        <p>Çeşitli işlevlere sahip yapay zeka farklı yöntem ve teknolojiler ile birlikte çalışır. Söz konusu yöntem ve teknolojiler şu şekilde özetlenebilir.</p>

        <h4>Yapay Zeka Nasıl Çalışır?</h4>
        <ul>
          <li>Makine Öğrenimi: Yapay zeka makine öğrenimi ile analitik modeller oluşturmayı otomatikleştirerek ayrı bir programlama işlemi gerekmeden sinir ağları, istatistik, fizik yöntemlerini kullanarak verideki içgörüleri bulabiliyor</li>
          <li>Yapay Sinir Ağı: Yapay zeka sayesinde harici girişlere yanıt vererek bilgilerin işlenmesini ve aralarında bilgi aktarımı olan birimlerden oluşan yapay sinir ağlarını içerir. Bu yöntem ile yapay zeka birimler arasındaki bağlantıları bularak birden çok geçiş ile tanımlanan verilerden anlam çıkarabiliyor.</li>
          <li>Derin Öğrenme Teknolojisi: Yapay zeka bu yöntem ile pek çok veri birimine ait karmaşık modeli öğrenmek için gelişmiş hesaplama ve eğitim tekniklerinden yararlanır. Bu süreçte, çok sayıda işlem birimi katmanı ile büyük sinir ağlarını kullanır.</li>
          <li>Bilişsel Hesaplama: Bu sistem yapay zekanın insan benzeri bir etkileşimi makinelere aktarılmasını sağlar. Bilişsel hesaplama ile yapay zekanın görüntüleri, konuşmaları, verileri yorumlama ve ardından bunlara tutarlı geri bildirimler vermesi sağlanır.</li>
          <li>İleri Algoritma: Bu sistem yapay zekanın daha fazla veriyi daha hızlı ve birçok seviyede analiz etmesini sağlıyor. Ayrıca, ileri algoritma karmaşık sistemleri anlamak, nadir yaşanan senaryoları tanımlamak ve optimize etmek için kullanılır.</li>
          <li>Grafik İşlem Birimleri: Yapay zekanın yinelemeli işlem yapabilmesi için ihtiyaç duyduğu hesaplama gücünü sağlayan grafik işlem birimleri sinir ağlarının eğitilmesini sağlar.</li>
        </ul>

        <h3>Yapay Zeka Tarihi Detaylı Zaman Çizelgesi</h3>
        
        <div class="timeline">
          <h4>1940-1950'ler: Yapay Zeka'nın Doğuşu</h4>
          <div class="timeline-item">
            <h5>1943</h5>
            <p>McCulloch ve Pitts, yapay sinir ağlarının temelini atan ilk hesaplama modelini yayınladı.</p>
          </div>

          <div class="timeline-item">
            <h5>1950</h5>
            <p>Alan Turing, makinelerin düşünebilirliğini tartıştığı "Turing Testi" fikrini ortaya koydu.</p>
          </div>

          <div class="timeline-item">
            <h5>1956</h5>
            <p>Dartmouth Konferansı'nda "yapay zeka" terimi resmi olarak kullanılmaya başlandı; AI'nin bilimsel bir alan olarak temeli atıldı.</p>
          </div>

          <h4>1960-1970'ler: Uzman Sistemlerin Yükselişi</h4>
          <p>AI araştırmaları basit problemleri çözebilen ilk uzman sistemleri (örneğin, DENDRAL ve MYCIN) geliştirdi.</p>
          <p>Ancak hesaplama gücünün yetersizliği, projelerin ilerlemesini sınırladı ve bir duraklama dönemi başladı.</p>

          <h4>1980'ler: Yapay Zeka Kışı ve İlerlemeler</h4>
          <div class="timeline-item">
            <h5>Yapay Zeka Kışı</h5>
            <p>Beklentilerin karşılanamaması ve finansman kesintileri nedeniyle alan bir duraklama dönemi yaşadı.</p>
          </div>

          <div class="timeline-item">
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

        <h3>Yapay Zeka Tarihi - Kronolojik Özet</h3>
        <div class="timeline-simple">
          <div class="timeline-period">
            <h4>1940-1950'ler: Yapay Zeka'nın Doğuşu</h4>
            <p>1950'ler: İlk yapay zeka algoritması geliştirildi.</p>
            <p>1960'lar: İlk Yapay Zeka laboratuvarı kuruldu ve simülasyonlar yapay zeka araştırmalarını hızlandırdı.</p>
            <p>21. yüzyıl: Büyük veri, makine öğrenmesi ve akıllı cihazlarla birlikte Yapay Zeka, hayatımızın her yerinde varlık göstermeye başladı.</p>
          </div>
        </div>

        <h3>Yapay Zeka Uygulama Alanları</h3>
        <div class="application-areas">
          <div class="area">
            <h4>Finans Sektörü</h4>
            <p>Yapay Zeka, finansal verileri analiz ederek şirketlerin yatırım kararlarını destekler.</p>
          </div>

          <div class="area">
            <h4>Tıp</h4>
            <p>Yapay Zeka, kanser taraması, tıbbi görüntüleme ve tanı yapmak için kullanılabilir.</p>
          </div>

          <div class="area">
            <h4>Savunma Sanayi</h4>
            <p>Yapay Zeka, insansız hava araçları ve füze sistemlerinin yönetimi için kullanılıyor.</p>
          </div>

          <div class="area">
            <h4>Otonom Araçlar</h4>
            <p>Yapay Zeka, sürücüsüz araçların kontrolünü sağlayarak trafikteki güvenliği artırıyor.</p>
          </div>

          <div class="area">
            <h4>Siber Güvenlik</h4>
            <p>Yapay zeka, siber tehditleri önlemek ve tespit etmek, anomali analizleri yapmak ve otomatik savunma mekanizmaları oluşturmak için kullanılır.</p>
          </div>

          <div class="area">
            <h4>Sesli Asistanlar</h4>
            <p>Siri, Alexa veya Google Asistan gibi yapay zeka destekli asistanlar, sesli komutları anlayarak kullanıcılara bilgi sağlar, görevleri yerine getirir ve yaşamı kolaylaştırır.</p>
          </div>

          <div class="area">
            <h4>E-Ticaret</h4>
            <p>Amazon veya eBay gibi platformlar, yapay zeka ile kişiselleştirilmiş alışveriş deneyimleri sunar, en uygun ürünleri önermeye yardımcı olur.</p>
          </div>

          <div class="area">
            <h4>Navigasyon</h4>
            <p>Waze veya Google Maps gibi navigasyon uygulamaları, gerçek zamanlı trafik durumunu analiz ederek en kısa veya en uygun rotayı sunar.</p>
          </div>
        </div>

        <h3>Yapay Zekanın Faydaları</h3>
        <div class="benefits">
          <div class="benefit">
            <h4>Verimlilik</h4>
            <p>Yapay Zeka teknolojileri sayesinde, birçok iş süreci hızlandırılarak verimlilik artırılır.</p>
          </div>

          <div class="benefit">
            <h4>Doğruluk</h4>
            <p>Yapay Zeka sistemleri, hata payını minimuma indirerek daha doğru sonuçlar elde edilmesini sağlar.</p>
          </div>

          <div class="benefit">
            <h4>Otomasyon</h4>
            <p>Yapay Zeka teknolojileri, insan faktörünü elimine ederek işin otomatize edilmesine yardımcı olur.</p>
          </div>
        </div>

        <h3>SİBER GÜVENLİĞİN ALT DALLARI</h3>
        
        <h4>OFANSİF</h4>
        <p>Saldırgan taraf olarak da nitelendirilen aynı zamanda kırmızı takım(red team) adı ile de bilinen dal daha çok bir sisteme sızma ve oradaki açıkları bulmak olarak nitelendirilmektedir.</p>
        
        <p>Ofansif ana dalı kendi arasında 3 alt başlık olarak incelenmektedir:</p>
        
        <h5>1-Sızma Testi Uzmanı</h5>
        <p>Sistemlerin ve uygulamaların güvenlik açıklarını tespit etmek için saldırgan gibi davranarak testler gerçekleştiren güvenlik uzmanıdır.</p>
        <ul>
          <li>a) Ağ Sızma Testi Uzmanı: Kurumların ağ altyapısındaki açıkları belirlemek için ağ protokollerini, güvenlik duvarlarını ve cihazlarını test eden uzmandır.</li>
          <li>b) Web Uygulama Güvenliği: Web sitelerindeki güvenlik açıklarını, SQL injection, XSS (Cross-Site Scripting) ve diğer açıkları test eden kişidir.</li>
          <li>c) Mobil Uygulama Güvenliği: Mobil uygulamaları hedef alarak zararlı girişimler ve açıklar üzerinde çalışan, bunları tespit eden güvenlik uzmanıdır.</li>
        </ul>

        <h5>2. Exploit Geliştirme</h5>
        <p>Exploit, bir güvenlik açığından faydalanan araçtır. Exploit geliştirme, sistemdeki zayıflıkları kullanarak güvenlik protokollerini aşabilen araçlar ve kodlar yazma sürecidir.</p>

        <h5>3. Zararlı Yazılım (Malware) Geliştirme</h5>
        <p>Kötü amaçlarla kullanılmak üzere tasarlanan yazılımlar üretme işlemidir. Bu yazılımlar, veri çalma, sistem kontrolünü ele geçirme veya sistemlere zarar verme gibi amaçlarla geliştirilir.</p>

        <h4>DEFANSİF</h4>
        <p>Daha çok savunma tarafını kapsayan mavi takım (blue team) olarak da adlandırılan saldırganların neler yapabileceğini bilip onlara karşı önlemler alan taraf olarak nitelendirilmektedir.</p>
        
        <p>Defansif ana dalı kendi arasında 5 alt başlık olarak incelenmektedir:</p>

        <h5>1. SOC - Security Operation Center (Güvenlik Operasyon Merkezi) Analisti</h5>
        <p>Bir kurumun güvenliğini tehdit eden olayları 7/24 izleyen, analiz eden ve müdahale eden uzmanlardır. SOC analistleri, olası saldırıları tespit etmek ve engellemek için güvenlik olaylarını izler.</p>

        <h5>2. Adli Bilişim Uzmanı</h5>
        <p>Dijital cihazlarda gerçekleştirilen suçları analiz eden, delil toplayan ve bu delilleri mahkemede kullanılabilir şekilde sunan güvenlik uzmanıdır. Dijital izleri takip ederek olayların kaynağını tespit eder.</p>

        <h5>3. Sistem Güvenliği Uzmanı</h5>
        <p>Kurumların ağ, işletim sistemi ve donanım güvenliğini sağlayan uzmandır. Güvenlik açıklarını önleyici çözümler geliştirir.</p>
        <ul>
          <li>a) Zafiyet Yönetim Uzmanı: Sistemlerdeki güvenlik açıklarını tarar, analiz eder ve bu açıkların kapatılmasına yönelik çözümler sunar.</li>
        </ul>

        <h5>4. Yazılım Güvenliği Uzmanı</h5>
        <p>Yazılım projelerinde, güvenlik açıklarını önlemek için kodları analiz eden ve yazılımların daha güvenli hale gelmesini sağlayan kişidir. Güvenli yazılım geliştirme süreçlerini uygular.</p>

        <h5>5. Malware (Zararlı Yazılım) Analisti</h5>
        <p>Zararlı yazılımları analiz eden, çalışma prensiplerini inceleyen ve bu zararlı yazılımlara karşı korunma yollarını geliştiren uzmandır. Çoğunlukla antivirüs yazılımlarında ve güvenlik çözümlerinde çalışırlar.</p>

        <h3>YAPAY ZEKA VE SİBER GÜVENLİK</h3>
        <p>Yapay zeka (AI) ve siber güvenlik, günümüzde birbirini tamamlayan iki kritik teknoloji alanıdır. Yapay zeka, siber tehditlerin daha hızlı algılanması, analiz edilmesi ve önlenmesi konusunda siber güvenliğe önemli katkılarda bulunur. Aynı şekilde, yapay zeka kullanımıyla gelişen yeni tehditlere karşı da özel güvenlik önlemlerinin alınmasını gerektirir.</p>

        <h4>SİBER GÜVENLİKTE YAPAY ZEKA KULLANIMI</h4>
        <div class="ai-security">
          <div class="ai-example">
            <h5>Otomatik Yanıt</h5>
            <p>Bazı saldırılara otomatik yanıt verme yeteneği sunar. Örneğin, kötü niyetli bir IP adresini otomatik engellemek.</p>
            <p><strong>Örnek:</strong> Facebook, platformundaki kötü amaçlı spam mesajlarını otomatik olarak engellemek için yapay zeka kullanıyor. 2021'de, AI tabanlı bir sistem milyonlarca sahte hesabı ve kötü amaçlı linkleri tespit ederek engelledi.</p>
          </div>

          <div class="ai-example">
            <h5>Siber Tehdit İstihbaratı</h5>
            <p>Yapay zeka, çevrimiçi tehdit bilgilerini toplar ve analiz eder. Böylece potansiyel saldırılar önceden tahmin edilebilir.</p>
            <p><strong>Örnek:</strong> 2020 yılında siber tehdit istihbaratı ekipleri, AI kullanarak Covid-19 temalı oltalama saldırılarını tespit etti. Siber saldırganlar sahte web siteleri oluşturup yardım paketleri vaadiyle kullanıcı bilgilerini çalmaya çalıştı. AI destekli sistemler bu siteleri hızlıca tespit ederek engelledi.</p>
          </div>
        </div>

        <h4>YAPAY ZEKA DESTEKLİ SİBER SALDIRILAR</h4>
        <div class="ai-attacks">
          <div class="attack-type">
            <h5>Gelişmiş Phishing (Oltalama)</h5>
            <p>AI, kurbanları hedef alan kişiselleştirilmiş oltalama e-postaları oluşturabilir.</p>
            <p><strong>Örnek:</strong> 2021'de bir siber saldırgan, AI destekli oltalama e-postalarıyla Tesla çalışanlarından birini hedef aldı. Çalışan, e-postayı gerçek zannetti ancak olay güvenlik sistemleri tarafından durduruldu.</p>
          </div>

          <div class="attack-type">
            <h5>Otomatik Exploit (Açık Kullanma)</h5>
            <p>AI, bir sistemin zayıflıklarını hızlıca tespit eder ve bunları kötüye kullanabilir.</p>
            <p><strong>Örnek:</strong> WannaCry fidye yazılımı, bir güvenlik açığını kullanarak binlerce sisteme yayıldı. O dönemde yapay zeka destekli exploit yazılımlarının bu gibi saldırılarda etkili olduğu görüldü.</p>
          </div>
        </div>

        <h4>YAPAY ZEKA DESTEKLİ SAVUNMALAR</h4>
        <div class="ai-defenses">
          <div class="defense-type">
            <h5>Doğal Dil İşleme (NLP)</h5>
            <p>Phishing e-postalarını veya kötü niyetli metinleri tespit etmek için kullanılır.</p>
            <p><strong>Örnek:</strong> 2017 yılında, Google yapay zekası, bir oltalama e-posta saldırısını analiz ederek 100 milyon dolarlık bir dolandırıcılığı önledi. NLP, metin dilini detaylıca inceleyerek bu e-postaları yakaladı.</p>
          </div>

          <div class="defense-type">
            <h5>Derin Öğrenme</h5>
            <p>Daha karmaşık ve derinlemesine analizler yapar, özellikle sıfırıncı gün saldırılarına (zero-day attacks) karşı etkilidir.</p>
            <p><strong>Örnek:</strong> 2018'de Google DeepMind'ın sağlık departmanı, bir sağlık siber saldırısını tespit etti. AI destekli sistemler sıfırıncı gün (zero-day) zafiyetleri tespit ederek saldırının büyümesini engelledi.</p>
          </div>
        </div>

        <h4>IPS VE IDS NEDİR?</h4>
        <div class="security-systems">
          <div class="system-type">
            <h5>IPS (Intrusion Prevention System - Saldırı Önleme Sistemi)</h5>
            <p>IPS, ağda veya sistemde şüpheli ya da kötü niyetli etkinlikleri algılayıp bu etkinliklere müdahale ederek önleyen bir güvenlik sistemidir. Bir tehdit tespit edildiğinde, IPS genellikle otomatik olarak saldırıyı durdurur.</p>
          </div>

          <div class="system-type">
            <h5>IDS (Intrusion Detection System - Saldırı Tespit Sistemi)</h5>
            <p>IDS, sistem veya ağ üzerinde saldırı belirtilerini algılayan ve raporlayan bir sistemdir. Ancak, IDS otomatik bir müdahale yapmaz; sadece saldırıları tespit edip bildirimde bulunur.</p>
          </div>
        </div>

        <h5>IPS VE IDS'İN ÇALIŞMA PRENSİPLERİ</h5>
        <div class="working-principles">
          <div class="principle">
            <h6>IPS Çalışma Şekli</h6>
            <ul>
              <li>Tehditleri ağ veya sistem seviyesinde engeller.</li>
              <li>Genellikle bir güvenlik duvarı gibi çalışır.</li>
              <li>Kötü niyetli trafik algılandığında o trafiği engeller.</li>
              <li>Daha çok proaktif bir yapıya sahiptir.</li>
            </ul>
          </div>

          <div class="principle">
            <h6>IDS Çalışma Şekli</h6>
            <ul>
              <li>Sistemde veya ağda olabilecek saldırıları tespit eder ve kayıt altına alır.</li>
              <li>Genellikle saldırının fark edilmesini sağlar, ancak müdahalede bulunmaz.</li>
              <li>Daha çok reaktif bir yaklaşıma sahiptir.</li>
            </ul>
          </div>
        </div>

        <h4>SİBER GÜVENLİKTE YAPAY ZEKANIN KULLANIMININ AVANTAJLARI</h4>
        <div class="ai-advantages">
          <ul>
            <li><strong>Hız ve Verimlilik:</strong> Yapay zeka, büyük veri setlerini hızla analiz ederek insan müdahalesine gerek kalmadan tehditleri tespit edebilir.</li>
            <li><strong>Öğrenme ve Uyarlanabilirlik:</strong> AI, zaman içinde yeni saldırı türlerini öğrenir ve kendini geliştirebilir.</li>
            <li><strong>Daha Yüksek Hassasiyet:</strong> AI, anormal davranışları algılayarak yanlış pozitifleri (false positive) azaltır.</li>
            <li><strong>Tahmin Yeteneği:</strong> AI, geçmiş verileri analiz ederek olası saldırıları önceden tahmin edebilir.</li>
            <li><strong>Sürekli İzleme:</strong> AI sistemleri 7/24 çalışarak manuel kontrolün olmadığı zamanlarda bile tehditleri algılayabilir.</li>
            <li><strong>Büyük Veri Analizi:</strong> İnsanların analiz etmesinin çok uzun süreceği büyük veri setlerini saniyeler içinde analiz eder.</li>
            <li><strong>Otomatik Yanıt Kapasitesi:</strong> AI, bazı saldırılara hızlı bir şekilde otomatik yanıt verebilir.</li>
            <li><strong>Tehdit İstihbaratı:</strong> AI, dark web gibi kaynaklardan tehdit bilgileri toplayabilir ve şirketleri proaktif bir şekilde koruyabilir.</li>
          </ul>
        </div>

        <div class="ai-limitations">
          <h5>Sınırlamalar ve Endişeler</h5>
          <ul>
            <li><strong>Yanlış Pozitif ve Negatifler:</strong> AI, bazı durumlarda güvenli bir davranışı yanlışlıkla tehdit olarak algılayabilir (false positive) veya gerçek bir saldırıyı kaçırabilir (false negative).</li>
            <li><strong>Gizlilik Sorunları:</strong> AI, sürekli veri izleme yaptığı için kişisel bilgilerin gizliliği konusunda endişeler yaratır.</li>
          </ul>
        </div>

        <h4>SİBER GÜVENLİKTE YAPAY ZEKANIN KULLANIMININ DEZAVANTAJLARI</h4>
        <ul>
          <li>Yanlış Pozitif ve Negatifler: AI, bazı durumlarda güvenli bir davranışı yanlışlıkla tehdit olarak algılayabilir (false positive) veya gerçek bir saldırıyı kaçırabilir (false negative).</li>
          <li>Gizlilik Sorunları: AI, sürekli veri izleme yaptığı için kişisel bilgilerin gizliliği konusunda endişeler yaratır.</li>
          <li>Maliyet ve Kaynak Gereksinimi: Gelişmiş AI sistemleri ve altyapıları, yüksek maliyetli olabilir.</li>
          <li>Yanlış Kullanım Riski: Aynı AI sistemleri saldırganlar tarafından kötü amaçlı olarak da kullanılabilir.</li>
          <li>Güçlü Bağımlılık: AI'ye aşırı bağımlılık, insan denetiminin zayıflamasına neden olabilir.</li>
          <li>Sıfırıncı Gün Açıklarında Gecikme: Bazı sıfırıncı gün saldırılarını tespit etmek zaman alabilir, çünkü AI bu kalıpları önce öğrenmek zorundadır.</li>
          <li>Yüksek Donanım Gereksinimi: AI sistemleri genellikle büyük hesaplama gücü ve güçlü donanım gerektirir.</li>
          <li>Önyargı ve Algoritmik Yanlışlıklar: AI, eğitildiği veri setindeki önyargıları taşıyabilir.</li>
        </ul>

        <h4>KAYNAKÇA</h4>
        <ul>
          <li>www.mysoft.com.tr/yapay-zeka-nedir</li>
          <li>tr.wikipedia.org/wiki/Yapay_zek%C3%A2</li>
          <li>www.gtech.com.tr/yapay-zeka-nedir-yapay-zeka-hakkinda-bilmeniz-gerekenler/</li>
          <li>murat-mdk64.medium.com/siber-g%C3%BCvenlik-nedir-alt-dallar%C4%B1-ve-gelece%C4%9Fi-nelerdir-380743c5e526erekenler/</li>
          <li>chatgpt.com</li>
        </ul>
      `;
      
      setBlogContent(content);

      setSiemContent(`
        <h3>SIEM Nedir?</h3>
        <p>SIEM (Security Information and Event Managament) türkçe olarak Güvenlik Bilgileri ve Olay Yönetimi olarak adlandırılır. Bir organizasyonun bilgi güvenliği alt yapısı güçlendiren ve güvenlik olaylarını etkili bir şekilde yönetmeyi sağlayan bir yazılım ve donanım kombinasyonudur. SIEM, bilgisayar sistemlerinde meydana gelen olayları izler, bu olayları toplar, analiz eder, filtreler ve uygun güvenlik önlemlerini alınması durumlarında alarm verir.</p>

        <h3>SIEM Nasıl Çalışır?</h3>
        <p>SIEM, çeşitli kaynaklardan gelen güvenlik bilgilerini toplar. Bu kaynaklar arasında log dosyaları, ağ trafiği verileri, güvenlik aygıtları (firewall'lar, IPS/IDS'ler, antivirüs yazılımları), sunucular ve uygulamalar bulunabilir. SIEM, bu bilgileri merkezi bir konumda toplar ve birleştirir.</p>
        <p>SIEM, bu verileri analiz eder ve olağandışı ya da potansiyel güvenlik tehditleri üzerine işaretler arar. Örneğin, bir kullanıcının birden fazla kez yanlış şifre girişi yapması gibi tipik bir güvenlik ihlali tespiti, SIEM tarafından hızlı bir şekilde algılanabilir. SIEM, bu tür olayları tespit ettiğinde, otomatik olarak uyarılar gönderir veya güvenlik ekibine bildirir.</p>

        <h3>SIEM Ürünleri:</h3>
        <ul>
          <li><strong>IBMQRadar:</strong> Olay yönetimi, tehdit zekası, güvenlik bilgisi ve uyumluluk yönetimi gibi geniş bir özellik yelpazesi sunar.</li>
          <li><strong>Splunk Enterprise Security:</strong> Veri analitiği ve güvenlik bilgisi konusunda lider bir platformdur. Büyük veri analitiği yetenekleriyle gelişmiş tehdit tespiti ve yanıtı sağlar.</li>
          <li><strong>LogRhythm:</strong> Tehdit zekası, olay yönetimi ve genlik bilgisi gibi özellikleri bir araya getirir. Alarm oluşturma ve otomasyon yetenekleri, güvenlik analistlerine iş yükünü azaltma konusunda yardımcı olur.</li>
          <li><strong>McAfee Enterprise Security Manager (ESM):</strong> McAfee ESM, güçlü bir SIEM çözümüdür ve organizasyonların güvenlik olaylarını izlemelerine, analiz etmelerine ve raporlamalarına yardımcı olur.</li>
          <li><strong>Symantec Managed Security Services (MSS):</strong> MSS, organizasyonlara güvenlik olaylarını yönetme ve izleme hizmeti sunar.</li>
          <li><strong>RSA NetWitness:</strong> RSA, büyük organizasyonlar için gelişmiş bir SIEM çözümüdür. Ağ trafik analizi ve paket yakalama yeteneklerine sahiptir.</li>
          <li><strong>Fortinet FortiSIEM:</strong> Fortinet, olayları izleme, analiz etme ve raporlama konularında güçlü bir SIEM çözümüdür ve özellikle ağ güvenliği konularında güçlüdür.</li>
        </ul>

        <h3>SIEM Projesinin Amacı:</h3>
        <p>SIEM projesinin amacı, bir organizasyonun bilgisayar ağlarını, sistemlerini ve uygulamalarını sürekli olarak izlemek, güvenlik olaylarını tespit ermek, bu olaylara yanıt vermek ve bunları raporlamaktır. Bu tür bir proje genellikle aşağıdaki hedeflere ulaşmayı amaçlar.</p>
        
        <ol>
          <li><strong>Tehditleri tespit etme ve önleme:</strong> SIEM, bilgisayar korsanları, kötü amaçlı yazılımlar, veri sızıntıları ve diğer güvenlik tehditlerini tespit ederek bunlara karşı önlemler almayı amaçlar.</li>
          <li><strong>Güvenlik olaylarını yönetme ve analiz etme:</strong> SIEM, ağdaki veya sistemlerdeki herhangi bir olağandışı aktiviteyi veya güvenlik ihlallerini tanımlar, bu olayları analiz eder ve bunlara hızlı bir şekilde yanıt verir.</li>
          <li><strong>Uyumluluk gereksinimlerini karşılama:</strong> SIEM, çeşitli düzenleyici standartlara ve gereksinimlere uyum sağlamak için gerekli olan günlükleri toplar, depolar ve raporlar.</li>
          <li><strong>Veri analizi ve raporlama:</strong> SIEM, güvenlik olaylarını analiz ederek trendleri belirler ve detayları raporlar oluşturur. Bu raporlar, güvenlik zafiyetlerini kapatmak ve güvenlik politikalarını iyileştirmek için kullanılabilir.</li>
        </ol>

        <p>Bu amaçlar doğrultusunda, SIEM projeleri genellikle güvenlik operasyonlarına, olay yönetimine ve risk yönetimine katkı sağlar.</p>
      `);
    }
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
    <div className="App">
      {/* Header Bölümü */}
      <header>
        <nav>
          <div className="logo">
            <div className="logo-container">
              <img 
                src="./logo_foti.jpg" 
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
              </div>
            </li>
            <li><a href="#!" onClick={() => handlePageChange('blog')}>Blog</a></li>
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

      {/* Blog Bölümü */}
      {currentPage === 'blog' && (
        <section id="blog" className="page-section">
          <div className="container">
            <div className="blog-container">
              <article className="blog-post">
                <div className="blog-article">
                  <h2>Yapay Zeka ve Siber Güvenlik</h2>
                  <div className="post-meta">
                    <span>
                      <i className="fas fa-calendar"></i>
                      {new Date().toLocaleDateString()}
                    </span>
                    <span>
                      <i className="fas fa-user"></i>
                      Sadık KARTAL ve Erdoğan ÇİMEN
                    </span>
                  </div>
                  <div className="post-content">
                    <div className="content-preview">
                      <p>
                        Yapay zeka ve siber güvenlik alanındaki son gelişmeler, 
                        teknolojinin geleceğini şekillendiren en önemli konular arasında yer alıyor. 
                        Bu yazıda, yapay zekanın temellerinden siber güvenlik alanındaki uygulamalarına 
                        kadar detaylı bir inceleme sunuyoruz...
                      </p>
                    </div>
                    <div className="content-full" style={{ display: 'none' }}>
                      <div dangerouslySetInnerHTML={{ __html: blogContent }} />
                    </div>
                  </div>
                  <button 
                    className="read-more"
                    onClick={() => {
                      const content = document.querySelector('.content-full');
                      const button = document.querySelector('.read-more');
                      if (content.style.display === 'none') {
                        content.style.display = 'block';
                        button.textContent = 'Daha Az Göster';
                      } else {
                        content.style.display = 'none';
                        button.textContent = 'Devamını Oku';
                      }
                    }}
                  >
                    Devamını Oku
                  </button>
                </div>
              </article>

              <article className="blog-post">
                <div className="blog-article">
                  <h2>SIEM (Security Information and Event Management)</h2>
                  <div className="post-meta">
                    <span>
                      <i className="fas fa-calendar"></i>
                      {new Date().toLocaleDateString()}
                    </span>
                    <span>
                      <i className="fas fa-user"></i>
                      Sadık KARTAL
                    </span>
                  </div>
                  <div className="post-content">
                    <div className="content-preview">
                      <p>
                        SIEM sistemleri, kurumsal ağlarda güvenlik olaylarını izleyen, analiz eden ve 
                        raporlayan kapsamlı güvenlik yönetim çözümleridir. Bu yazıda SIEM sistemlerinin 
                        temel bileşenlerini, çalışma prensiplerini ve kurumsal güvenlik açısından önemini 
                        inceliyoruz...
                      </p>
                    </div>
                    <div className="content-full" style={{ display: 'none' }}>
                      <div dangerouslySetInnerHTML={{ __html: siem_content }} />
                    </div>
                  </div>
                  <button 
                    className="read-more"
                    onClick={(e) => {
                      const content = e.target.previousElementSibling.querySelector('.content-full');
                      if (content.style.display === 'none') {
                        content.style.display = 'block';
                        e.target.textContent = 'Daha Az Göster';
                      } else {
                        content.style.display = 'none';
                        e.target.textContent = 'Devamını Oku';
                      }
                    }}
                  >
                    Devamını Oku
                  </button>
                </div>
              </article>
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
            <a href="./cv.pdf" download className="cv-download">
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
