import React, { FC, useState, useEffect, useRef } from 'react';
import styles from './Map.module.css';
import MapView from "@arcgis/core/views/MapView";
import WebMap from '@arcgis/core/WebMap';

interface MapProps {

}

const Map: FC<MapProps> = (props?: MapProps) => {
    const webmap = new WebMap({
        portalItem: {
            id: '3633b1d2a6304260a4f3289c94eb4e38'
        }
    });
    const view = new MapView({ map: webmap });
    const viewRef = useRef<any>();


    useEffect(() => {
        if (!view.container && viewRef.current) {
            view.container = viewRef.current;
        }
    });

    return (
        <div className={styles.map} ref={viewRef}>
        </div>)

}

export default Map;