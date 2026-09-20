import { generateAutomotiveBusinessSchema } from '@/lib/seo';

export function StructuredData() {
  const schema = generateAutomotiveBusinessSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
