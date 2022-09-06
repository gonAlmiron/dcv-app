import {useEffect, useState} from "react"
import {getItem} from "../../helpers/getItem"
import ItemDetail from "../ItemDetail/ItemDetail"
import Terrario from "../data/Terrario"


    const ItemDetailContainer = () => {

    const {item, setItem} = useState(null)
    

        useEffect (() => {
            getItem()
            .then((res) => {
                setItem(res)
            })
            .catch(err => console.log(err))
                

    }, [])

    return (

        <div>
              <Terrario/>

        </div>

    )


}

export default ItemDetailContainer