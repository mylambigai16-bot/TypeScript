import fs from 'fs'
import path from 'path'
import {parse} from "csv-parse/sync"

export interface LoginUser{
  
    email: string
    password: string
}

export function readLoginData(): LoginUser[]{
    const filePath = path.resolve(__dirname,'../testData/Logindata.csv')
    const fileContent = fs.readFileSync(filePath,'utf-8')

    return parse(fileContent,{
        columns: true,
        skip_empty_lines:true,
        trim:true
    }) as LoginUser[]

}