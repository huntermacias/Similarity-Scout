// import { authOptions } from '@/lib/auth'
// import { getServerSession } from 'next-auth'

import Pricing from '@/components/ui/Pricing'
import type { Metadata } from 'next'
// import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Similarity API | Pricing',
  description: 'Similarity Scout API Pricing',
}

const page = async () => {
  // const user = await getServerSession(authOptions)
//   if (!user) return notFound()

  return (
    <div className='max-w-7xl mx-auto mt-16'>
      <Pricing />
    </div>
  )
}

export default page
