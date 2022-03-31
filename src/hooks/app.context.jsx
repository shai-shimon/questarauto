import { createContext, useReducer, useEffect, useState } from 'react';
import { appProps } from '../props';
import { pointsReducer, toggleReducer, vehicleAction, vehicleReducer } from './reducers';
import { getVehicleByDate, getvehicleId } from '../requests';

export const AppContext = createContext();

const AppProvider = (props) => {
	const [ toggles, playToggle ] = useReducer(toggleReducer, {
		toggle: {
			drawer: false
		}
	});

	//Reducers
	const [ vehicles, setVehicles ] = useReducer(vehicleReducer, []);
	const [ points, setPoints ] = useReducer(pointsReducer, []);

	// States
	const [ vehiclesId, setvehicles ] = useState([]);

	useEffect(() => {
		getvehicleId().then((res) => {
			setvehicles(res);
			getVehicleByDate(Number(res[0])).then((data) => {
				setVehicles({
					type: vehicleAction.byDate,
					data: data
				});
				setPoints({
					type: vehicleAction.points,
					points: data.data[0].points
				});
			});
		});
	}, []);

	return (
		<AppContext.Provider
			value={{ appProps, toggles, playToggle, vehiclesId, vehicles, setVehicles, points, setPoints }}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppProvider;
