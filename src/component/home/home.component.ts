import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [HeaderComponent, RouterLink]
})
export class HomeComponent {
  title: string = 'Bienvenue sur mon Portfolio';
  name: string = 'Anaëlle Faure';
  role: string = 'Étudiante en Développement Web à Epitech';
  description: string = `
    Passionnée par le développement front-end, j'ai acquis une solide expérience
    sur différents frameworks et technologies modernes. J'ai pu approfondir mes
    compétences lors d'un stage de 6 mois en tant que développeuse front-end chez Orange.
  `;

  skills = [
    { name: 'Angular', level: 65 },
    { name: 'Vue.js', level: 70 },
    { name: 'TypeScript', level: 75 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 }
  ];

  featuredProjects = [
    {
      name: 'Job Board',
      description: 'Plateforme de recherche d\'emploi pour développeurs',
      technologies: ['React.js', 'Docker', 'MySQL', 'Express.js', 'API REST', 'CSS3', 'JavaScript'],
      link: '/projects'
    },
    {
      name: 'SmartCity',
      description: 'Application de localisation des parcs avec données enrichies',
      technologies: ['React Native', 'Firebase', 'TypeScript', 'API REST'],
      link: '/projects'
    }
  ];
}

