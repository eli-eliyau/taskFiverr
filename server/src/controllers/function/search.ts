import { Request, Response } from 'express';
import SoperheroModel from '../../models/Superhero';


const search = async (req: Request, res: Response)=>{
    try {
        const { category, query } = req.query;
    
        if (!category || !query) {
          return res.status(400).json({ message: 'Missing category or query parameter' });
        }
    
        const regex = new RegExp(query as string, 'i'); // יצירת רג'קס לחיפוש לא תלוי אותיות קטנות/גדולות
    
        const filter: any = {};
        filter[category as string] = regex;
    
        const results = await SoperheroModel.find(filter);
    
        res.status(200).json(results);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error });
      }
}