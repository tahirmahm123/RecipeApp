import GenericService from "./Generic";

class MealService extends GenericService {
    endPoint = "meals"
    fetchAll = () => this.get(this.endPoint);
    findOne = (_id) => this.get(this.endPoint + "/" + _id);
}

export default (new MealService());