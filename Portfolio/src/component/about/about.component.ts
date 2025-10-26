import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-about',
  imports: [HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  skills = [
    {
      category: 'Front-end',
      items: ['Angular', 'Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
      category: 'Back-end',
      items: ['Node.js', 'Express', 'Strapi', 'API REST']
    },
    {
      category: 'Outils',
      items: ['Git', 'GitHub', 'VS Code', 'Figma']
    },
    {
      category: 'Langues',
      items: ['Français (natif)', 'Anglais (B1)']
    }
  ];

  experiences = [
    {
      title: 'Développeuse Front-End',
      company: 'Orange',
      period: 'Stage de 6 mois',
      description: 'Développement d\'applications web avec Angular, collaboration en équipe agile, amélioration de l\'UX/UI'
      },
    {
      title: 'Ambassadrice Epitech',
      company: 'EPITECH',
      period: '2023 - En cours',
      description: 'Présentation de l\'école lors d\'événements, accompagnement des futurs étudiants, promotion des formations proposées par Epitech'
    }
  ];

  education = [
    {
      degree: 'Formation Développement Web',
      school: 'Epitech',
      period: '2025 - En cours',
      description: 'Formation intensive en développement web et mobile'
      },
          {
      degree: 'Formation Technique, Business et Marketing',
      school: 'Epitech Digital School',
      period: '2023 - 2025',
      description: 'Formation en techniques de développement, gestion de projets et marketing digital'
    }
  ];
}
