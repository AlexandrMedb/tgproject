import React, {useState, useCallback} from "react";

//components
import {MapCell} from "../mapCell/mapCell";
import {Cell} from "../../../pages/mapPage/interfaces/cell";
import styles from "./index.module.scss";
import {connect} from "react-redux";
import {RootState} from "../../../store/store";
import {IMG_HOST} from "../../../const/hosts";


function mapStateToProps(state: RootState) {
    const {currentMap,user} = state
    const {userId} = user;
    return { currentMap, userId}
}

export const MapField = connect(mapStateToProps)((props: any) => {

    const {currentMap,userId} = props;
    const [currenCell, setCurrentCell] = useState();
    const [wayLength, setWayLength] = useState(0);

    const {
        mapLink: mapBackground,
        mapWidthPx: mapBackgroundWidth,
        widthInCells: cellWidth,
        heightInCells: cellHeight
    } = currentMap;



    const CreateMapArray = useCallback(() => {
        let res = new Array(cellHeight).fill([]);
        const cell: Cell = {
            size: 0,
        };
        res = res.map((el) => new Array(cellWidth).fill(cell));

        return res;
    }, [cellHeight, cellWidth]);

    const mapArray = CreateMapArray();

    return (
        <div>
            <div>wayLength {wayLength}</div>
            <TurnOrder/>
            <section className={styles.mapWrapper}>
                <div>
                    <img
                        style={{width: `${mapBackgroundWidth}px`}}
                        src={`${IMG_HOST}/${userId}/${currentMap.mapName}`}
                        alt="map"
                    />
                </div>

                <div
                    className={styles.mapField}
                    style={{gridTemplateColumns: `repeat(${cellWidth}, 1fr)`}}
                >
                    {mapArray.map((el, i) =>
                        el.map((el: any, j: number) => {
                            return (
                                <MapCell
                                    key={`id${i}_${j}`}
                                    id={`id${i}_${j}`}
                                    currentCell={currenCell}
                                    setCurrentCell={setCurrentCell}
                                    wayLength={wayLength}
                                    setWayLength={setWayLength}
                                />
                            );
                        })
                    )}
                </div>
            </section>
        </div>
    );
})

function mapStateToProps1(state: any) {
    const { currentCharacters} = state
    return {currentCharacters}
}


export const TurnOrder = connect(mapStateToProps1)(({currentCharacters}: any) => {

return  <></>
})

const CharacterCard =connect(mapStateToProps1)((props: any) => {

    return <div>1</div>
})
