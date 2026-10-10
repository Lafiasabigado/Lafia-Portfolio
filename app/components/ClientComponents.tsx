'use client';

import dynamic from 'next/dynamic';

const CustomCursor = dynamic(() => import('./ui/CustomCursor'), {
  ssr: false,
});

export default function ClientComponents() {
  return <CustomCursor />;
}
