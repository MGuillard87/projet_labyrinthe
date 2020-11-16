// le fichier est composé de trois parties différentes

// importation du module React, pour déclarer notre composant
/*importation  depuis le paquet React, le type FunctionComponent: utilisation du destructuring
pour extraitre ce type du paquet React, au lieu de faire un React.FC
* */
import React, {useState} from 'react';
// appell du composant Labyrinthe dans le composant Cellule
import {Labyrinthe} from "./Labyrinthe";

/* un composant écris avec une fonction, on passe part une const car cela permet d'utiliser
    une fonction fléchée = avantage par rapport aux confusions avec this
    + exportation du composant afin qu'il soit utilisable dans le reste de l'application
    (mais pourquoi là?)
* */

export const Cellules = () => {
// Déclaration d'une variable de type String
    const title= "affichage des cellule du labyrinthe";


// affichage de la valeur dans le DOM virtuel grâce à JSX en utilisant la fonction return
    return (
        // affichage du composant Labyrinthe (contenu) par une boucle
        //React appelle le composant Labyrinthe avec comme props: id, name, status, checkedAt et la fonction update

      <div>
        <h1>{title}</h1>
            <Labyrinthe/>
      </div>
    )
}





