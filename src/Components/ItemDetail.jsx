import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Items from "./Items";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const ItemDetail = () => {

    const [item, setItem] = useState(null);
    const idItem = useParams().id;

    useEffect(() => {
          const db = getFirestore();
          const queryDoc = doc(db,"productos", idItem);
          getDoc(queryDoc)
            .then(res => setItem({ id: res.id, ...res.data() }))
    }, [idItem])
  return (
    <div>
        {item && <Items item={item} />}
    </div>
  )
}

export default ItemDetail;