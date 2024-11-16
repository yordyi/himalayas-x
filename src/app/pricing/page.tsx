import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'
import { CheckIcon } from '@heroicons/react/24/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing that grows with your practice.',
}

const tiers = [
  {
    name: 'Essential',
    priceMonthly: 99,
    description:
      'Perfect for solo practitioners and small law firms getting started with AI.',
    href: '/register',
    features: [
      {
        name: 'Document Generation',
        description: 'Generate legal documents with AI assistance',
      },
      {
        name: 'Basic Case Analysis',
        description: 'AI-powered case law research and analysis',
      },
      {
        name: 'Client Portal',
        description: 'Secure client communication and document sharing',
      },
      {
        name: 'Team Members',
        description: 'Up to 3 team members',
      },
      {
        name: 'Storage',
        description: '50GB secure document storage',
      },
      {
        name: 'Support',
        description: 'Email support with 24-hour response time',
      },
    ],
  },
  {
    name: 'Professional',
    priceMonthly: 199,
    description:
      'Designed for growing law firms that need advanced AI capabilities.',
    href: '/register',
    features: [
      {
        name: 'Everything in Essential, plus:',
        description: 'All features from Essential tier',
      },
      {
        name: 'Advanced Document Analysis',
        description: 'Deep contract analysis and risk assessment',
      },
      {
        name: 'Precedent Search',
        description: 'Advanced case law search with relevancy scoring',
      },
      {
        name: 'Workflow Automation',
        description: 'Custom workflow automation tools',
      },
      {
        name: 'Team Members',
        description: 'Up to 10 team members',
      },
      {
        name: 'Storage',
        description: '200GB secure document storage',
      },
      {
        name: 'Priority Support',
        description: '4-hour response time with dedicated support',
      },
    ],
  },
  {
    name: 'Enterprise',
    priceMonthly: 499,
    description:
      'For large law firms requiring maximum security and customization.',
    href: '/register',
    features: [
      {
        name: 'Everything in Professional, plus:',
        description: 'All features from Professional tier',
      },
      {
        name: 'Custom AI Models',
        description: 'Tailored AI models for your practice area',
      },
      {
        name: 'Advanced Analytics',
        description: 'Detailed insights and performance metrics',
      },
      {
        name: 'API Access',
        description: 'Full API access for custom integrations',
      },
      {
        name: 'Unlimited Team Members',
        description: 'No limit on team size',
      },
      {
        name: 'Storage',
        description: 'Unlimited secure document storage',
      },
      {
        name: 'White-glove Support',
        description: '1-hour response time with dedicated account manager',
      },
    ],
  },
]

function FeatureItem({ name, description }: { name: string; description: string }) {
  return (
    <li className="flex gap-3">
      <CheckIcon className="size-5 flex-none fill-primary-600" />
      <div>
        <div className="text-sm/6 font-semibold text-gray-950">{name}</div>
        <div className="text-sm/6 text-gray-600">{description}</div>
      </div>
    </li>
  )
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Pricing that grows with your practice.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Choose a plan that fits your needs. All plans include a 14-day free trial
        to explore our AI-powered legal tools.
      </Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <GradientBackground className="absolute inset-x-2 bottom-0 top-48 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
        <LogoCloud className="mt-24" />
      </Container>
    </div>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <h3 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
            {tier.name}
          </h3>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              ${tier.priceMonthly}
            </div>
            <div className="text-sm/5 text-gray-950/75">
              <p>USD</p>
              <p>per month</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href={tier.href}>Start free trial</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Plan includes:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.features.map((feature, featureIndex) => (
                <FeatureItem key={featureIndex} {...feature} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Pricing() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      <Footer />
    </main>
  )
}
