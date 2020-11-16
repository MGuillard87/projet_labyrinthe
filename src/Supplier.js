import React, { useState } from 'react';


export function Supplier(props) {
    // Déclare une nouvelle variable d'état, que l'on va appeler « count »
    // const [data] = React.useState({
    //     name: 'Mon fournisseur',
    //     status: true, // est ce qu'il y a du stock
    //     checkedAt: new Date() // date de la dernière mise à jour du stock
    // })
    console.log(props);
    //Ensuite, le composant Supplier retournera ces éléments pour résultat
    return (
        <div>
            <h1>Nom du fournisseur: {props.name}</h1>
            <h3>Stock: {props.status? "Il y a du stock":"Il n'y a pas de stock"}</h3>
            <h5>Heure et date: {props.checkedAt.toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}</h5>
{/*
// fonction en callback (pour les fonctions ayant besoin d'arguments)
*/}
            <button onClick={()=>props.update(props.id)}>Mettre à jour le stock</button>

        </div>
    );
}

