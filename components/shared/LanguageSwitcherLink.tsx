import Link from 'next/link';
import { useRouter } from 'next/router';
import languageDetector from '../../lib/languageDetector';

interface LanguageSwitchLinkProps {
  locale: string;
  href?: string;
}

const LanguageSwitchLink: React.FC<LanguageSwitchLinkProps> = ({ locale, ...rest }) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;

  Object.keys(router.query).forEach(k => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    pName = pName.replace(`[${k}]`, router.query[k] as string);
  });

  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }

  if (href.indexOf(`/${locale}`) < 0) {
    href = `/${locale}${href}`;
  }

  return (
    <Link href={href} onClick={() => languageDetector.cache?.(locale)} style={{ width: '100%' }}>
      {locale.toUpperCase()}
    </Link>
  );
};

export default LanguageSwitchLink;
