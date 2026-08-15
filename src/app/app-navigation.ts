export interface NavigationItem {
  text: string;
  path: string;
  icon: string;
}

export const navigation: NavigationItem[] = [
  {
    text: 'Home',
    path: '/home',
    icon: 'fas fa-home',
  },
  {
    text: 'Work',
    path: '/work',
    icon: 'fas fa-layer-group',
  },
  {
    text: 'Impact System',
    path: '/impact',
    icon: 'fas fa-diagram-project',
  },
  {
    text: 'Agentic Delivery',
    path: '/agentic',
    icon: 'fas fa-wand-magic-sparkles',
  },
  {
    text: 'Background',
    path: '/background',
    icon: 'fas fa-timeline',
  },
];
