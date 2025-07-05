import Link from 'next-intl/link';

interface PackageProps {
  title: string;
  items: string[];
  ctaText: string;
}

export const PackageCard = ({ title, items, ctaText }: PackageProps) => (
  <div className="flex flex-col rounded-lg bg-white p-6 text-left shadow-lg">
    <h3 className="mb-4 text-xl font-bold text-brand">{title}</h3>
    <ul className="mb-6 flex-grow space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="mr-2 mt-1 text-brand">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <Link href="/kontak" className="mt-auto block w-full rounded-md bg-dark-light py-2 text-center text-white transition-colors hover:bg-dark">
      {ctaText}
    </Link>
  </div>
);
