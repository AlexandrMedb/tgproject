import React, {useEffect, useState} from 'react';
import styles from './index.module.scss';
import {ReactComponent as Circle} from './img/circle-plus-solid.svg';
import {ReactComponent as Pencil} from './img/pencil-solid.svg';
import {ReactComponent as Trash} from './img/trash-can-solid.svg';


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
import {useMapApi} from '../../../hooks/mapApi.hook';


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

  const {createMap, updateMap}= useMapApi();

  // const handleSubmit = async () => {
  //   console.log(token);
  //   const data = await request('/api/map/', 'POST', {
  //     mapLink: currentMap.mapLink,
  //     mapWidthPx: currentMap.mapWidthPx,
  //     cellSquareSize: currentMap.cellSquareSize,
  //     widthInCells: currentMap.widthInCells,
  //     heightInCells: currentMap.heightInCells,
  //   }, {
  //     Authorization: `Bearer ${token}`,
  //   });
  //
  //   console.log(data, error);
  // };

  type mode ='edit'|'create'|'delete';
  const [mode, setMode] =useState<mode>('edit');


  const mapSubmit= async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (mode==='create') createMap(formData);
    if (mode==='edit') updateMap(formData);
  };


  const mapNameHandler = (mapName:string)=>{
    return mapName.split('.').slice(0, -1).join('.');
  };

  const selectedModeStyle={
    fill: 'rgba(40, 44, 45, 1)',
    width: '1.3em',
  };

  return (
    <section className={styles.navBarContainer}>
      <div className={styles.form}>
        <div className={styles.modeSelector}>
          <div title='Добавить карту' onClick={()=>setMode('create')}>
            <Circle style={mode==='create'? selectedModeStyle:{}}/>
          </div>
          <div title='Изменить карту' onClick={()=>setMode('edit')}>
            <Pencil style={mode==='edit'? selectedModeStyle:{}}/>
          </div>
          <div title='Удалить карту' onClick={()=>setMode('delete')}>
            <Trash style={mode==='delete'? selectedModeStyle:{}}/>
          </div>
        </div>
        <form onSubmit={mapSubmit}>
          <div>
            <label>Имя карты</label>
            <input
              // value={mapNameHandler(currentMap.mapName)}
              // onChange={(e) => {
              //   setMap(e.target.value);
              // }}
              name='mapName'
              type="text"
            />
          </div>
          {mode==='edit' && (
            <>
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
            </>
          )}
          {mode==='create' && (<>
            <label>Файл карты<input
              onChange={(e) => setMapWidthPX(+e.target.value)}
              type='file'
              accept='image/*'
              name={'file'}
            /></label></>)}
          <button>
            Сохранить
          </button>
        </form>
        <div className={styles.mapSelector}>
          {maps.map((el:mapInterface)=><div className={styles.mapItem}
            onClick={()=>setMap(el)}
            key={el.mapName}>{mapNameHandler(el.mapName)}</div>)}
        </div>
      </div>
    </section>
  );
});

