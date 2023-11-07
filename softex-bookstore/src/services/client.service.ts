import {ModelStatic} from 'sequelize'
import Client from '../database/models/Client'
import { resp } from '../utils/resp';

class ClientService {
    private model: ModelStatic<Client> = Client;

    async get(){
        const clients = await this.model.findAll()
        return resp(200, clients)
    }
}

export default ClientService