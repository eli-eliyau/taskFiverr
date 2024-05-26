import { Request, Response } from 'express';
import SoperheroModel from '../../models/Superhero';



export const getSuperhero = async (req: Request, res: Response) => {
    console.log(req.query);

    try {

        const { page = 1, limit = 10 } = req.query
        const skip = (Number(page) - 1) * Number(limit);

        const superheroes = await SoperheroModel.find({}, { _id: 0, __v: 0 })


        res.status(200).json(superheroes);
    } catch (error) {
        res.status(500).json({ message: 'Error receiving data', error });
    }
}

