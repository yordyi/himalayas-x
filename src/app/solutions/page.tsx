import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Tab } from '@headlessui/react'
import { 
  DocumentTextIcon, 
  ScaleIcon, 
  UserGroupIcon, 
  BeakerIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'
import { MagicCard } from '@/components/magic-card'
import type { Metadata } from 'next'
import { Button } from '@/components/button'
import { solutions } from './data'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'AI-powered solutions to transform your business operations.',
}

function Feature({ name, description }: { name: string; description: string }) {
  return (
    <div className="group relative rounded-2xl border border-gray-200 p-6 hover:border-gray-300">
      <h3 className="text-base/6 font-semibold text-gray-950">{name}</h3>
      <p className="mt-2 text-sm/6 text-gray-600">{description}</p>
      <ArrowRightIcon className="absolute bottom-6 right-6 h-5 w-5 text-gray-300 transition-colors group-hover:text-gray-400" />
    </div>
  )
}

function Benefits({ benefits }: { benefits: readonly string[] }) {
  return (
    <div className="mt-8 rounded-2xl bg-gray-50 p-6">
      <h3 className="text-sm font-semibold text-gray-950">Key Benefits</h3>
      <ul className="mt-4 space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-3 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-primary-600" />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  )
}

function SolutionSection({ solution }: { solution: typeof solutions[number] }) {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="grid gap-6 sm:grid-cols-2">
          {solution.features.map((feature, featureIndex) => (
            <Feature key={featureIndex} {...feature} />
          ))}
        </div>
      </div>
      <div>
        <MagicCard className="h-full">
          <div className="flex h-full flex-col p-6">
            <solution.icon className="h-8 w-8 text-gray-950" />
            <h3 className="mt-4 text-xl font-semibold text-gray-950">
              {solution.name}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{solution.description}</p>
            <Benefits benefits={solution.benefits} />
            <Button 
              className="mt-8" 
              href={solution.href}
            >
              Learn More
            </Button>
          </div>
        </MagicCard>
      </div>
    </div>
  )
}

export default function Solutions() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <div className="mt-16 sm:mt-20">
          <Subheading>Solutions</Subheading>
          <Heading as="h1" className="mt-2">
            Transform Your Business with AI
          </Heading>
          <Lead className="mt-6 max-w-3xl">
            Our comprehensive AI-driven solutions help businesses operate smarter, faster, and more efficiently.
          </Lead>
        </div>
        <Tab.Group as="div" className="mt-16 sm:mt-20">
          <Tab.List className="grid auto-cols-fr grid-flow-col justify-start gap-x-8 overflow-auto whitespace-nowrap pb-4">
            {solutions.map((solution) => (
              <Tab
                key={solution.id}
                className={({ selected }) =>
                  cn(
                    'flex items-center gap-2 border-b-2 pb-4 text-sm font-medium transition focus-visible:outline-none',
                    selected
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-600 hover:border-gray-200 hover:text-gray-900',
                  )
                }
              >
                <solution.icon className="h-5 w-5 flex-none" />
                {solution.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-8 sm:mt-12">
            {solutions.map((solution) => (
              <Tab.Panel
                key={solution.id}
                className="focus-visible:outline-none"
              >
                <SolutionSection solution={solution} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
      <Footer />
    </main>
  )
} 