import React, {} from 'react';
import styles from './index.module.scss';


import {
  setMap,
  setMapWidthPX,
  setCellSquareSize,
  setWidthInCells,
  setHeightInCells,
} from 'features/currentMapSlice';
import {useHttp} from 'hooks/http.hook';
import {RootState} from 'store/store';
import {connect} from 'react-redux';
import {mapInterface} from 'interfaces/mapInterface';
import {ImpButton} from '../../common/impButton/impButton';


function mapStateToProps(state: RootState) {
  const {user, currentMap, maps} = state;
  const {token} = user;
  return {token, currentMap, maps};
}

export const MapMenu = connect(mapStateToProps, {
  setMap,
  setMapWidthPX,
  setCellSquareSize,
  setWidthInCells,
  setHeightInCells,
})(({
  token, currentMap, setMap, maps,
  setMapWidthPX,
  setCellSquareSize,
  setWidthInCells,
  setHeightInCells,
}: any) => {
  const {request, error} = useHttp();

  const handleSubmit = async () => {
    console.log(token);
    const data = await request('/api/map/', 'POST', {
      mapLink: currentMap.mapLink,
      mapWidthPx: currentMap.mapWidthPx,
      cellSquareSize: currentMap.cellSquareSize,
      widthInCells: currentMap.widthInCells,
      heightInCells: currentMap.heightInCells,
    }, {
      Authorization: `Bearer ${token}`,
    });

    console.log(data, error);
  };

  const mapSubmit= async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // console.log(formData.get('mapName'));
    console.log(formData.get('file'));

    const data1 = new FormData();
    data1.append('file', formData.get('file'));
    data1.append('user', 'hubot');
    const data = await request('/api/map/', 'POST', {
      mapName: formData.get('mapName'),
      file: formData.get('file'),

    }, {
      Authorization: `Bearer ${token}`,
    });
  };

  const mapNameHandler = (mapName:string)=>{
    return mapName.split('.').slice(0, -1).join('.');
  };

  return (
    <section className={styles.navBarContainer}>
      <div className={styles.form}>
        <div>
          <label>Имя карты</label>
          <input
            value={mapNameHandler(currentMap.mapName)}
            onChange={(e) => {
              setMap(e.target.value);
            }}
            type="text"
          />
        </div>

        <label>Размер карты в px</label>
        <input
          value={currentMap.mapWidthPx}
          onChange={(e) => setMapWidthPX(+e.target.value)}
          type="number"
        />

        <div>
          <label >ширина карты в клетках</label>
          <input
            value={currentMap.widthInCells}
            onChange={(e) => {
              setWidthInCells(+e.target.value);
            }}
            type="number"
          />
        </div>
        <div>
          <label>Высота карты в клетках</label>
          <input
            value={currentMap.heightInCells}
            onChange={(e) => setHeightInCells(+e.target.value)}
            type="number"
          />
        </div>
        <div>
          <label>Размер клетки в PX</label>
          <input
            value={currentMap.cellSquareSize}
            onChange={(e) => setCellSquareSize(+e.target.value)}
            type="number"
          />
        </div>
        <ImpButton text={'Сохранить'} />
        <div className={styles.mapSelector}>
          {maps.map((el:mapInterface)=><div className={styles.mapItem}
            onClick={()=>setMap(el)}
            key={el.mapName}>{mapNameHandler(el.mapName)}</div>)}
        </div>

        <ImpButton text={'Создать карту'} />
      </div>

      <form className={styles.form} onSubmit={mapSubmit}>
        <div>
          <label>Имя карты</label>
          <input
            type="text"
            name={'mapName'}
          />
        </div>

        <label>Размер карты в px</label>
        <input
          onChange={(e) => setMapWidthPX(+e.target.value)}
          type='file'
          accept='image/*'
          name={'file'}
        />
        <ImpButton text={'Создать карту'} type={'submit'}/>
      </form>
    </section>
  );
});
