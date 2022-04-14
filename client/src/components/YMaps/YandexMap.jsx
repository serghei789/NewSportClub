import React, {useEffect, useMemo, useState} from "react";
import ReactDOM from "react-dom";
import {YMaps, Map, Clusterer, Placemark} from "react-yandex-maps";
// import POINTS from "./points";
import {BalloonContentLayout} from "./BalloonContentLayout";
import './Map.scss'
import {useSelector} from "react-redux";
import * as events from "events";

const mapState = {
	center: [55.748355, 37.861139],
	zoom: 14
};


export const YandexMap = ({selectedPoint, setSelectedPoint}) => {
	const [ymaps, setYmaps] = useState(null)
	const onPlacemarkClick = point => setSelectedPoint(point)
	const areas = useSelector(state => state.areas)
	const [allSports, setAllSports] = useState([])
  const filter = useSelector(state => state.filter)
  const currAreas = ((filter === 'Все') ? areas : areas.filter(el => filter.includes(el.id)))

  useEffect(() => {
    console.log('');
  }, [filter])

	return (
		<div className="map">
			<YMaps query={{lang: "ru_RU", load: "package.full"}}>
				<Map
					defaultState={mapState}
					onLoad={ymaps => setYmaps(ymaps)}
					width={700}
					height={400}
				>
					<Clusterer
						options={{
							preset: "islands#invertedVioletClusterIcons",
							groupByCoordinates: false,
							balloonPanelMaxMapArea: Infinity
						}}
					>
						{(ymaps && currAreas) &&
            /* filter !== '' ? areas.filter(el => el.id === filter.id) : areas
            && */
            currAreas.map((point, index) => (
								<Placemark
									modules={[
										"geoObject.addon.balloon",
										"geoObject.addon.hint"
									]}
									key={index}
									height='200px'
									geometry={point.coordinates.split(',')}
									onBalloonOpen={() => {
										// ReactDOM.hydrate(
										// 	<Balloon id={point.title} sportId={point.sportId} placeId={point.placeId}/>,
										// 	document.getElementById("balloon")
										// ); // TODO: Тут можно поместить в баллон что нибудь
									}}
									onClick={() => onPlacemarkClick(point)}
									// options={{
									// 	balloonContentLayout: BalloonContentLayout(
									// 		ymaps.templateLayoutFactory,
									// 		// <Balloon/>
									// 	),
									// 	balloonPanelMaxMapArea: Infinity
									// }} // TODO: Тут можно отключить баллон
								/>
							))}
					</Clusterer>
				</Map>
			</YMaps>
			<div id="test"/>
		</div>
	);

}
