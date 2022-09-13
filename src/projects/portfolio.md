# Le projet

Ce projet est tout simplement le site web sur lequel vous naviguez actuellement.

Ce site vous permet de vous renseigner sur mes compétences et mes connaissances.  
Il contient tout d'abord mon CV ainsi que toutes les informations nécessaires pour me contacter.

Vous avez également accès à mon portfolio, que vous consultez actuellement et qui contient une description détaillée de différents projets que j'ai réalisés.  
Dans le même esprit, vous pouvez consulter les langages et technologies que je maîtrise avec les projets associés.

## Les technologies utilisées

![VueJs](/images/portfolio/VuejsLogo.png)

Le site web est codé en [VueJs 3](https://vuejs.org/guide/introduction.html), une technologie développée par **Even You** et notamment utilisée par [Adobe](https://www.adobe.com/fr/) et [Gitlab](https://about.gitlab.com/).

Afin de naviguer à travers les différentes pages du site web, j'ai utilisé [Vue Router](https://router.vuejs.org/).  
Le site est composé de routes statiques (_page d'accueil, cv_) et de [routes dynamiques](https://router.vuejs.org/guide/essentials/dynamic-matching.html) avec des paramètres variables dans l'URL.

La librairie [markdown-it](https://www.npmjs.com/package/markdown-it-vue) est utilisée afin de rendre le contenu rédigé en Markdown pour la description des projets.

## Mise en place et hébergement

Le site web est hébergé sur [Github Pages](https://pages.github.com/).  
Cette technologie permet d'héberger un front web statique gratuitement tout en ayant le support et la maintenance pris en charge par Github.  
Il suffit de créer une version de production statique sur une branche et d'indiquer à Github de lancer la page depuis cette branche.

Par défaut, l'URL sur laquelle est exposé le site est fournie par Github de la manière suivante _https://{user}.github.io/{repository}_.  
Cependant, il est possible d'utiliser un nom de domaine personnalisé comme URL pour le site.  
Il suffit donc de lier un nom de domaine (_www.hervaud.fr_) à la Github page sur laquelle le site est hébergé.
