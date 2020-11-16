// le fichier est composé de trois parties différentes

// importation du module React, pour déclarer notre composant
/*importation  depuis le paquet React, le type FunctionComponent: utilisation du destructuring
pour extraitre ce type du paquet React, au lieu de faire un React.FC
* */
import React, {useState} from 'react';
// appell du composant Supplier dans le composant SuppliersList
import {Supplier} from "./Supplier";

/* un composant écris avec une fonction, on passe part une const car cela permet d'utiliser
    une fonction fléchée = avantage par rapport aux confusions avec this
    + exportation du composant afin qu'il soit utilisable dans le reste de l'application
    (mais pourquoi là?)
* */

export const SuppliersList = () => {
// Déclaration d'une variable de type String
    const title= "Liste des fournisseurs";

    const [data, setData] = useState({
        suppliers: [
            {
                id: 1,
                name: "Fournisseur 1",
                status: true,
                checkedAt: new Date(),
            },
            {
                id: 2,
                name: "Fournisseur 2",
                status: false,
                checkedAt: new Date(),
            },
        ],
    })

    function updatestatus(id) {
        const updatedSuppliers = data.suppliers.map(supplier => {
            if (supplier.id !== id ) return supplier
            return {
                ...supplier,
                status: !supplier.status,
                checkedAt: new Date(),
            }
        } )
        setData({
            suppliers: updatedSuppliers
        })


    }



// affichage de la valeur dans le DOM virtuel grâce à JSX en utilisant la fonction return
    return (
        // affichage du composant Supplier (contenu) par une boucle
        //React appelle le composant Supplier avec comme props: id, name, status, checkedAt et la fonction update

      <div>
        <h1>{title}</h1>

        {data.suppliers.map(supplier => (
            <Supplier key={supplier.id} id={supplier.id} name={supplier.name} status={supplier.status} checkedAt={supplier.checkedAt} update={updatestatus} />))}
      </div>
    )
}


/*      autre affichage possible (merci Fanny)
        <Supplier {...data}/>
*/




