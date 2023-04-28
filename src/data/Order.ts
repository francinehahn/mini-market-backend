export class Order {
    constructor (
        private fk_client_id: number,
        private fk_product_id: number,
        private qty: number,
        private delivery_date: string,
        private created_at: string
    ) {
        this.fk_client_id = fk_client_id
        this.fk_product_id = fk_product_id
        this.qty = qty
        this.delivery_date = delivery_date
        this.created_at = created_at
    }
}