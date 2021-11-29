import GenericService from "./Generic";

class CategoryService extends GenericService {
  endPoint = "categories"
  fetchAll = () => this.get(this.endPoint);
  findOne = (_id) => this.get(this.endPoint + "/" + _id);
}

export default (new CategoryService());