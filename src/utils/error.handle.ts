import { Response, Request } from 'express'

export class Errors {


    static async handleHTTP(res: Response, error: string, errorRaw?: any) {
        console.log(errorRaw)
        res.status(500).send({ error })
    }



}