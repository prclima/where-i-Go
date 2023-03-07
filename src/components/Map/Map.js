import GoogleMapReact from "google-map-react";
import style from "./Map.module.css";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map({ setBounds, setCoord, center }) {
  const defaultProps = {
    center: {
      lat: center.lat ? center.lat : -23.55327135475986,
      lng: center.lng ? center.lng : -46.704908471359396,
    },
    zoom: 11,
  };

  return (
    <div className={style.map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB-4i1dWwmVrEGBJiqmhju4RcxwYDqZQ4o" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onChange={(e) => {
          setCoord({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
