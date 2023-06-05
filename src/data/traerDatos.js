import datos from "./data.json";

export const traerProductos = () => {
    return (
        new Promise ((resolve, reject) => {
            resolve(datos)
        })
    )
};

export const traerItem = (id) => {
    return (
        new Promise ((resolve, reject) => {
            const item = datos.find((el) =>
                el.id === id
            )

            if (item) {
                resolve(item)
            } else {
                reject({error: "No existe el producto"})
            }
        })
    )
}