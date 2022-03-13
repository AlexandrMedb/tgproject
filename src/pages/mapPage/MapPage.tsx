import React, {useEffect} from 'react';
import styles from './mapPage.module.scss';
// components
import {MapField} from 'components/mapPage/mapField/MapField';
import {MapMenu} from 'components/mapPage/mapMenu/MapMenu';
import {CharTracker} from 'components/mapPage/charTracker/charTracker';
import {MainNavBar} from 'components/common/mainNavBar/MainNavBar';
import {connect} from 'react-redux';
import {RootState} from 'store/store';
import {useMapApi} from '../../hooks/mapApi.hook';

function mapStateToProps(state: RootState) {
  const {user} = state;
  const {token, userId} = user;
  return {token, userId};
}


export const MapPage = connect(mapStateToProps )(() => {
  const {getMaps}= useMapApi();

  useEffect(() => {
    getMaps();
  } );


  return (
    <div>
      <MainNavBar />
      <main className={styles.wrapper}>
        <MapMenu/>
        <MapField/>
        <CharTracker/>
        {/* { /* <section>chat</section>*!/*/}
      </main>
    </div>

  );
});
