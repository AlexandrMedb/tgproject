import React, {useCallback, useEffect} from "react";
import styles from "./index.module.scss";
//components
import {MapField} from "components/mapPage/mapField/MapField";
import {MapMenu} from 'components/mapPage/mapMenu/MapMenu';
import {CharacterTracker} from "components/mapPage/charactersTracker/characterTracker";
import {MainNavBar} from "components/common/mainNavBar/MainNavBar";
import {connect} from "react-redux";
import {setMaps} from "features/mapsSlice";
import {useHttp} from "hooks/http.hook";
import {RootState} from "store/store";

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
