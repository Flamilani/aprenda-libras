import { Configuration } from "./configuration.constant";
import { Moviments } from "./moviments.constant";

const config = Configuration;
const mov = Moviments;

export const Signs = [
    {
        id: "1",
        sign: "Futebol",
        moviment: mov[0].name,
        cm: config[2].id
    }
]