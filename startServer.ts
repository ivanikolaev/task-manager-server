import {Express} from "express";
import {IDatabase} from "pg-promise";
import {IClient} from "pg-promise/typescript/pg-subset";
import serverConfig from './config/server.config.json'
const host:string = serverConfig.host
const port:string=process.env.PORT ||serverConfig.port.toString() || '4000'
export const serverStart= async (app:Express,db:IDatabase<{},IClient>)=>{
    app.listen(+port, async()=>{
        try {
            await db.connect()
            console.log('connected database')
        }catch (e){
            console.log('not connected database', e)
        }
        console.log('server listening on port '+port)
    })
}