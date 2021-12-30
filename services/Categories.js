import GenericService from "./Generic";

class CategoryService extends GenericService {
  endPoint = "categories"
  fetchAll = () => this.get(this.endPoint);
  findOne = (_id) => this.get(this.endPoint + "/" + _id);
  store = (data) => this.post(this.endPoint ,data, {
    headers: {
      // 'content-type': 'multipart/form-data',
      'accept': 'application/json'
    },
  });
}

export default (new CategoryService());