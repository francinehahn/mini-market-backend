import {knex} from 'knex'
import dotenv from 'dotenv'

dotenv.config()

export default abstract class BaseDatabase {
    protected static connection = knex({
        client: "mysql",
        connection: {
           host: process.env.DB_HOST,
           port: 3306,
           user: process.env.DB_USER,
           password: process.env.DB_PASSWORD,
           database: process.env.DB_DATABASE,
           multipleStatements: true
        }
     })

    abstract TABLE_NAME: string

    protected async getAll () {
        return await BaseDatabase.connection(this.TABLE_NAME).select()
    }

    protected async getById (id: number) {
        return await BaseDatabase.connection(this.TABLE_NAME).select().where("id", id)
    }

    protected async insertInto (item: any) {
        await BaseDatabase.connection(this.TABLE_NAME).insert(item)
    }
}