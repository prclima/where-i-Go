import axios from "axios";

async function getPlacesData(sw, ne) {
  const URL =
    "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "046bd50508mshcbb993378101a5cp18b741jsn97cdb4a439db",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });

    return data;
  } catch (err) {
    console.log(err);
  }
}

export default getPlacesData;
