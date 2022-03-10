import React, {useCallback, useEffect} from "react";
import styles from "./index.module.scss";
//components
import {MapField} from "./components/mapField/MapField";
import {MapMenu} from './components/mapMenu/MapMenu';
import {CharacterTracker} from "./components/charactersTracker/characterTracker";
import {MainNavBar} from "../../components/mainNavBar/MainNavBar";
import {connect} from "react-redux";
import {setMaps} from "../../features/mapsSlice";
import {useHttp} from "../../hooks/http.hook";
import {RootState} from "../../store/store";
import {IMG_HOST} from "../../const/hosts";

function mapStateToProps(state: RootState) {
    const {user} = state
    const {token, userId} = user;
    return {token, userId}
}


export const MapPage  = connect(mapStateToProps, {setMaps})(({token,setMaps, userId}: any) => {
    const { request} =useHttp()

    const fetchMaps = useCallback(async () => {
        try {
            const fetched = await request('/api/map', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            if(fetched) setMaps(fetched);

        } catch (e) {
        }
    }, [token, request])

    useEffect(() => {
        fetchMaps()
    }, [fetchMaps])


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
});
