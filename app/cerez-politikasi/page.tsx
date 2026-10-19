import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/ui/LegalPage';
import { ResetCookieConsentButton } from '@/components/ui/ResetCookieConsentButton';

export const metadata = constructMetadata({
  title: 'Çerez Politikası | NEON Oto Kurtarma',
  description:
    'NEON Oto Kurtarma çerez politikası: hangi çerezlerin neden kullanıldığı ve tercihlerinizi nasıl yönetebileceğiniz.',
  path: '/cerez-politikasi',
});

export default function CerezPage() {
  return (
    <LegalPage
      title="Çerez Politikası"
      intro="Bu sayfa, neonotokurtarma.com'da hangi çerezlerin kullanıldığını ve tercihlerinizi nasıl yönetebileceğinizi açıklar."
      updatedAt="14 Ekim 2026"
      sections={[
        {
          heading: 'Çerez nedir?',
          body: (
            <p>
              Çerezler, bir siteyi ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin
              dosyalarıdır. Siteyi hatırlamak, nasıl kullanıldığını ölçmek ve reklamların etkisini
              anlamak için kullanılır.
            </p>
          ),
        },
        {
          heading: 'Hangi çerezleri kullanıyoruz?',
          body: (
            <ul>
              <li>
                <strong>Zorunlu / işlevsel:</strong> Çerez tercihiniz, sonraki ziyaretlerinizde
                aynı soruyu tekrar görmemeniz için tutulur.
              </li>
              <li>
                <strong>Analitik (Google Analytics):</strong> Hangi sayfaların ziyaret edildiğini ve
                sitenin nasıl kullanıldığını anonim istatistiklerle ölçer. Yalnızca onay verirseniz
                çalışır.
              </li>
              <li>
                <strong>Reklam ölçümü (Google Ads):</strong> Reklamdan gelen ziyaretçilerin aradığı
                veya WhatsApp&apos;a geçtiği gibi işlemleri ölçer. Yalnızca onay verirseniz
                çalışır.
              </li>
            </ul>
          ),
        },
        {
          heading: 'Onay vermezseniz ne olur?',
          body: (
            <p>
              Reddettiğinizde analitik ve reklam çerezleri kullanılmaz. Site, arama ve WhatsApp
              butonları dahil tüm işlevleriyle çalışmaya devam eder. Google, çerezsiz ölçümde
              kişisel veri içermeyen genel sinyaller alabilir.
            </p>
          ),
        },
        {
          heading: 'Tercihlerinizi yönetmek',
          body: (
            <>
              <p>
                Aşağıdaki butonla kayıtlı tercihinizi sıfırlayıp çerez bildirimini yeniden
                görebilirsiniz. Ayrıca tarayıcı ayarlarınızdan çerezleri silebilir veya
                engelleyebilirsiniz.
              </p>
              <div className="pt-2">
                <ResetCookieConsentButton />
              </div>
            </>
          ),
        },
        {
          heading: 'Üçüncü taraf hizmetler',
          body: (
            <p>
              Google Analytics, Google Ads ve Google Maps (İletişim sayfasındaki harita) Google
              tarafından sunulur. Bu hizmetlerin kendi politikaları geçerlidir. Daha fazla bilgi için{' '}
              <Link href="/gizlilik-politikasi" className="font-semibold !underline underline-offset-2">
                Gizlilik Politikası
              </Link>{' '}
              ve{' '}
              <Link href="/kvkk-aydinlatma-metni" className="font-semibold !underline underline-offset-2">
                KVKK Aydınlatma Metni
              </Link>
              &apos;ni inceleyebilirsiniz.
            </p>
          ),
        },
      ]}
    />
  );
}
