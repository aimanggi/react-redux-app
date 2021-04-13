import { CONCAT_DATA, FETCH_DATA } from "./actionTypes";

// #3 - create action function
const fetchData = () => ({ type: FETCH_DATA, payload: [{ data: "text" }] });

const concatData = () => ({ type: CONCAT_DATA, payload: [{ data: "text 2" }] });

export { fetchData, concatData };
