import axios from "axios";

export const apiKey = "9e4abad239d860aabb5db77e39b26ab1";
export const url = `https://api.darksky.net/forecast/${apiKey}`;

export const getCurrentWeatherDataByGeo = (lat, lon) => {
  return axios.get(`https://cors-anywhere.herokuapp.com/${url}/${lat},${lon}`, {
    params: { units: "si", exclude: "minutely,hourly" }
  });
};
