import axios from "axios";

export const apiKey = "9e4abad239d860aabb5db77e39b26ab1";
export const url = `https://api.darksky.net/forecast/${apiKey}`;

export const getCurrentWeatherDataByGeo = (lat, lon) => {
  return axios.get(`${url}/${lat},${lon}`, {
    params: { units: "si", exclude: "minutely,hourly" }
  });
};

// export const getLocationKeyByGeo = async (lat, lon) => {
//   try {
//     let { key } = await axios.get(
//       "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search",
//       {
//         params: {
//           apikey: apiKey,
//           q: `${lat}, ${lon}`
//         }
//       }
//     );
//     console.log(key);
//   } catch (error) {}
// };
