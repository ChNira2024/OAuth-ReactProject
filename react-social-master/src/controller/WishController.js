import axios from 'axios';

const URL = "http://localhost:8081";
class WishController
{
    getAllEmployees()
    {
        return axios.get(`${URL}/wish`);
    }
}
export default new WishController();