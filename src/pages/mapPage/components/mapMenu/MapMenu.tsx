import React, {useCallback, useEffect} from "react";
import styles from "./index.module.scss";


//slicer
import {
    setMap,
    setMapWidthPX,
    setCellSquareSize,
    setWidthInCells,
    setHeightInCells,
} from "features/currentMapSlice";
import {useHttp} from "../../../../hooks/http.hook";
import {RootState} from "../../../../store/store";
import {connect} from "react-redux";
import {mapInterface} from "../../../../interfaces/mapInterface";


function mapStateToProps(state: RootState) {
    const {user, map, maps} = state
    const {token} = user;
    console.log(user);
    return {token,map, maps}
}

export const MapMenu = connect(mapStateToProps, {
    setMap,
    setMapWidthPX,
    setCellSquareSize,
    setWidthInCells,
    setHeightInCells,
})(({
        token, map, setMap, maps,
        setMapWidthPX,
        setCellSquareSize,
        setWidthInCells,
        setHeightInCells,
    }: any) => {
    const {request, error} = useHttp();

    const handleSubmit = async () => {
        console.log(token)
        const data = await request('/api/map/', 'POST', {
            mapLink: map.mapLink,
            mapWidthPx: map.mapWidthPx,
            cellSquareSize: map.cellSquareSize,
            widthInCells: map.widthInCells,
            heightInCells: map.heightInCells,
        }, {
            Authorization: `Bearer ${token}`
        })

        console.log(data, error)
    }



    return (
        <div className={styles.form}>
            <div>
                <p>Ссылка на карту</p>
                <input
                    value={map.mapLink}
                    onChange={(e) => {
                        setMap(e.target.value);
                    }}
                    name="mapLink"
                    type="text"
                />
            </div>
            <div>
                <p>Размер карты в px</p>
                <input
                    value={map.mapWidthPx}
                    onChange={(e) => setMapWidthPX(+e.target.value)}
                    name="mapLink"
                    type="number"
                />
            </div>
            <div>
                <p>ширина карты в клетках</p>
                <input
                    value={map.widthInCells}
                    onChange={(e) => {
                        setWidthInCells(+e.target.value);

                    }}
                    name="mapLink"
                    type="number"
                />
            </div>
            <div>
                <p>Высота карты в клетках</p>
                <input
                    value={map.heightInCells}
                    onChange={(e) => setHeightInCells(+e.target.value)}
                    name="mapLink"
                    type="number"
                />
            </div>
            <div>
                <p>Размер клетки в PX</p>
                <input
                    value={map.cellSquareSize}
                    onChange={(e) => setCellSquareSize(+e.target.value)}
                    name="mapLink"
                    type="number"
                />
            </div>
            <button type="button" onClick={handleSubmit}>
                Сохранить
            </button>
            {maps.map((el:mapInterface)=><div key={el.mapName}>{el.mapName}</div>)}
        </div>
    );
});
