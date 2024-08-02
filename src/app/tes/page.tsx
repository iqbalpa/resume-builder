'use client';

import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

export default function Page() {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div>
      <h1>{JSON.stringify(user)}</h1>
    </div>
  );
}
