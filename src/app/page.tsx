import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import { featureScreenshots } from '@/lib/images'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative">
      <GradientBackground className="absolute inset-2 bottom-0 rounded-[32px] ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/blog/himalayas-x-raises-series-a"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30"
            >
              Himalayas X raises $50M to revolutionize legal tech
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            AI-Powered Legal Assistant.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Empower your legal practice with AI. Generate documents, analyze cases, and get expert consultation instantly.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/pricing">Start Free Trial</Button>
            <Button variant="secondary" href="/demo">
              Watch Demo
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Features() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-40">
      <Subheading>Features</Subheading>
      <Heading as="h2" className="mt-4">
        Everything you need to streamline your legal practice.
      </Heading>
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-3xl bg-gray-50 p-8">
          <h3 className="text-xl font-semibold">Legal Document Generation</h3>
          <p className="mt-4 text-gray-600">
            Generate high-quality legal documents in minutes. From contracts to briefs, 
            our AI understands legal context and formatting requirements.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            <li>• Smart templates for common legal documents</li>
            <li>• Context-aware document assembly</li>
            <li>• Multi-jurisdiction support</li>
            <li>• Automatic compliance checking</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gray-50 p-8">
          <h3 className="text-xl font-semibold">Case Analysis</h3>
          <p className="mt-4 text-gray-600">
            Analyze cases faster with AI-powered insights. Identify key precedents, 
            assess risks, and develop winning strategies.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            <li>• Precedent search and analysis</li>
            <li>• Risk assessment tools</li>
            <li>• Strategy recommendations</li>
            <li>• Citation checking</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gray-50 p-8">
          <h3 className="text-xl font-semibold">Expert Consultation</h3>
          <p className="mt-4 text-gray-600">
            Get instant answers to your legal questions. Our AI assistant provides 
            research-backed responses and practical guidance.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            <li>• 24/7 AI legal assistant</li>
            <li>• Research-backed answers</li>
            <li>• Practice area expertise</li>
            <li>• Continuous learning</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

function Pricing() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-40">
      <Subheading>Pricing</Subheading>
      <Heading as="h2" className="mt-4">
        Plans for law firms of all sizes.
      </Heading>
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-gray-50 p-8">
          <h3 className="text-xl font-semibold">Professional</h3>
          <p className="mt-4 text-3xl font-bold">$199<span className="text-lg font-normal">/month</span></p>
          <p className="mt-2 text-gray-600">Perfect for small to medium law firms</p>
          <ul className="mt-8 space-y-4 text-sm text-gray-600">
            <li>• Unlimited document generation</li>
            <li>• Advanced case analysis</li>
            <li>• Priority AI consultation</li>
            <li>• Team collaboration tools</li>
            <li>• Custom templates</li>
          </ul>
          <Button className="mt-8 w-full" href="/pricing">
            Start Free Trial
          </Button>
        </div>

        <div className="rounded-3xl bg-gray-50 p-8">
          <h3 className="text-xl font-semibold">Pay As You Go</h3>
          <p className="mt-4 text-3xl font-bold">From $29<span className="text-lg font-normal">/credit</span></p>
          <p className="mt-2 text-gray-600">Flexible pricing for occasional use</p>
          <ul className="mt-8 space-y-4 text-sm text-gray-600">
            <li>• Pay per document/analysis</li>
            <li>• No monthly commitment</li>
            <li>• Basic AI consultation</li>
            <li>• Standard templates</li>
            <li>• Credits never expire</li>
          </ul>
          <Button className="mt-8 w-full" variant="secondary" href="/pricing">
            Buy Credits
          </Button>
        </div>
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="bg-gray-950 py-32">
      <Container>
        <Subheading dark>Advanced Features</Subheading>
        <Heading as="h2" dark className="mt-4">
          Powerful tools for legal professionals.
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <BentoCard
            dark
            eyebrow="Multi-jurisdiction Support"
            title="Stay compliant across borders"
            description="Our AI understands legal requirements across different jurisdictions, helping you maintain compliance while working internationally."
            graphic={
              <div className="relative flex size-full items-center justify-center">
                <Map />
              </div>
            }
          />
          <BentoCard
            dark
            eyebrow="Advanced Analytics"
            title="Data-driven insights"
            description="Analyze case outcomes, track success rates, and identify patterns to make informed decisions based on historical data."
            graphic={
              <div className="relative flex size-full items-center justify-center">
                <Screenshot
                  src={featureScreenshots.analytics}
                  width={1364}
                  height={866}
                  className="size-full"
                />
              </div>
            }
          />
          <BentoCard
            dark
            eyebrow="Team Collaboration"
            title="Work together seamlessly"
            description="Share documents, collaborate on cases, and manage team workflows with integrated collaboration tools."
            graphic={
              <div className="relative flex size-full items-center justify-center">
                <Screenshot
                  src={featureScreenshots.collaboration}
                  width={1364}
                  height={866}
                  className="size-full"
                />
              </div>
            }
          />
          <BentoCard
            dark
            eyebrow="AI Research Assistant"
            title="Research at lightning speed"
            description="Let our AI help you research cases, find relevant precedents, and analyze legal documents in minutes, not hours."
            graphic={
              <div className="relative flex size-full items-center justify-center">
                <Screenshot
                  src={featureScreenshots.research}
                  width={1364}
                  height={866}
                  className="size-full"
                />
              </div>
            }
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden relative">
      <GradientBackground className="absolute inset-0 -z-10" />
      <div className="absolute inset-0 rounded-[40px] pointer-events-none border border-black/5" />
      
      <div className="relative">
        <Hero />
        <main>
          <Container className="mt-10">
            <LogoCloud />
          </Container>
          <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
            <Features />
            <Pricing />
          </div>
          <DarkBentoSection />
        </main>
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}
