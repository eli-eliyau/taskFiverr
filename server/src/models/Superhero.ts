import mongoose, { Schema, Types } from "mongoose";


export interface ISoperhero {
    
    name: string
    intelligence: number|null 
    strength: number|null 
    speed: number|null 
    durability: number|null 
    power: number|null 
    img: string|null 
    combat:number|null 
    badOrGood: string|null 
}

const soperheroSchema: Schema = new Schema<ISoperhero>({
   
    name: { type: String, required: true },
    intelligence: { type: Number ,default:0 },
    strength: { type: Number  ,default:0 },
    speed: { type: Number ,default:0 },
    durability: { type: Number  ,default:0 },
    power: { type: Number  ,default:0 },
    img: { type: String   },
    combat: { type: Number  ,default:0 },
    badOrGood: { type: String },
});

const SoperheroModel = mongoose.model<ISoperhero>("soperheros", soperheroSchema);

export default SoperheroModel;