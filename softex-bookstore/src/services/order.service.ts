import { ModelStatic } from 'sequelize'
import Order from '../database/models/Order'
import { resp } from '../utils/resp';

class OrderService {
    private model: ModelStatic<Order> = Order;

    // Função para obter todos os pedidos
    async getOrders() {
        const orders = await this.model.findAll();
        return resp(200, orders);
    }

    // Função para obter um pedido pelo id
    async getOrderById(id: number) {
        const order = await this.model.findOne({ where: { id: id } });
        return resp(200, order);
    }

    // Função para deletar todos os registros
    async deleteAll() {
        const result = await this.model.destroy({
            where: {},
            truncate: true
        });
        return resp(200, result);
    }

    // Função para deletar um registro pelo id
    async deleteById(id: number) {
        const result = await this.model.destroy({
            where: { id: id }
        });
        return resp(200, result);
    }

    // Função para atualizar um registro pelo id
    async updateById(id: number, data: any) {
        const result = await this.model.update(data, {
            where: { id: id }
        });
        return resp(200, result);
    }

    // Função para criar um novo registro
    async post(data: any) {
        const result = await this.model.create(data);
        return resp(200, result);
    }


}

export default OrderService;