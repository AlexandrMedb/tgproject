import React from "react";
import styles from "./index.module.scss";
//components
import {MapField} from "./components/mapField";
import {MapMenu} from './components/mapMenu';
import {CharacterTracker} from "./components/charactersTracker/characterTracker";

export const MapPage = () => {
    return (
        <main className={styles.wrapper}>
            <MapMenu/>
            <MapField/>
            <CharacterTracker/>

            {/*<section>chat</section>*/}
        </main>
    );
};
