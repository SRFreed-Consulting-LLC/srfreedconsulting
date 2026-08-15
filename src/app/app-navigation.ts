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
    text: 'Skills',
    path: '/skills',
    icon: 'fas fa-microchip',
  },
  {
    text: 'Experience',
    path: '/experience',
    icon: 'fas fa-keyboard',
  },
  {
    text: 'Certifications',
    path: '/certifications',
    icon: 'fas fa-code',
  }
];
