import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import './Map.css';
import axios from 'axios';

const Location = ({ location }) => {
  const [coord, setCoord] = React.useState(null);

  React.useEffect(() => {
    console.log(location);
    const fetchCoordinates = async () => {
      const { data } = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${location}&format=json`,
      );
      setCoord(data[0]);
    };
    fetchCoordinates();
  }, [location]);

  if (!location)
    return (
      <div className="Map box">
        <p>Usuário não informou localização.</p>
      </div>
    );

  if (coord)
    return (
      <div className="Map box">
        <Map center={[coord.lat, coord.lon]} zoom={11}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[coord.lat, coord.lon]} />
        </Map>
      </div>
    );
  else return <p>Renderizando a localização do usuário...</p>;
};

export default Location;
