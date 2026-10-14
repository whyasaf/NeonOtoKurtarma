import Link from 'next/link';
import { SITE_CONFIG } from '@/data/site';
import { constructMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/ui/LegalPage';

export const metadata = constructMetadata({
  title: 'Gizlilik Politikası | NEON Oto Kurtarma',
  description:
    'NEON Oto Kurtarma gizlilik politikası: konum paylaşımı, iletişim bilgileri ve ziyaret verilerinin nasıl kullanıldığı.',
  path: '/gizlilik-politikasi',
});

export default function GizlilikPage() {
  return (
    <LegalPage
      title="Gizlilik Politikası"
      intro="Gizliliğiniz bizim için önemli. Bu sayfada neonotokurtarma.com'u kullanırken hangi bilgilerin nasıl kullanıldığını sade bir dille anlatıyoruz."
      updatedAt="14 Ekim 2026"
      sections={[
        {
          heading: 'Bu site ne yapar, ne yapmaz',
          body: (
            <p>
              Sitede kayıt, üyelik veya form yoktur; adınızı, e-postanızı ya da ödeme bilgilerinizi
              bizimle paylaşmanız gerekmez. Bize ulaşmanın yolu telefon aramak veya WhatsApp&apos;tan
              yazmaktır.
            </p>
          ),
        },
        {
          heading: 'Konumunuz',
          body: (
            <p>
              &quot;Hızlı Konum Gönder&quot; butonuna bastığınızda tarayıcınız konum izni ister. İzin
              verirseniz konumunuz, hazır bir WhatsApp mesajına harita bağlantısı olarak eklenir ve
              mesajı siz gönderirsiniz. Konumunuz sitemizde veya sunucularımızda saklanmaz. İzin
              vermezseniz yalnızca WhatsApp sohbetimiz açılır.
            </p>
          ),
        },
        {
          heading: 'Telefon ve WhatsApp iletişimi',
          body: (
            <p>
              Bizi aradığınızda veya yazdığınızda numaranızı, yalnızca talebinizi karşılamak ve
              sizinle iletişim kurmak için kullanırız. WhatsApp yazışmaları Meta&apos;nın kendi
              gizlilik koşullarına tabidir.
            </p>
          ),
        },
        {
          heading: 'Analitik ve reklam ölçümü',
          body: (
            <p>
              Onay vermeniz halinde Google Analytics ve Google Ads çerezleriyle sitenin nasıl
              kullanıldığını ve reklamlarımızın işe yarayıp yaramadığını ölçeriz. Reddederseniz bu
              çerezler kullanılmaz. Ayrıntılar için{' '}
              <Link href="/cerez-politikasi" className="font-semibold !underline underline-offset-2">
                Çerez Politikası
              </Link>
              &apos;nı inceleyebilirsiniz.
            </p>
          ),
        },
        {
          heading: 'Harita ve sosyal medya bağlantıları',
          body: (
            <p>
              İletişim sayfasındaki harita Google Maps tarafından sunulur; sosyal medya bağlantıları
              sizi Instagram, TikTok ve YouTube&apos;a yönlendirir. Bu hizmetlerin kendi gizlilik
              politikaları geçerlidir.
            </p>
          ),
        },
        {
          heading: 'Güvenlik',
          body: (
            <p>
              Site HTTPS ile sunulur ve standart güvenlik başlıkları kullanılır. İnternet üzerinden
              yapılan hiçbir iletimin yüzde yüz güvenli olduğu garanti edilemez.
            </p>
          ),
        },
        {
          heading: 'Haklarınız ve iletişim',
          body: (
            <p>
              Kişisel verilerinizle ilgili haklarınız{' '}
              <Link href="/kvkk-aydinlatma-metni" className="font-semibold !underline underline-offset-2">
                KVKK Aydınlatma Metni
              </Link>
              &apos;nde açıklanmıştır. Sorularınız için {SITE_CONFIG.email} adresine yazabilirsiniz.
            </p>
          ),
        },
      ]}
    />
  );
}
