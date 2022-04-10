import React, {useEffect, useMemo, useState} from "react";
import ReactDOM from "react-dom";
import {YMaps, Map, Clusterer, Placemark} from "react-yandex-maps";
import {BalloonContentLayout} from "./BalloonContentLayout";
import './Map.scss'
import {useSelector} from "react-redux";

const mapState = {
	center: [55.751574, 37.573856],
	zoom: 5
};


const Balloon = () => {
	const [incr, setIncr] = useState(0)
	const increment = () => setIncr(prevState => (prevState + 1));

	return (
		<div>
			<button className='button-map' onClick={() => increment()}>Click me</button>
			{incr}
		</div>
	);
}

export const YandexMap = () => {
	const [ymaps, setYmaps] = useState(null)
	const [selectedPoint, setSelectedPoint] = useState(null)
	const [currentPlace, setCurrentPlace] = useState(null)

	useEffect(() => selectedPoint && console.log(selectedPoint), [selectedPoint])

	const events = useSelector(state => state.events)

	const filteredEvents = useMemo(() => events.filter(el => el.placeId === currentPlace))

	const areas = useSelector(state => state.areas)

	const onPlacemarkClick = point => setSelectedPoint(point)

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
						{ymaps && areas &&
							areas.map((point, index) => (
								<Placemark
									modules={[
										"geoObject.addon.balloon",
										"geoObject.addon.hint"
									]}
									key={index}
									geometry={point.coordinates.split(',')}
									onBalloonOpen={() => {
										ReactDOM.hydrate(
											<Balloon id={point.title} placeId={point.placeId} sportId/>,
											document.getElementById("balloon")
										);
									}}
									onClick={() => onPlacemarkClick(point)}
									options={{
										balloonContentLayout: BalloonContentLayout(
											ymaps.templateLayoutFactory,
											<Balloon/>
										),
										balloonPanelMaxMapArea: Infinity
									}}
								/>
							))}
					</Clusterer>
				</Map>
			</YMaps>
			<div id="test"/>
		</div>
	);

}
