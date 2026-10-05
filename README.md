# DoctoGreen - Réduction de l'impact écologique du service numérique de prise de rendez-vous médical
Thomas CHARPENTIER
Alexis ZOTT

## Choix du sujet
Pour nous, le droit d’accès à la santé est un droit fondamental. La problématique des “déserts médicaux” ne cessent d’augmenter en France rendant l’accès à un professionnel de santé beaucoup plus compliqué. Selon nous, il est d’une grande importance d’avoir une facilité de pouvoir prendre rendez-vous avec un professionnel de santé proche et habilité à prendre en charge nos soucis médicaux.

En moyenne, 17 millions de rendez-vous sont pris par mois sur la plateforme principale de rendez-vous médicaux Doctolib. (Source : Doctolib)

## Utilité sociale
A une époque où la situation médicale est de plus en plus tendue et où il y a des pénurie de médecin, les aider à optimiser leur temps pour qu’un maximum de patient puissent être soigné est primordial. La santé est un sujet qui concerne tout le monde, toutes les zones géographiques et toutes les tranches d’âges, c’est donc un enjeux très important.

Les applications de prises de rendez-vous médical permettent également aux patients d’avoir une réduction de stress (anxiété des appels téléphoniques par exemple), de pouvoir s’organiser plus efficacement en pré visualisant et choisissant eux-mêmes les créneau disponible. C’est un gain de temps précieux pour les deux parties.

## Effets de la numérisation
L’effet de la numérisation de la prise de rendez-vous médicaux a entraîné une substitution partielle du contact humain entre les secrétariats médicaux et les patients, réduisant les déplacements des patients et les communications téléphoniques. 

Cette numérisation a permis d’accéder en tout temps à la possibilité de prendre rendez-vous et d’accéder  à une cartographie de l’ensemble des professionnels de santé aux alentours. Cependant, cette diminution du contact avec les secrétariats médicaux a des conséquences, dans un premier temps, il y a les personnes qui sont néophytes ou qui n’ont pas accès au numérique auront beaucoup plus de difficulté à prendre rendez-vous, dans un second temps, le personnel des secrétariats médicaux étaient formées à qualifier l’urgence des situations des rendez-vous, ce que l’algorithme de Doctolib n’est pas en capacité de faire.


L’application la plus populaire en France estime avoir 17 millions de rendez-vous pris en ligne par mois. Malgré la facilitation de la prise de rendez-vous, il n’y a pas eu d’effet rebond car il y a un plafond qui correspond au nombre de médecins, qui stagne voire décroît. La plateforme à permis d’optimiser les plannings, remplir les annulations et la réduction de la friction de la prise de rendez-vous (prendre rendez-vous quand on veux, ou on veux, pour le motifs qu’on veut.

D’un côté les plateformes de rendez-vous médical ont permis de réduire les déplacements superflues comme pour la prise de rendez-vous, de réduire la consommation de papier et d'encre grâce à la dématérialisation. Mais de l’autre côté, tout cela nécessite maintenant des serveurs, l’utilisation de datacenters pour stocker les données, une augmentation de la consommation électrique et si on remonte la chaîne cela nécessite l'extraction de métaux rares et la fabrication de composants électroniques pour les terminaux utilisés.

## Scénarios d’usage et impacts

Nous faisons l’hypothèse que l’application peut être consultée à n’importe quel moment de la journée.
## Scénario : “Consulter un médecin généraliste”

- Le patient se rend sur la page de son médecin traitant généraliste (donc sans passer par un moteur de recherche).
- Il consulte les créneaux disponibles pour un rendez-vous, mais aucun ne lui correspond.
- Il revient à la page d’accueil.
- Il cherche un autre médecin avec le moteur de recherche.
- Il choisit un autre médecin généraliste et consulte ses créneaux.

## Scénario : “Consulter les informations d’un dentiste”

- Le patient ouvre la liste des dentistes dans sa zone
- Le patient ouvre la page d’un dentiste qui l’intéresse.
- Il consulte les informations disponibles
- Il revient sur la liste des dentistes
- Ouvre un autre profil de dentiste et consulte ses informations

## Impact de l'exécution des scénarios auprès de différents services concurrents

L'EcoIndex d'une page (de A à G) est calculé (sources : GreenIT) en fonction du positionnement de cette page parmi les pages mondiales concernant :

- le nombre de requêtes lancées,
- le poids des téléchargements,
- le nombre d'éléments du document.

Nous avons choisi de comparer l'impact des scénarios sur les services de prises de rendez-vous médicaux : Doctolib et Maiia, qui sont les deux seuls services de rendez-vous médicaux en France.

|                        **Scénario**                       	| **Service** 	| **Score** 	| **Classe** 	|                                            **Détails**                                           	|
|:---------------------------------------------------------:	|:-----------:	|:---------:	|:----------:	|:------------------------------------------------------------------------------------------------:	|
| Scénario 1 : Consulter un médecin généraliste             	| Doctolib    	| 21        	| F  🟥      	| Docteur généraliste A : 28 (E)<br>Liste docteurs : 17 (F)<br>Docteur généraliste B : 19 (F)      	|
|                                                           	| Maiia       	| 20        	| F  🟥      	| Docteur généraliste A : 14 (F)<br>Liste docteurs : 26 (E)<br>Docteur généraliste B : 21 (F)      	|
| Scénario 2 : <br>Consulter les informations d’un dentiste 	| Doctolib    	| 33        	| E  🟧      	| Liste dentiste : 33 (E)<br>Dentiste A : 60 (C)<br>Liste dentiste : 26 (E)<br>Dentiste B : 16 (F) 	|
|                                                           	| Maiia       	| 25        	| E  🟧      	| Liste dentiste : 16 (F)<br>Dentiste A : 30 (E)<br>Liste dentiste : 19 (F)<br>Dentiste B : 35 (E) 	|

Tab.1 : Mesure de l'EcoIndex moyen de services de prise de rendez-vous médicaux.

Les mesures de l'impact moyen de ces services (cf. Tab. 1) révèlent des classes EcoIndex très faibles pour les deux services (E ou F). Dans l’ensemble, on voit que Doctolib possède un meilleur score, mais ils sont relativement proches.

Leur mauvais score est dû notamment à :

- Beaucoup de domaines différents
- Beaucoup d'appels de requêtes HTTP pour différents services
- Des ressources statiques
- Une vingtaine de fichiers CSS à charger

Sur les deux sites, le cache permet de grandement améliorer le score. Pour améliorer le score sans le cache, il faut surtout optimiser le site en réduisant le nombre de requêtes HTTP pour différents services et réduire le nombre de fichiers CSS.
