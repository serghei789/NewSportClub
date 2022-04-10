import React, {useState} from "react";
import ReactDOM from "react-dom";
import {YMaps, Map, Clusterer, Placemark} from "react-yandex-maps";
import POINTS from "./points";
import {BalloonContentLayout} from "./BalloonContentLayout";
import './Map.scss'

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

export const YandexMap = () =>  {
	const [ymaps, setYmaps] = useState(null)
	const [selectedPoint, setSelectedPoint] = useState(null)

	const onPlacemarkClick = point => setSelectedPoint(point)

		return (
			<div className="map">
				<YMaps query={{lang: "ru_RU", load: "package.full"}}>
					<Map
						defaultState={mapState}
						onLoad={ymaps => setYmaps(ymaps)}w
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
							{ymaps &&
								POINTS.map((point, index) => (
									<Placemark
										modules={[
											"geoObject.addon.balloon",
											"geoObject.addon.hint"
										]}
										key={index}
										geometry={point.coords}
										onBalloonOpen={() => {
											ReactDOM.hydrate(
												<Balloon id={point.title}/>,
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
