import React, {useEffect, useMemo, useState} from "react";
import ReactDOM from "react-dom";
import {YMaps, Map, Clusterer, Placemark} from "react-yandex-maps";
// import POINTS from "./points";
import {BalloonContentLayout} from "./BalloonContentLayout";
import './Map.scss'
import {useSelector} from "react-redux";
import * as events from "events";

const mapState = {
	center: [55.751574, 37.573856],
	zoom: 5
};


export const YandexMap = ({selectedPoint, setSelectedPoint}) => {
	const [ymaps, setYmaps] = useState(null)
	const onPlacemarkClick = point => setSelectedPoint(point)
	const areas = useSelector(state => state.areas)
	const [allSports, setAllSports] = useState([])


	return (
		<div className="map">
			<YMaps query={{lang: "ru_RU", load: "package.full"}}>
				<Map
					defaultState={mapState}
					onLoad={ymaps => setYmaps(ymaps)} w
					width={500}
					height={400}
				>
					<Clusterer
						options={{
							preset: "islands#invertedVioletClusterIcons",
							groupByCoordinates: false,
							balloonPanelMaxMapArea: Infinity
						}}
					>
						{(ymaps && areas) &&
							areas.map((point, index) => (
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
