AccesSlide
===========

Un framework pour réaliser des présentations accessibles en HTML5-CSS3-JS.

# Structure

Les diapos s'insèrent dans l'élément `main` avec des éléments `section` associés à une classe `slide`.

La première diapositive a une classe complémentaire `couv`. La dernière, une classe `end`.

On peut imbriquer des `section` dans des `section`.

## Exemple minimal de structure
	<section class="slide">
	 <h2>Titre de la diapo</h2>
	 [contenu]
	</section>
	
	<section class="slide" aria-label="titre de la diapo">
	 [contenu]
	</section>

# Masquer des éléments
Tous les éléments HTML d'une diapo peuvent être masqués via la classe `Cmasque`, ils apparaîtront sur l'action « diapo suivante ». 

# Navigation
La barre de navigation contient successivement :

- un bouton précédent ;
- une liste de sélection pour atteindre une diapo par son index ;
- un bouton suivant ;
- un sommaire pour atteindre une diapo via son titre ;
- l'index (n° de la diapo courante et total des diapos) ;
- un bouton de configuration.

## Navigation clavier
- `Espace` ; `Flèche droite` ; `Clic` : Diapo suivante
- `Flèche gauche` ; `SHIFT + Espace` : Diapo précédente
- `Début` : Première diapo
- `Fin` : Dernière diapo
- `ALT` + `0` (zéro) : Sommaire

Pour passer à la diapo suivante avec <span lang="en">Jaws</span> : ignorer l'appui sur la touche suivante (`INSERT` + `3`), puis appuyer sur la barre `Espace` pour faire défiler le diaporama.
Avec NVDA, ignorer la touche suivante n'est pas nécessaire, la barre d'espace fonctionne.
				
## Navigation avec une télécommande
Le diaporama se pilote avec une télécommande via les équivalents de touches `Page suivante` et `Page précédente`.

# Effets
Les effets disponibles se paramètrent via le panneau de configuration.

Pour créer un effet :

1. créer une classe CSS, par exemple `.mon-effet` ;
2. créer une entrée dans l'objet `config` du fichier [AccesSlide.js](AccesSlide.js) (voir l'exemple dans le fichier) ;
3. créer une entrée dans le fichier de lang pour l'étiquette de l'effet. Attention l'entrée doit avoir le même nom que celle créé dans l'objet \`config.

Vous pouvez animer un volet qui se superpose à la diapo ou la diapo elle-même.

# CSS
2 fichiers CSS sont nécessaires :

- [css/style.css](css/style.css) : propriétés générales du diaporama;
- [css/themes/default.css](css/themes/default.css) : thème.

Plusieurs thèmes sont livrés avec AccesSlide dans le dossier `css/themes`.

	<!-- Theme stylesheet -->
	<link rel="stylesheet" href="css/themes/default.css" type="text/css" media="all" />

## Post-processeur
Les fichiers CSS sont générés à l'aide du post-processeur [Myth](http://www.myth.io/).

Les fichiers sources sont placés dans le dossier [css/sources/](css/sources/)  et dans [css/sources/themes](css/sources/themes) pour les thèmes.

Les fichiers sont compilés dans le dossier [css/themes](css/themes) pour les thèmes, et [css/](css/) pour la mise en forme générale.

Tous les fichiers sont également proposés dans une version non minifiée pour vous permettre de modifier ou créer vos propres feuilles CSS sans passer par un post-processeur.

## Automatisation avec Grunt
Une configuration minimale Grunt est à votre disposition également pour la compilation des fichiers css. Les 4 modules configurés dans [Gruntfile.js](Gruntfile.js) :

- grunt-myth : pour compiler au format CSS ;
- grunt-contrib-cssmin : pour minifier le css ;
- grunt-combine-media-queries : pour regrouper les media-queries ;
- grunt-contrib-watch.

## Vue responsive
La mise en forme est réalisée pour s'adapter à la taille de la police et la taille de la fenêtre.

## Impression
Une feuille [print.css](css/print.css) permet une mise en page lors de l'impression via le navigateur (`Ctrl` + `p`).

L'impression embarque certains des styles du thème choisi (propriété `all` du css du thème).

Pour qu'un élément, ou une section entière, n'apparaisse pas lors de l'impression, ajoutez une classe `noprint`.

	<section class="slide noprint">
	 [contenu]
	</section>

# Personnaliser l'interface
Les icônes (barre d'outils, configuration, etc.) sont générées grâce à <a href="http://fortawesome.github.io/Font-Awesome/">fontawesome</a>.

Le fallback en cas de non chargement de la police est permis grâce au script <a href="https://github.com/filamentgroup/a-font-garde">a font garde</a> de Filament Group. Ce sont les images du dossier [img](img/) qui prennent le relais en cas de non chargement.

Les fichiers CSS d'AccesSlide n'embarquent pas entièremment la bibliothèque <span lang="en">fontawesome</span>. Pour modifier une icône, référez-vous à <a href="http://fortawesome.github.io/Font-Awesome/icons/">la documentation <span lang="en">fontawesome</span></a> et modifiez le fichier CSS d'AccesSlide avec le code voulu.

# Adaptation accessibilité
Ces paramètres sont configurables via le panneau de configuration. Les paramètres sont persistants (utilisation de cookies ou de `localStorage` si possible). Un bouton défaut permet de revenir à la configuration par défaut.

- **N° de diapo** : Vocalise les numéros des diapos
- **Textes masqués** :  Émet un bip lorsqu'un texte masqué est affiché
- **Diapo** : Émet un bip à l'affichage d'une diapo
- **Diapo début** : Émet un bip lors de l'affichage de la première diapo
- **Diapo fin** : Émet un bip lors de l'affichage de la dernière diapo
- **Titre** : Vocalise le titre de la diapo courante
- **Titre fenêtre** : Met à jour le titre de la fenêtre lors de l'affichage de la diapo courante
- **Bouton suivant** : Donne le focus sur le bouton « suivant » lors du chargement du diaporama
- **Clic** : Désactive le clic pour aller à la diapo suivante.

# Autres paramètres
- **Sommaire** : Choisir le comportement du sommaire (modal ou non-modal). Dans le cas d'un sommaire non-modal, les diapos sont redimensionnées.
- **Balayage** : Permet de choisir le mode (JavaScript ou CSS3) pour les animations du volet de balayage.
- **Mode plan** : Affiche le diaporama en mode linéaire.

Ces paramètres se configurent via le panneau de configuration.

# Javascript
Vous pouvez utiliser vos propres scripts dans la page HTML ou via le fichier slide.js](slide.js).

# Mode plan
Le mode plan vous permet d'afficher le diaporama sous la forme d'un contenu linéarisé, ce qui permet un travail plus rapide pour la vérification et la préparation des contenus.

Le mode plan s'active via le panneau de configuration, des repères et le numéro des diapos indiquent le contenu de chaque diapo.

Le mode plan conserve les styles CSS des diapos mais pas les effets.

# Localisation

Les éléments de l'interface peuvent être traduits dans un fichier de langue (dossier [lang](lang/)).

Pour utiliser un fichier de langue, modifiez la référence au fichier dans le `head` de la page, par exemple `<script type="text/javascript" src="lang/lang_fr.js"></script>` pour le fichier français.

## Produire un fichier de langue
- Ouvrez le fichier de langue avec un éditeur de texte.
- Modifiez les étiquettes `label` des boutons, les alternatives `alt` d'images, les intitulés `value` des options de la liste des effets, les titres `title` de boutons ou de fenêtres et les messages help d'aide.
- Enregistrez votre fichier de langue en utilisant le nom de fichier `lang_[code de langue].js`. 

Une démonstration est visible sur le site dédié : www.accesslide.net