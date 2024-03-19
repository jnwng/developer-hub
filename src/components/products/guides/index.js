import {
  changelogSection,
  documentationSection,
  recipesSection,
  referencesSection,
} from '@/shared/sections'
import { Hero } from './Hero'
import { Logo } from './Logo'

export const guides = {
  name: 'Guides',
  headline: 'Guides',
  description: 'Create shared wallets, split between multiple shareholders.',
  navigationMenuCatergory: 'Guides',
  path: 'guides',
  navigationMenuCatergory: '',
  logo: Logo,
  github: '',
  className: 'accent-amber',
  heroes: [{ path: '/guides', component: Hero }],
  sections: [
    {
      ...documentationSection('guides'),
      navigation: [
        {
          title: 'Introduction',
          links: [
            { title: 'Overview', href: '/hydra' },
            { title: 'Quick Start', href: '/hydra/quick-start' },
          ],
        },
        {
          title: 'Solana Guides',
          links: [
            { title: 'CLI Wallets', href: '/guides/solana-guides/cli-wallets' },
            { title: 'Quick Start', href: '/hydra/quick-start' },
          ],
        },
      ],
    },
    { ...referencesSection('hydra') },
    { ...recipesSection('hydra') },
    { ...changelogSection('hydra') },
  ],
}
