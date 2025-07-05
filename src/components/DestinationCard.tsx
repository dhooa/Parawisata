import Image from 'next/image';

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
}

export const DestinationCard = ({ imgSrc, title, description }: CardProps) => (
  <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2">
    <div className="relative h-52 w-full">
      <Image src={imgSrc} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="p-5 text-left">
      <h3 className="mb-2 text-xl font-bold text-dark-light">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);
