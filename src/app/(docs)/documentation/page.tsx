import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import { FC } from 'react'
import 'simplebar-react/dist/simplebar.min.css'

import DocumentationTabs from '@/components/DocumentationTabs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Similarity API | Documentation',
  description: 'Free & Open Source Similarity Scout API',
}

const page: FC = () => {
  return (
    <div className='container max-w-7xl mx-auto mt-12'>
      <div className='flex flex-col items-center gap-6'>
        <LargeHeading>API Documentation</LargeHeading>
        <Paragraph>api/v1/similarity</Paragraph>

        <DocumentationTabs />
      </div>
    </div>
  )
}

export default page
