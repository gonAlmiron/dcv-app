import { Terrario } from "../data/Terrario"

export const getItem = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(Terrario)
        }, 2000)
    }) 

}


