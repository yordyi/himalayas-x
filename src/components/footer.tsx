import { Container } from '@/components/container'
import { Link } from '@/components/link'
import { Logo } from '@/components/logo'

// 添加社交媒体图标组件
function SocialIconX(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z" />
    </svg>
  )
}

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

const navigation = {
  solutions: [
    { name: 'Document Generation', href: '/solutions#document-generation' },
    { name: 'Case Analysis', href: '/solutions#case-analysis' },
    { name: 'AI Consultation', href: '/solutions#ai-consultation' },
    { name: 'Team Collaboration', href: '/solutions#team-collaboration' },
  ],
  company: [
    { name: 'About', href: '/company' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
    { name: 'Careers', href: '/careers' },
  ],
  support: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API', href: '/api' },
    { name: 'Status', href: '/status' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Security', href: '/security' },
  ],
  social: [
    {
      name: 'X',
      href: 'https://x.com/himalayasx',
      icon: SocialIconX,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/himalayasx',
      icon: SocialIconLinkedIn,
    },
  ],
}

function Navigation() {
  return (
    <nav>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 hover:text-primary-600 transition-colors">Solutions</h3>
          <ul role="list" className="mt-6 space-y-4">
            {navigation.solutions.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm leading-6 text-gray-600 transition-colors hover:text-primary-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 hover:text-primary-600 transition-colors">Company</h3>
          <ul role="list" className="mt-6 space-y-4">
            {navigation.company.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm leading-6 text-gray-600 transition-colors hover:text-primary-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 hover:text-primary-600 transition-colors">Support</h3>
          <ul role="list" className="mt-6 space-y-4">
            {navigation.support.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm leading-6 text-gray-600 transition-colors hover:text-primary-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 hover:text-primary-600 transition-colors">Legal</h3>
          <ul role="list" className="mt-6 space-y-4">
            {navigation.legal.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm leading-6 text-gray-600 transition-colors hover:text-primary-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 pb-16 sm:mt-40">
      <Container>
        <div className="mx-auto max-w-7xl overflow-hidden">
          <div className="mb-20">
            <Link href="/" title="Home" className="transition-transform hover:scale-105">
              <Logo className="h-8" />
            </Link>
          </div>
          <Navigation />
          <div className="mt-16 flex items-center justify-between border-t border-gray-900/5 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-sm leading-6 text-gray-600">
              &copy; {new Date().getFullYear()} Himalayas X. All rights reserved.
            </p>
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 transition-colors hover:text-primary-600"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
