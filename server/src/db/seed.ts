import axios from "axios";
import SoperheroModel, { ISoperhero } from "../models/Superhero";
require("dotenv").config({ path: "./.env" });

require('./connecing')


const seedData = async () => {


    try {
        for (let i = 1; i <= 200; i++) {
            const [superheroDetails, url, alignment] = await Promise.all([
                axios.get(`http://superheroapi.com/api/10225405115382482/${i}/powerstats`),
                axios.get(`https://superheroapi.com/api/10225405115382482/${i}/image`)
                ,
                axios.get(`https://superheroapi.com/api/10225405115382482/${i}/biography`)

            ]);

            const superhero = {
                ...superheroDetails.data,
                img: url.data.url,
                badOrGood: alignment.data.alignment

            };
            const { id, response, ...cleanSuperhero } = superhero;
            const formattedSuperhero = {
                ...cleanSuperhero,
                intelligence: Number(cleanSuperhero.intelligence) || 0,
                strength: Number(cleanSuperhero.strength) || 0,
                speed: Number(cleanSuperhero.speed) || 0,
                durability: Number(cleanSuperhero.durability) || 0,
                power: Number(cleanSuperhero.power) || 0,
                combat: Number(cleanSuperhero.combat) || 0
              };
            const newSuperhero = new SoperheroModel(formattedSuperhero);
            await newSuperhero.save()
        }


        console.log("finish");

    } catch (error) {
        console.error(error);
    }
};

seedData();
