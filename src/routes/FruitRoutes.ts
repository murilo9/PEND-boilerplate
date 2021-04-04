import {Request, Response} from "express";
import { getRepository } from "typeorm";
import {Fruit} from '../database/entities/Fruit';

export default class FruitRoutes {

  public routes(app): void {

    app.get('/fruits', async (req: Request, res: Response) => {
      try{
        const fruitRepo = getRepository(Fruit)
        const fruits = await fruitRepo.find()
        res.status(200).send(fruits)
      }
      catch(e){
        console.log(e)
        res.status(400).send(e)
      }
    })

    app.post('/fruits', async (req: Request, res: Response) => {
      console.log(req.body)
      try{
        const name = (req.body.name || 'noname') as string
        const color = req.body.color as string
        const weight = req.body.weight as number
        const fruitRepo = getRepository('Fruit')
        const brandNewFruit = new Fruit()
        brandNewFruit.name = name
        brandNewFruit.color = color
        brandNewFruit.weight = weight
        await fruitRepo.save(brandNewFruit)
        res.status(200).send(brandNewFruit)
      }
      catch(e){
        console.log(e)
        res.status(400).send(e)
      }
    })
  }
}