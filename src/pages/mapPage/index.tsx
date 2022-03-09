import React from "react";
import styles from "./index.module.scss";
//components
import {MapField} from "./components/mapField/MapField";
import {MapMenu} from './components/mapMenu/MapMenu';
import {CharacterTracker} from "./components/charactersTracker/characterTracker";
import {MainNavBar} from "../../components/mainNavBar/MainNavBar";

export const MapPage = () => {
    return (
        <div>
            <MainNavBar />
            <main className={styles.wrapper}>
                <MapMenu/>
                <MapField/>
                <CharacterTracker/>

                {/*<section>chat</section>*/}
            </main>
        </div>

    );
};
