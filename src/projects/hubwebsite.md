# Contexte

Dans l'école où j'ai réalisé mes études, une association nommée HUB était mise en place pour les étudiants.

Cette association a pour but d'organiser des activités pour les étudiants sous forme de conférences ou bien d'ateliers.  
Ces conférences peuvent être animées par des étudiants où bien par des professionnels extérieurs.

## Les coordinateurs HUB

Cette association est dirigée par quatre étudiants sélectionnés sur candidatures.  
Leur but est de mettre en place les activités en les organisant avec les étudiants.  
Ces étudiants sont chargés des communications avec les entreprises pour organiser diverses activités pouvant aller de simples conférences à des _battle dev_.  

Les étudiants souhaitant organiser une activité peuvent donc venir voir l'un des quatre coordinateurs HUB afin de mettre en place son activité et d'informer les autres étudiants pour qu'ils participent à l'activité.  
Les coordinateurs vont ensuite noter les présences des étudiants.

Chaque participation et organisation d'une activité quelconque soit-elle valorise les étudiants pour leur passage en année supérieure.

## Les problèmes

Malheureusement, il est encore compliqué et long d'organiser une activité.  
Il est impossible de suivre le nombre d'activités auxquelles un étudiant a participé.

# La solution

Nous avons donc imaginé un site web permettant aux étudiants d'accéder au suivi des activités auxquelles ils ont participé.  
Pour faciliter le rapport des présences, il est également possible de renseigner les présences des étudiants.

## Les technologies

### Front

Le front de ce site web est développé en [ReactJs](https://fr.reactjs.org/).

### Back

L'API Rest est réalisé avec le framework [ExpressJs](https://expressjs.com/fr/).

### Infra

Le démarrage du site web est complètement automatisé par des scripts bash, que ce soit pour une version de développement où de production.

### DB

Pour stocker les données, le back utilise une base de données [MongoDB](https://www.mongodb.com/docs/drivers/node/current/).

# L'avancement du projet

Actuellement, le project n'est qu'au stade de l'idéation.

La première version des visuels est terminée.

L'infrastructure complète avec des versions de développement et de production est fonctionnelles et scripté.  
Des conteneurs [Docker](https://www.docker.com/) sont utilisés afin d'assurer la disponibilité des services.
