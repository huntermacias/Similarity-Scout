'use client'
import React from 'react'
import LargeHeading from './LargeHeading'
import Paragraph from './Paragraph'
import { Card, Text, Row, Grid } from "@nextui-org/react";
import { Button, buttonVariants } from '@/components/ui/Button'


export default function Pricing() {

  const pricingTiers = [
    {
      name: 'Basic',
      requestsPerMonth: 10000,
      requestsPerMinute: 100,
      price: 0.01,
      minimumCommitment: 10,
    },
    {
      name: 'Pro',
      requestsPerMonth: 50000,
      requestsPerMinute: 500,
      price: 0.005,
      minimumCommitment: 50,
    },
    {
      name: 'Enterprise',
      requestsPerMonth: 'Custom',
      requestsPerMinute: 'Custom',
      price: 'Custom',
      minimumCommitment: 'Custom',
    },
  ];
  

  return (
	  <div className='container max-w-7xl mx-auto mt-12'>
      <div className='flex flex-col items-center gap-6'>
        <LargeHeading>Similarity Scout API Pricing</LargeHeading>
        <Paragraph>Coming Soon</Paragraph>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-center space-x-4 space-y-4" >
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className="px-4 h-full" css={{ mw: "330px" }} >
                <Card.Header>
                  <Text className="text-center" b>{tier.name} Tier</Text>
                </Card.Header>
              
                <Card.Divider />
                <Text>
                  <strong>Requests/Month:</strong>{' '} {tier.requestsPerMonth}
                </Text>
                  <br />
                <Text>
                  <strong>Requests/Minute:</strong>{' '} {tier.requestsPerMinute}
                </Text>
                <br />
                <Text>
                  <strong>Price/Request:</strong>
                  {tier.price === 'Custom' ? ' Contact Us' : `$${tier.price}`}
                </Text>
                <br />
                <Text>
                  <strong>Monthly Commitment:</strong>
                  {tier.minimumCommitment === 'Custom' ? ' Contact Us' : `$${tier.minimumCommitment}`}
                </Text>
                <br />
                <Button>Upgrade</Button>
                <br />
              </Card>
            ))}
      </div>


    </div>
  )
}
