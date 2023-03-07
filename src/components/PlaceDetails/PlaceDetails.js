import style from "./PlaceDetails.module.css";

function PlaceDetails({ place }) {
  console.log(place);
  return (
    <>
      {place ? (
        <div className={style.card}>
          {place.photo ? (
            <img src={place.photo.images.large.url} alt="err" />
          ) : (
            <> </>
          )}
          <h4>{place.name}</h4>
          <h3>Preço: {place.price_level} </h3>

          <div className={style.cozinha}>
            {place?.cuisine?.map((item) => (
              <p>{item.name}</p>
            ))}
          </div>
          {place?.address && <h5>{place.address}</h5>}
          {place?.phone && <h5>{place.phone}</h5>}
        </div>
      ) : (
        <> </>
      )}
    </>
  );
}

export default PlaceDetails;
