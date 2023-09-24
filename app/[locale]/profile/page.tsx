import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const Page = async () => {
  const session = await getServerSession(authOptions);
  return <div>{JSON.stringify(session)}</div>;
};

export default Page;
