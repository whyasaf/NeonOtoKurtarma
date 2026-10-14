import { SITE_CONFIG } from '@/data/site';
import { constructMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/ui/LegalPage';

export const metadata = constructMetadata({
  title: 'KVKK Aydınlatma Metni | NEON Oto Kurtarma',
  description:
    'NEON Oto Kurtarma kişisel verilerin korunması kanunu (KVKK) kapsamındaki aydınlatma metni: işlenen veriler, amaçlar ve haklarınız.',
  path: '/kvkk-aydinlatma-metni',
});

export default function KvkkPage() {
  return (
    <LegalPage
      title="KVKK Aydınlatma Metni"
      intro="6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, kişisel verilerinizin nasıl işlendiğini bu metinle sizinle paylaşıyoruz."
      updatedAt="14 Ekim 2026"
      sections={[
        {
          heading: 'Veri sorumlusu',
          body: (
            <p>
              Kişisel verileriniz, veri sorumlusu sıfatıyla {SITE_CONFIG.brandName} tarafından
              işlenir. Adres: {SITE_CONFIG.location.formattedAddress}. E-posta: {SITE_CONFIG.email}.
              Telefon: {SITE_CONFIG.phone}.
            </p>
          ),
        },
        {
          heading: 'İşlenen kişisel veriler',
          body: (
            <ul>
              <li>
                <strong>İletişim bilgileri:</strong> Bizi telefonla aradığınızda telefon numaranız,
                WhatsApp üzerinden yazdığınızda WhatsApp profil adınız ve numaranız.
              </li>
              <li>
                <strong>Konum bilgisi:</strong> &quot;Hızlı Konum Gönder&quot; butonunu kullanıp
                tarayıcınızdan izin verdiğinizde bulunduğunuz konum, WhatsApp mesajına bağlantı
                olarak eklenir.
              </li>
              <li>
                <strong>İşlem güvenliği ve kullanım verileri:</strong> IP adresi, tarayıcı ve cihaz
                türü, ziyaret edilen sayfalar. Bu veriler yalnızca çerez onayı verdiyseniz
                analitik ve reklam ölçümü amacıyla toplanır.
              </li>
              <li>
                <strong>Talep bilgisi:</strong> Araç tipi, arıza türü, adres gibi hizmet için bize
                kendiniz ilettiğiniz bilgiler.
              </li>
            </ul>
          ),
        },
        {
          heading: 'İşleme amaçları',
          body: (
            <ul>
              <li>Oto kurtarma ve yol yardım talebinizi karşılamak, ekibi yönlendirmek,</li>
              <li>Sizinle iletişim kurmak ve talebinizle ilgili bilgi vermek,</li>
              <li>Web sitesinin performansını ve reklam kampanyalarının etkisini ölçmek,</li>
              <li>Hukuki yükümlülüklerimizi yerine getirmek.</li>
            </ul>
          ),
        },
        {
          heading: 'Hukuki sebepler',
          body: (
            <p>
              Verileriniz KVKK madde 5/2 kapsamında; bir sözleşmenin kurulması veya ifasıyla
              doğrudan ilgili olması, hukuki yükümlülüğün yerine getirilmesi ve meşru menfaatimiz
              sebeplerine dayanarak işlenir. Çerezler ve konum paylaşımı için açık rızanız esas
              alınır; rızanızı dilediğiniz zaman geri çekebilirsiniz.
            </p>
          ),
        },
        {
          heading: 'Verilerin aktarılması',
          body: (
            <p>
              Verileriniz yalnızca hizmetin yürütülmesi için gerekli ölçüde; WhatsApp (Meta) ile
              yaptığınız yazışmalar kapsamında Meta&apos;ya, analitik ve reklam ölçümü kapsamında
              (onay verdiyseniz) Google&apos;a ve yetkili kamu kurumlarına, hukuken gerektiği
              hallerde aktarılabilir. Bu hizmet sağlayıcıların bir kısmı yurt dışında bulunabilir.
              Verilerinizi satmayız.
            </p>
          ),
        },
        {
          heading: 'Saklama süresi',
          body: (
            <p>
              Verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen
              süreler kadar saklanır, sürenin dolmasının ardından silinir veya anonim hale
              getirilir.
            </p>
          ),
        },
        {
          heading: 'KVKK madde 11 kapsamındaki haklarınız',
          body: (
            <>
              <ul>
                <li>Kişisel verinizin işlenip işlenmediğini öğrenme,</li>
                <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
                <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
                <li>Silinmesini veya yok edilmesini isteme,</li>
                <li>Bu işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
                <li>Otomatik sistemlerle analiz sonucu aleyhinize bir sonuç çıkmasına itiraz etme,</li>
                <li>Kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme.</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'Başvuru yöntemi',
          body: (
            <p>
              Haklarınızla ilgili taleplerinizi {SITE_CONFIG.email} adresine e-posta ile
              iletebilirsiniz. Başvurunuz, niteliğine göre en geç 30 gün içinde sonuçlandırılır.
            </p>
          ),
        },
      ]}
    />
  );
}
