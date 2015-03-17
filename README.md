AccesSlide
===========

Un framework pour réaliser des présentations accessibles en HTML5-CSS3-JS

#Structure
Les slides s'insèrent dans l'élément `main` avec des éléments `section` associés à une classe `slide`.

La première diapositive a une classe complémentaire `couv` et la dernière, une classe `end`.

On peut imbriquer des `section` dans des `section`.

##Exemple minimal de structure
    <section class="slide">
     <h2>Titre du slide</h2>
     [contenu]
    </section>
    
    <section class="slide" aria-label="titre du slide">
     [contenu]
    </section>
Attention : il est préférable de respecter un passage à la ligne pour le premier titre h2 d'une section.

#Masquer des éléments
Tous les éléments html d'un slide peuvent être masqués via la classe `Cmasque`, ils apparaitront sur l'action "diapo suivante". 

#Navigation
La barre de navigation contient successivement :

- un bouton précédent
- une liste de sélection pour atteindre une diapo par son index
- un bouton suivant
- un sommaire pour atteindre une diapo via son titre
- l'index (n° de la diapo courante et total des diapos)
- un bouton de configuration

##Navigation clavier
- `Espace`, `Flèche droite`,`Clic` : Diapo suivante
- `Flèche gauche`, `SHIFT + Espace` : Diapo précédente
- `Début` : Première diapo
- `Fin` : Dernière diapo
- `ALT` + `0` (zéro) : Sommaire

##Navigation avec une télécommande
Le diaporama se pilote avec une télécommande via les équivalents de touches `Page suivante` et `Page précédente`.

#Effets
Les effets disponibles se paramètrent via le panneau de configuration.

Pour créer un effet :

1 créer une classe CSS
2 créer une entrée dans l'objet `config` du fichier AccesSlide.js (voir l'exemple dans le fichier)
3 créer une entrée dans le fichier de lang pour l'étiquette de l'effet. Attention l'entrée doit avoir le même nom que celle créé dans l'objet `config

Vous pouvez animer un volet qui se superpose au slide ou le slide lui-même.

#CSS
2 fichiers CSS sont nécessaires :

- `css/style.css` : les propriétés générales du diaporama
- `css/themes/default.css` : le thème

Plusieurs thèmes sont livrés avec AccessSlide dans le dossier `css/themes`.

    <!-- Theme stylesheet -->
    <link rel="stylesheet" href="css/themes/default.css" type="text/css" media="all" />

##Post-processeur
Le CSS est généré à l'aide du post-processeur myth.

Les fichiers sources sont placés dans le dossier `css/sources` et dans `css/sources/themes` pour les thèmes

Les fichiers sont compilés dans le dossier `css/themes` pour les thèmes, et `css/` pour la mise en forme générale.

Tous les fichiers sont également proposés dans une version non minifiée pour vous permettre de modifier ou créer votre propre css sans passer par un post-processeur.

##Automatisation avec Grunt
Une configuration miniale grunt est à votre disposition également pour la compilation des css. Les 4 modules configurés dans Grutfile.js :

- grunt-myth : pour compiler au format CSS
- grunt-contrib-cssmin : pour minifier le css
- grunt-combine-media-queries : pour regrouper les media-queries
- grunt-contrib-watch

##Vue responsive
La mise en forme est réalisée pour s'adapter à la taille de la police et la taille de la fenêtre.

##Impression
Une feuille `print.css` permet une mise en page lors de l'impression via le navigateur (`Ctrl` + `p`)

L'impression embarque certains des styles du thème choisi (propriété `all` du css du thème)

Pour qu'un élément, ou une section entière n'apparaisse pas lors de l'impression, ajoutez une classe `noprint`

    <section class="slide noprint">
     [contenu]
    </section>

#Personnaliser l'interface
Les icônes (barre d'outils, configuration ...) sont générées grâce à <a href="http://fortawesome.github.io/Font-Awesome/">fontawesome</a>.

Le fallback en cas de non chargement de la police est permit grâce au script <a href="https://github.com/filamentgroup/a-font-garde">a font garde</a> de Filament Group. Ce sont les images du dossier `img` qui prennent le relais en cas de non chargement.

#Adaptation accessibilité
Ces paramètres sont configurables via le panneau configuration. Les paramètres sont persistants (utilisation de cookies ou de localStorage si possible). Un bouton défaut permet de revenir à la configuration par défaut.

- **N° de diapo** : Vocalise les numéros des diapos
- **Textes masqués**:  Emet un Bip lorsqu'un texte masqué est affiché
- **Diapo** Emet un Bip à l'affichage d'une diapo
- **Diapo début** : Emet un Bip lors de l'affichage de la première diapo
- **Diapo fin** : Emet un Bip lors de l'affichage de la dernière diapo
- **Titre** : Vocalise le titre de la diapo courante
- **Titre fenêtre** : Met à jour le titre de la fenêtre lors de l'affichage de la diapo courante
- **Bouton suivant** : Donne le focus sur le bouton "suivant" lors du chargement du diaporama
- **Clic** : Supprime le clic pour aller à la diapo suivante.

#Autres paramètres
- **Sommaire** : Choisir le comportement du sommaire (modale ou non-modale). Dans le cas d'un sommaire non-modale, les diapos sont redimensionnées.
- **Balayage** : Permet de choisir le mode (JavaScript ou CSS3) pour les animations du volet de balayage
- **Mode plan** : Affiche le diaporama en mode linéaire

Ces paramètres se configurent via le panneau configuration.

#Javascript
Vous pouvez utiliser vos propres scripts dans la page html ou via le fichier `slide.js`

#Mode plan
Le mode plan vous permet d'afficher le diaporama sous la forme d'un contenu linéarisé, ce qui permet un travail plus rapide pour la vérification et la préparation des contenus

Le mode plan s'active via le panneau de configuration, des repères et le numéro des diapos indiquent le contenu de chaque diapo.

Le mode plan conserve les styles CSS des diapos mais pas les effets.

#Internationalisation

Les éléments de l'interface peuvent être traduits via un fichier de langue (dossier `lang`).

Pour utiliser un fichier de langue, modifiez la référence au fichier dans le head de la page, par exemple `<script type="text/javascript" src="lang/lang_fr.js"></script>` pour le fichier français.

##Produire un fichier de langue
- Ouvrez le fichier de langue avec un éditeur de texte
- Modifier les étiquettes `label` des boutons, les alternatives `alt` d'images, les intitulés `value` des options de la liste des effets, les titres `title` de boutons ou de fenêtres, les messages help d'aide.
- Enregistrer votre fichier de langue en utilisant le nom de fichier `lang_[code de langue].js`. 

Une démonstration est visible sur le site dédié : <a href="htpp://www.accesslide.net">accesslide.net</a>