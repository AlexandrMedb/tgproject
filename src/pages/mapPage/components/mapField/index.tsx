import React, {useState, useCallback} from "react";

//components
import {MapCell} from "../mapCell";
import {Cell} from "../../interfaces/cell";
import styles from "./index.module.scss";
import {connect} from "react-redux";


function mapStateToProps(state: any) {
    const {map} = state
    return {map}
}

export const MapField = connect(mapStateToProps)((props: any) => {

    const {map} = props;
    console.log(map);
    const [currenCell, setCurrentCell] = useState();
    const [wayLength, setWayLength] = useState(0);

    const {
        mapLink: mapBackground,
        mapWidthPx: mapBackgroundWidth,
        widthInCells: cellWidth,
        heightInCells: cellHeight
    } = map;


    //chareacters

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
            <section className={styles.mapWrapper}>
                <div>
                    <img
                        style={{width: `${mapBackgroundWidth}px`}}
                        src={mapBackground}
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

