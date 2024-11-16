import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { notFound } from 'next/navigation'
import { solutions } from '../data'
import { Button } from '@/components/button'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const solution = solutions.find((s) => s.id === params.slug)
  if (!solution) return {}

  return {
    title: `${solution.name} - Solutions`,
    description: solution.description,
  }
}

export default function SolutionPage({
  params,
}: {
  params: { slug: string }
}) {
  const solution = solutions.find((s) => s.id === params.slug)
  if (!solution) notFound()

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <div className="mt-16 sm:mt-20">
          <Button
            href="/solutions"
            variant="outline"
            className="mb-8 flex items-center gap-2"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Solutions
          </Button>
          <Subheading>{solution.name}</Subheading>
          <Heading as="h1" className="mt-2">
            {solution.description}
          </Heading>
          <Lead className="mt-6 max-w-3xl">
            Transform your business with our {solution.name} solution.
          </Lead>
        </div>

        <div className="mt-16 grid gap-8 sm:mt-20">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Key Features</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {solution.features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Key Benefits</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {solution.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-3"
                >
                  <div className="h-2 w-2 rounded-full bg-primary-600" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl bg-gray-950 p-8 text-white">
            <h2 className="text-2xl font-semibold">Ready to get started?</h2>
            <p className="mt-2 text-gray-400">
              Contact our expert team to learn how to implement {solution.name}
              in your business.
            </p>
            <div className="mt-6 flex gap-4">
              <Button href="/contact" variant="primary">
                Contact Us
              </Button>
              <Button href="/pricing" variant="secondary">
                View Pricing
              </Button>
            </div>
          </section>
        </div>
      </Container>
      <Footer />
    </main>
  )
} 