import Header from '@/components/Header'
import { auth } from '@/lib/better-auth/auth'
import crypto from 'crypto';
import { email } from 'better-auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

const layout = async ({children}:{children:React.ReactNode}) => {

  const session = await auth.api.getSession({
    headers : await headers(),
  });

  if(!session?.user){
    redirect('/sign-in');
  }

  function gravatarUrl(email: string) {
    try {
      const md5 = crypto.createHash('md5').update((email || '').trim().toLowerCase()).digest('hex');
      return `https://www.gravatar.com/avatar/${md5}?s=280&d=identicon`;
    } catch (err) {
      return undefined;
    }
  }

  const user = {
    id : session.user.id,
    name : session.user.name,
    email : session.user.email,
    // Use session image if provided (from auth provider); otherwise use gravatar identicon fallback.
    image: (session.user as any)?.image ?? gravatarUrl(session.user?.email ?? ''),
  }
  return (
    <main className='min-h-screen text-gray-400'>
        <Header user={user}/>
        <div className='container py-10'>
            {children}
        </div>
    </main>
  )
}

export default layout
