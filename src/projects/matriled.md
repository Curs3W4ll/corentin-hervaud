# Les technologies électroniques utilisées

### Arduino

Les [Arduinos](https://www.arduino.cc/) sont des micro-contrôleurs de prototypage et de loisir pour créer des objets électroniques interactifs.  
Il existe plusieurs modèles, tout petit pour les systèmes embarqués miniatures ou bien des plus gros pour plus d'espace mémoire et de performances.

Celui utilisé pour ce projet est un [Arduino Uno](https://store.arduino.cc/products/arduino-uno-rev3).

![Arduino Uno](/images/matriled/ArduinoUno.png)

### Matrice LED Arduino

L'afficheur LED Arduino possède 256 LEDs.8 LEDs de hauteur et 32 LEDs de largeur.

![Matrice LED](/images/matriled/LedMatrice.png)

### Capteur bluetooth

Pour se connecter au bluetooth du téléphone, un [module Arduino HC-05](https://www.aranacorp.com/fr/votre-arduino-communique-avec-le-module-hc-05/) est utilisé.

![Capteur bluetooth](/images/matriled/CapteurBluetooth.png)

# Le projet

Le but de ce projet est de réaliser une borne LED contrôlée par bluetooth avec une application mobile.

### Le produit

Le produit en lui-même est une petite boîte (réalisée en impression 3D) qui contient le contrôleur Arduino relié à un afficheur LED, un bouton pour éteindre et allumer le système et le capteur bluetooth.

### L'application mobile

L'application est constituée de trois pages.

#### La page d'acceuil

La page d'accueil contient la liste de vos appareils.  
Pour chaque appareil, il est possible de l'allumer ou l'éteindre, de modifier la luminosité et d'accéder à plus de détails sur l'appareil.  
Au niveau du contrôle de l'affichage, il est possible d'afficher du texte en choisissant s'il doit défiler ou non ainsi que la vitesse du défilement.

Il est possible de choisir plusieurs modes d'affichage pour chaque node de l'afficheur.  
On peut choisir d'y afficher du texte, des animations ou bien des schémas personnalisés.

![Page d'acceuil](/images/matriled/PageAccueil.png)

#### La page d'ajout

La page d'ajout permet de lier un nouvel appareil au téléphone.

Il faut maintenir le bouton du produit et dès lors que les LEDs clignotent, il est possible de se connecter par bluetooth au module Arduino.  
Il suffit ensuite de renommer l'appareil pour pouvoir l'identifier.

#### La page de paramètres

![Page de parametres](/images/matriled/PageParametres.png)

Il est possible de changer la langue de l'application, à l'heure actuelle, seulement deux langues sont disponibles mais il est possible d'en rajouter.

Il y a également un bouton pour changer de thème (_en haut à droite_), clair ou sombre.

On peut aussi modifier la couleur du thème d'accentuation de l'application qui permet de modifier la couleur des icônes notamment.

#### Les langages utilisés

##### L'embarqué

Le système embarqué qui contrôle l'afficheur LED est développé dans le langage conseillé par Arduino, à savoir un mélange des langages [C](https://fr.wikipedia.org/wiki/C_(langage)) et [C++](https://fr.wikipedia.org/wiki/C%2B%2B).  
Cette technologie est structurée spécifiquement pour les systèmes embarqués.

Le code est structuré de la manière suivante:

```cpp
void setup() {
##
# Configuration des différents modules
##
}

void loop() {
##
# Code fonctionnel qui est exécuté en boucle
##
}
```

##### L'application mobile

L'application est développée en [React Native](https://reactnative.dev/), un langage créé par Facebook pour développer des applications mobiles utilisant des composants natifs (android, ios, windows) tout en n'ayant qu'un seul code.

À l'aide de ce langage, l'application est composée de plusieurs composants que j'ai réalisé moi-même, ainsi que de l'utilisation des technologies de connexion bluetooth.  
L'application utilise également un [Store Redux](https://redux.js.org/api/store) pour stocker les données.
