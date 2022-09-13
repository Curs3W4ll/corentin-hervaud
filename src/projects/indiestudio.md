# Le projet

Ce projet s'est déroulé dans le cadre de ma seconde année d'étude à [Epitech](https://www.epitech.eu/).

Le but était de réaliser un jeu vidéo complet, reproduisant le jeu [Neo Bomberman](https://fr.wikipedia.org/wiki/Neo_Bomberman).  

## Bomberman

![Neo Bomberman](/images/indiestudio/NeoBombermanLogo.png)

Le jeu Bomberman, créé dans les années 80, est un jeu d'arcade pouvant se jouer jusqu'à quatre joueurs.

Les joueurs sont positionnés dans les quatre coins d'une carte rectangulaire composée de murs et de boîtes destructibles.  
Chaque joueur possède des bombes qu'il peut poser à proximité des boîtes pour les détruire.  
Il peut ainsi accéder à de nouvelles parties de la carte et essayer de tuer les autres joueurs.

Le dernier joueur en vie gagne la partie.

## Les technologies

Dans le cadre de mon projet, nous devions réaliser le jeu dans le langage [C++](https://fr.wikipedia.org/wiki/C%2B%2B).  
Ce jeu utilisant des graphismes en 3D, il était obligatoire d'utiliser la librairie [Raylib](https://www.raylib.com/).  
Il était impératif de réaliser notre propre Game Engine et créer notre jeu en l'utilisant, il était bien sûr interdit d'utiliser un Game Engine existant.

### Game Engine

Dans un délai de deux mois, par groupes de 5, nous devions réaliser le jeu, mon groupe et moi avons décidé d'utiliser un [ECS](https://austinmorlan.com/posts/entity_component_system/).  
Un ECS, ou _Entity Component System_ est un concept utilisé pour réaliser des jeux vidéos.  
Le principe est de considérer chaque élément du jeu (carte, items, joueurs, ennemis) comme une _entité_.  
Pour qu'une _entité_ puisse avoir des caractéristiques, on lui associe des _components_ (position(x, y, z), transform(x, y, z), bounds(a, b, c, x, y, z), ...).  
Ces _components_ ne sont que des caractéristiques, ils n'agissent pas sur les entités.  

#### Les systèmes

Les _systèmes_ permettent de modifier les caractéristiques (ou _components_) des _entités_.  
Lorsque certaines conditions sont respectées, les _systèmes_ peuvent modifier les _components_ d'une ou plusieurs _entités_.  
Pour identifier sur quelles entités les systèmes peuvent et doivent agir, il doit être possible de récupérer quels _components_ une _entité_ possède.

Pour cela, notre ECS permet de _signer_ les _entités_ et les _systèmes_ en fonction des _components_.  
De manière binaire, chaque component sera assigné à un bit unique, par exemple, le component _position_ sera le bit le plus à droite, le component _transform_ le prochain, etc...  
Ce concept permet ainsi de composer des signatures pour chaque entité et pour chaque système.

Ainsi les systèmes agiront sur les entités qui ont la même signature qu'eux.

## Notre jeu

![Écran d'accueil](/images/indiestudio/HomeScreen.png)

### Modes de jeu

Il est possible de jouer jusqu'à deux joueurs sur le même ordinateur.  
Pour toujours avoir quatre joueurs dans la partie, des IAs jouent contre vous.

### Power-ups

Pour faire avancer le jeu, des bonus apparaissent une fois les caisses détruites.

Il existe quatre bonus:
- Une bombe de plus
- Explosion des bombes plus large
- Une vie de plus
- Plus de vitesse

![Bonus](/images/indiestudio/Bonus.png)

### Cartes

Il est possible de choisir plusieurs cartes avec plusieurs chartes graphiques.

![Cartes](/images/indiestudio/Maps.png)

Il est possible de créer une infinité d'aspects graphiques et de carte différentes.  
Chaque carte est décrite par un fichier de configuration **json** contenant les fichiers graphiques, les sons et la carte en elle-même.  
Voici comme exemple le fichier de configuration de la carte **Pacman**.

`./.bomberman/Pacman.json`
```json
{
    "referenceModel": "./.bomberman/maps/Pacman/model/Wall.iqm",
    "player": {
        "model": "./.bomberman/maps/Pacman/model/Bomberman.iqm",
        "aiTexture": "./.bomberman/maps/Pacman/texture/BombermanRed.png",
        "textures": [
            "./.bomberman/maps/Pacman/texture/Bomberman.png",
            "./.bomberman/maps/Pacman/texture/BombermanBlue.png",
            "./.bomberman/maps/Pacman/texture/BombermanDark.png",
            "./.bomberman/maps/Pacman/texture/BombermanGreen.png",
            "./.bomberman/maps/Pacman/texture/BombermanOrange.png",
            "./.bomberman/maps/Pacman/texture/BombermanPink.png",
            "./.bomberman/maps/Pacman/texture/BombermanYellow.png"
        ],
        "animation": {
            "path": "./.bomberman/maps/Pacman/model/Bomberman.iqm",
            "fps": 60
        },
        "speed": 4,
        "sounds": {
            "takingDamage": "./.bomberman/maps/Pacman/sound/TakeDamage.mp3",
            "die": "./.bomberman/maps/Pacman/sound/Die.mp3",
            "dropBomb": "./.bomberman/maps/Pacman/sound/DropBomb.mp3",
            "noMoreBomb": "./.bomberman/maps/Pacman/sound/NoMoreBomb.mp3"
        }
    },
    "bomb": {
        "model": "./.bomberman/maps/Pacman/model/Cherry.iqm",
        "texture": "./.bomberman/maps/Pacman/texture/Cherry.png",
        "animation": {
            "path": "./.bomberman/maps/Pacman/model/Cherry.iqm",
            "fps": 60
        },
        "sound": "./.bomberman/maps/Pacman/sound/BombExplose.mp3",
        "explosionModel": "./.bomberman/maps/Pacman/model/Fire.iqm",
        "explosionTexture": "./.bomberman/maps/Pacman/texture/Fire.png",
        "explosionAnimation": {
            "path": "./.bomberman/maps/Pacman/model/Fire.iqm",
            "fps": 60
        },
        "explosionSound": "./.bomberman/maps/Pacman/sound/Explosion.mp3"
    },
    "power-ups": {
        "life": {
            "model": "./.bomberman/maps/Pacman/model/Heart.iqm",
            "texture": "./.bomberman/maps/Pacman/texture/Heart.png",
            "animation": {
                "path": "./.bomberman/maps/Pacman/model/Heart.iqm",
                "fps": 60
            },
            "sound": "./.bomberman/maps/Pacman/sound/LifePowerUp.mp3"
        },
        "bombRange": {
            "model": "./.bomberman/maps/Pacman/model/FireBonus.iqm",
            "texture": "./.bomberman/maps/Pacman/texture/FireBonus.png",
            "animation": {
                "path": "./.bomberman/maps/Pacman/model/FireBonus.iqm",
                "fps": 60
            },
            "sound": "./.bomberman/maps/Pacman/sound/BombRangePowerUp.mp3"
        },
        "bombNumber": {
            "model": "./.bomberman/maps/Pacman/model/BombBonus.iqm",
            "texture": "./.bomberman/maps/Pacman/texture/BombBonus.png",
            "animation": {
                "path": "./.bomberman/maps/Pacman/model/BombBonus.iqm",
                "fps": 60
            },
            "sound": "./.bomberman/maps/Pacman/sound/BombNumberPowerUp.mp3"
        },
        "speed": {
            "model": "./.bomberman/maps/Pacman/model/SpeedBonus.iqm",
            "texture": "./.bomberman/maps/Pacman/texture/SpeedBonus.png",
            "animation": {
                "path": "./.bomberman/maps/Pacman/model/SpeedBonus.iqm",
                "fps": 60
            },
            "sound": "./.bomberman/maps/Pacman/sound/SpeedPowerUp.mp3"
        }
    },
    "identifiers": {
        "walls": [
            {
                "identifier": "#",
                "model": "./.bomberman/maps/Pacman/model/Wall.iqm",
                "texture": "./.bomberman/maps/Pacman/texture/Wall.png",
                "groundModel": "./.bomberman/maps/Pacman/model/Ground.iqm",
                "groundTexture": "./.bomberman/maps/Pacman/texture/Ground.png"
            }
        ],
        "grounds": [
            {
                "identifier": ".",
                "model": "./.bomberman/maps/Pacman/model/Ground.iqm",
                "texture": "./.bomberman/maps/Pacman/texture/Ground.png"
            }
        ],
        "boxes": [
            {
                "identifier": "R",
                "model": "./.bomberman/maps/Pacman/model/Ghost.iqm",
                "texture": "./.bomberman/maps/Pacman/texture/GhostRed.png",
                "groundModel": "./.bomberman/maps/Pacman/model/Ground.iqm",
                "groundTexture": "./.bomberman/maps/Pacman/texture/Ground.png"
            },
            {
                "identifier": "B",
                "model": "./.bomberman/maps/Pacman/model/Ghost.iqm",
                "texture": "./.bomberman/maps/Pacman/texture/GhostBlue.png",
                "groundModel": "./.bomberman/maps/Pacman/model/Ground.iqm",
                "groundTexture": "./.bomberman/maps/Pacman/texture/Ground.png"
            },
            {
                "identifier": "Y",
                "model": "./.bomberman/maps/Pacman/model/Ghost.iqm",
                "texture": "./.bomberman/maps/Pacman/texture/GhostYellow.png",
                "groundModel": "./.bomberman/maps/Pacman/model/Ground.iqm",
                "groundTexture": "./.bomberman/maps/Pacman/texture/Ground.png"
            },
            {
                "identifier": "O",
                "model": "./.bomberman/maps/Pacman/model/Ghost.iqm",
                "texture": "./.bomberman/maps/Pacman/texture/GhostOrange.png",
                "groundModel": "./.bomberman/maps/Pacman/model/Ground.iqm",
                "groundTexture": "./.bomberman/maps/Pacman/texture/Ground.png"
            }
        ],
        "players": [
            {
                "identifier": "1",
                "groundModel": "./.bomberman/maps/Pacman/model/Ground.iqm",
                "groundTexture": "./.bomberman/maps/Pacman/texture/Ground.png"
            },
            {
                "identifier": "2",
                "groundModel": "./.bomberman/maps/Pacman/model/Ground.iqm",
                "groundTexture": "./.bomberman/maps/Pacman/texture/Ground.png"
            },
            {
                "identifier": "3",
                "groundModel": "./.bomberman/maps/Pacman/model/Ground.iqm",
                "groundTexture": "./.bomberman/maps/Pacman/texture/Ground.png"
            },
            {
                "identifier": "4",
                "groundModel": "./.bomberman/maps/Pacman/model/Ground.iqm",
                "groundTexture": "./.bomberman/maps/Pacman/texture/Ground.png"
            }
        ]
    },
    "map": "./.bomberman/maps/Pacman/pacman_map.txt"
}
```

`./.bomberman/Pacman/pacman_map.txt`
```
###############
#2.OB.OY.BB..1#
#.#R#Y#.#R#.#.#
#.YOBR.O..YB.R#
#O#.#.#Y#R#O#O#
#RRY..O..RBB.Y#
#B#Y#B#.#.#Y#R#
#O.RO.Y.RO..OB#
#Y#B#.#O#B#.#.#
#4..ROBBORY..3#
###############
```

### Les fonctinonalités à venir

Nous sommes actuellement en train de développer le mode en ligne du jeu.  
Il sera possible de jouer jusqu'à quatre joueurs sur des réseaux différents.  
Le serveur devra être démarré par l'un des utilisateurs.

Sur les versions de développement actuelles, il est possible de se connecter au serveur et de jouer.  
Cependant, les informations transités par le serveur arrive trop tard, avec en moyenne 50ms de ping, les déplacements sont très saccadés et pas du tout fluide ni précis.

Après analyse du problème (qui était simplement que l'on n'avait aucunes compétences dans le développement de jeu en ligne), le développement d'un système d'antilag avec prédictions de déplacements est en cours de développement.
