// le fichier est composé de trois parties différentes

/* React pour déclarer notre composant + importantation du Hook useState: hook = appelé au sein d’une fonction composant pour y ajouter un état local.
    = permet d’utiliser React sans classes.
 */
import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// importation des différents modules
import Button from 'react-bootstrap/Button';
import './App.css';

//importation des composants SuppliersList et SuppliersMap
import {SuppliersList} from './SuppliersList.js';
import {SuppliersMap} from './SuppliersMap.js';
import {Supplier} from "./Supplier";

/* un composant écris avec une fonction: composant fonctionnel = sans state (contraitre au composant class)
                                                                mais pb résolu par la solution des Hooks
                                                               = sans gestion du this :)
*/
function App() {

// affichage des fonctions et de leurs 'valeurs alert' dans le DOM virtuel grâce à JSX en utilisant la fonction return
//utilisation des composants SuppliersList et SuppliersMap dans composant parent App
    return (
        <Router>
            <div className="App">
                <header className="App-header" >
                    <Link className="home" to='/home'>Que voulez-vous faire ?</Link>
                    <Link to='/liste'>
                        <Button variant="info" size="lg" block
                        >
                            <a
                                className="App-link"
                                rel="noopener noreferrer"
                            >
                                Voir la liste des fournisseurs
                            </a>
                        </Button>
                    </Link>
                    <Link to='/carte'>
                    <Button variant="info" size="lg" block
                    >
                        <a
                            className="App-link"
                            rel="noopener noreferrer"
                        >
                            Voir la carte des fournisseurs
                        </a>
                    </Button>
                    </Link>
                </header>

                    {/*Création des routes*/}
                <Switch>
                    <Route exact path="/liste">
                        <SuppliersList />
                    </Route>
                    <Route path={"/supplier"}>
                        <Supplier/>
                    </Route>
                    <Route path="/carte">
                        <SuppliersMap />
                    </Route>
                    <Route path="/">
                        <h1>Accueil</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


// d'exporter le composant afin qu'il soit utilisable dans le reste de l'application
export default App;
