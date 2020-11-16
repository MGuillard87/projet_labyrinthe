// le fichier est composé de trois parties différentes

// importation du module React, pour déclarer notre composant
/*importation  depuis le paquet React, le type FunctionComponent: utilisation du destructuring
pour extraitre ce type du paquet React, au lieu de faire un React.FC
* */
import React from 'react';


/* un composant écris avec une fonction, on passe part une const car cela permet d'utiliser
    une fonction fléchée = avantage par rapport aux confusions avec this
    + exportation du composant afin qu'il soit utilisable dans le reste de l'application
    (mais pourquoi là?)
* */

export const SuppliersMap = () => {
// Déclaration d'une variable de type String
    const title= "Carte des fournisseurs";

// affichage de la valeur dans le DOM virtuel grâce à JSX en utilisant la fonction return
    return (
        // expression jsx qui va remplacer name par la valeur donnée
        <h1>{title}</h1>
    )
}
