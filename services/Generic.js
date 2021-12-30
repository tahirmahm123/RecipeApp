import axios from "axios";
import baseUrl from "./BaseUrl";

axios.defaults.baseURL = baseUrl+"/";
class GenericService {
	constructor() {}
	get = (url,options={}) =>
		new Promise((resolve, reject) => {
			axios
				.get(url,options)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	post = (url, data, options={}) =>
		new Promise((resolve, reject) => {
			axios
				.post(url, data,options)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	delete = (url,options={}) =>
		new Promise((resolve, reject) => {
			axios
				.delete(url,options)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	put = (url, data, options={}) =>
		new Promise((resolve, reject) => {
			axios
				.put(url, data, options)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
}
export default GenericService;
