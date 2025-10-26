import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

@Component({
  selector: 'app-projects',
  imports: [HeaderComponent, CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Job Board',
      subtitle: 'Site d\'annonce d\'emploi',
      description: 'Plateforme de recherche d\'emploi avec gestion des offres et des candidatures',
      longDescription: `
        Job Board est une application web conçue pour faciliter la recherche d'emploi. Les utilisateurs peuvent parcourir
        les offres d'emploi, postuler directement via la plateforme, et gérer leurs candidatures.
        Les recruteurs ont accès à un tableau de bord pour publier des offres, trier les candidatures,
        et communiquer avec les candidats. L'application est développée avec React.js pour le front-end
        et Express.js pour le back-end, offrant une expérience utilisateur fluide et réactive.
      `,
      technologies: ['React.js', 'Express.js', 'API REST', 'CSS3', 'JavaScript'],
      features: [
        'Gestion des offres d\'emploi',
        'Système de gestion des candidatures',
        'Interface d\'administration',
        'Notifications par email',
        'Design responsive'
      ],
      githubUrl: 'https://github.com/Anaelle2028/Job-Board',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'SmartCity',
      subtitle: 'Application de localisation des parcs',
      description: 'Application web de cartographie interactive pour localiser les parcs urbains',
      longDescription: `
        SmartCity est une application web permettant de localiser facilement les parcs et espaces verts
        dans les zones urbaines. Elle affiche des informations détaillées sur chaque parc, incluant
        l'accessibilité pour les chiens, la présence de toilettes publiques, les aires de jeux, et plus encore.
        L'application utilise des APIs cartographiques pour offrir une expérience utilisateur fluide.
      `,
      technologies: ['React Native', 'Firebase', 'TypeScript', 'API REST'],
      features: [
        'Carte interactive avec géolocalisation',
        'Filtres par équipements (toilettes, aires de jeux, etc.)',
        'Informations détaillées sur chaque parc',
        'Recherche par adresse ou nom',
        'Interface responsive et accessible'
      ],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Portfolio Personnel',
      subtitle: 'Site vitrine professionnel',
      description: 'Portfolio moderne développé avec Angular et Server-Side Rendering',
      longDescription: `
        Ce portfolio a été conçu pour présenter mes compétences et projets de manière professionnelle.
        Développé avec Angular 19 et SSR (Server-Side Rendering) pour des performances optimales et un
        meilleur référencement. L'application inclut des animations fluides, un design responsive, et
        un formulaire de contact fonctionnel.
      `,
      technologies: ['Angular 19', 'TypeScript', 'Reactive Forms', 'CSS3'],
      features: [
        'Server-Side Rendering pour le SEO',
        'Design moderne avec animations',
        'Formulaire de contact avec validation',
        'Navigation fluide avec routing',
        'Totalement responsive'
      ],
      githubUrl: 'https://github.com/Anaelle2028/Portfolio_A.FAURE',
      liveUrl: '#'
    }
  ];

  selectedProject: Project | null = null;

  selectProject(project: Project) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }
}

