import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { traerItem } from "../data/traerDatos";
import Items from "./Items";


const ItemDetail = () => {

    const [item, setItem] = useState(null);
    const idItem = useParams().id;

    useEffect(() => {
          traerItem(Number(idItem))
            .then(res => setItem(res))
    })
  return (
    <div>
        {item && <Items item={item} />}
    </div>
  )
}

export default ItemDetail;