import { FC, useContext } from 'react';

import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';
import { containerStyle } from './main.style';
import { AppContext } from '../../hooks';

const apiKey: string = "AIzaSyC6xFS89Gs9XUQUgpIDwdMbZNzs1764ys4"

const Main: FC = () => {
    
    const { points } = useContext<any>(AppContext);

    return (
        <LoadScript
            googleMapsApiKey={apiKey}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={points[1]}
                zoom={17}
            >
                <Polyline
                    path={points}
                    options={{
                        strokeColor: "#ff2527",
                        strokeOpacity: 0.75,
                        strokeWeight: 2,
                        icons: [
                            {
                                offset: "0",
                                repeat: "20px"
                            }
                        ]
                    }}
                />
                <></>
            </GoogleMap>
        </LoadScript>
    )
}
export { Main }