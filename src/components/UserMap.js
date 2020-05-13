import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";
import "./UserMap.module.less";
import L from "leaflet";

L.Icon.Default.imagePath = "/images";

function UserMap(props) {
  const [coordinate, setCoordinate] = useState([35.7596, -79.0193]);
  const [zoom, setZoom] = useState(16);

  useEffect(() => {
    if (props.location) {
      setCoordinate([props.location.lat, props.location.lng]);
      setZoom(16);
    } else {
      setZoom(10);
    }
  }, [props.location]);

  return (
    <div styleName="user-map-container">
      <Map style={{ flex: 1 }} center={coordinate} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={coordinate} />
      </Map>
    </div>
  );
}

UserMap.propTypes = {
  location: PropTypes.object,
};

export default UserMap;
