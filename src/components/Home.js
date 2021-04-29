import React, { useEffect } from 'react';

const Home = () => {
	useEffect(() => {
		const mapboxgl = window.mapboxgl;
		const MapboxDirections = window.MapboxDirections;
		// var MapboxDirections = require('@mapbox/mapbox-gl-directions');
		mapboxgl.accessToken =
			'pk.eyJ1Ijoidmlzc2hubnUiLCJhIjoiY2tvMmU3ZXliMGh0NDJxbHAxcDc4dGh2YyJ9.Ob26Zvm3pLL8ZKhxAPlU5w';

		// get current location

		function success(pos) {
			var crd = pos.coords;
			console.log(crd);
			setupMap([crd.longitude, crd.latitude]);
			console.log([crd.longitude, crd.latitude]);
		}

		function error(err) {
			console.warn(`ERROR(${err.code}): ${err.message}`);
			setupMap([28.7041, 77.1025]);
		}

		navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: true });

		const setupMap = (center) => {
			var map = new mapboxgl.Map({
				container: 'map',
				style: 'mapbox://styles/mapbox/streets-v11',
				center: center,
				zoom: 11,
			});
			map.addControl(new mapboxgl.NavigationControl());

			var directions = new MapboxDirections({
				accessToken: mapboxgl.accessToken,
			});

			map.addControl(directions, 'top-left');
		};
	}, []);
	return (
		<div>
			<div id='map'></div>
		</div>
	);
};

export default Home;
