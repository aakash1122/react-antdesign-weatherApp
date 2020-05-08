import axios from "axios";

export const apiKey = "9e4abad239d860aabb5db77e39b26ab1";
export const url = `https://api.darksky.net/forecast/${apiKey}`;

export const getCurrentWeatherDataByGeo = async (pos) => {
  const { lat, lng } = pos;
  // return await axios.get(`https://cors-anywhere.herokuapp.com/${url}/${lat},${lon}`, {
  //   params: { units: "si", exclude: "minutely,hourly" }
  // });
  const data = await axios.get(
    `https://cors-anywhere.herokuapp.com/${url}/${lat},${lng}`,
    {
      params: { units: "si", exclude: "minutely,hourly" },
    }
  );
  return data.data;
};
