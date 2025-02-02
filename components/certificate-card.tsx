import Image from 'next/image';
import React from 'react';
import { Card, CardContent } from './ui/card';

type Props = {
  title: string;
  certificateUrl: string;
};

const CertificateCard = ({ title, certificateUrl }: Props) => {
  return (
    <Card>
      <CardContent className='flex flex-col items-center justify-center gap-2 rounded-lg border p-2 transition-all duration-300 ease-out hover:cursor-pointer hover:shadow-lg'>
        <Image
          src={certificateUrl}
          alt={title}
          width={300}
          height={300}
        />
        <h3 className='text-lg font-bold'>{title}</h3>
      </CardContent>
    </Card>
  );
};

export default CertificateCard;
