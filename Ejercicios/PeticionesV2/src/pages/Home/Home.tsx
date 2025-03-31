import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

import { ModelObject } from "../../models/ModelObject";
import { ModelData } from "../../models/ModelData";

import "./Home.css";

const API_URL = "http://192.168.236.234:8080/objects"; //S'ha de canviar localhost per la IP correcte

function Home() {
    const [objects, setObjects] = useState<ModelObject[]>([]); //Lista dels objectes a mostrar
    const [newObject, setNewObject] = useState<string>(""); //Control de l'input de les dades d'objecte
    const [objectId, setObjectId] = useState<string>(""); //Control de l'input de ID

    useEffect(() => {
        fetchObjects();
    }, []);


    // Llamada a la API para obtener los objetos con axios
    const fetchObjects = async () => {
        axios.get(API_URL).then((response) => {
            const objects = response.data.map((obj: any) => {
                const modelObject = new ModelObject(obj.name, obj.data, obj.id);            
                return {
                    id: modelObject.id,
                    name: modelObject.name,
                    data: new ModelData(modelObject.data.photo, modelObject.data.description, modelObject.data.price)
                };
            });
            setObjects(objects);
        });
    };

    // Llamada hecha en clase con ayuda del profe.
    // const fetchObjects = async () => {
    //     axios.get(API_URL).then((response) => {
    //         const objects = response.data.map((obj: ModelObject) => {
    //             return {
    //                 id: obj.id,
    //                 name: obj.name,
    //                 data: new ModelData(obj.data.photo, obj.data.description, obj.data.price)
    //             };
    //         });
    //         setObjects(objects);
    //     });
    // };

    
    // Recuperar un objecto por ID con fetch
    const fetchObjectById = async () => {
        fetch(API_URL + "/" + objectId)
        .then((response) => response.json())
        .then((data) => {
            const modelObject = new ModelObject(data.name, data.data, data.id);
            const object = {
                id: modelObject.id,
                name: modelObject.name,
                data: new ModelData(modelObject.data.photo, modelObject.data.description, modelObject.data.price)
            };
            setObjects([object]);
        }
        );
    };
    
    // Crear un objeto por ID con axios
    const createObject = async () => {
        const [name, photo, description, price] = newObject.split(",").map((item) => item.trim());
    
        try {
            // Enviar la solicitud POST
            const response = await axios.post(API_URL, {
                name,
                data: {
                    photo,
                    description,
                    price: parseFloat(price),
                },
            });
    
            // Transformar los datos recibidos en un objeto ModelObject
            const obj = response.data;
            const modelObject = new ModelObject(obj.name, obj.data, obj.id);
            const newObj = {
                id: modelObject.id,
                name: modelObject.name,
                data: new ModelData(modelObject.data.photo, modelObject.data.description, modelObject.data.price),
            };
    
            // Actualizar la lista de objetos
            setObjects((prevObjects) => [...prevObjects, newObj]);
            setNewObject(""); // Limpiar el input
        } catch (error) {
            console.error("Error al crear el objeto:", error);
        }
    };
    
    // Actualizar un objeto por ID con fetch
    const updateObject = async (id: string) => {
        const [name, photo, description, price] = newObject.split(",").map((item) => item.trim());

        try {
            // Enviar la solicitud PUT
            const response = await fetch(API_URL + "/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    data: {
                        photo,
                        description,
                        price: parseFloat(price),
                    },
                }),
            });

            const data = await response.json();

            // Transformar los datos recibidos en un objeto ModelObject
            const modelObject = new ModelObject(data.name, data.data, data.id);
            const updatedObject = {
                id: modelObject.id,
                name: modelObject.name,
                data: new ModelData(modelObject.data.photo, modelObject.data.description, modelObject.data.price),
            };

            // Actualizar la lista de objetos
            setObjects((prevObjects) =>
                prevObjects.map((obj) => (obj.id === id ? updatedObject : obj))
            );
            // setNewObject(""); // Limpiar el input
        } catch (error) {
            console.error("Error al actualizar el objeto:", error);
        }
    };
    
    // Eliminar un objeto por ID con axios
    const deleteObject = async (id: string) => {
        try {
            const response = await axios.delete(API_URL + "/" + id);
            const obj = response.data;

            // Transformar los datos recibidos en un objeto ModelObject
            const modelObject = new ModelObject(obj.name, obj.data, obj.id);
            const deletedObject = {
                id: modelObject.id,
                name: modelObject.name,
                data: new ModelData(modelObject.data.photo, modelObject.data.description, modelObject.data.price),
            };

            console.log("Objeto eliminado:", deletedObject);

            // Actualizar la lista de objetos
            setObjects((prevObjects) => prevObjects.filter((obj) => obj.id !== id));
        } catch (error) {
            console.error("Error al eliminar el objeto:", error);
        }
    };

    //Actualizar el valor del objeto del input
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewObject(e.target.value);
    };

    //Actualizar el valor del ID del input
    const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
        setObjectId(e.target.value);
    };

    return (
        <div className="container">
            <h1>Online Store</h1>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Nom, foto, descripció, preu"
                    value={newObject}
                    onChange={handleInputChange}
                />
                <button onClick={createObject}>Crear producte</button>
            </div>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="ID producte"
                    value={objectId}
                    onChange={handleIdChange}
                />
                <button onClick={fetchObjectById}>Buscar per ID</button>
            </div>
            <button className="refresh-btn" onClick={fetchObjects}>
                Mostrar tots els productes
            </button>
            <div className="object-list">
                {objects.map((obj) => (
                    <div key={obj.id} className="object-card">
                        <img src={obj.data.photo} alt={obj.name} className="object-photo" />
                        <div className="object-details">
                            <h2>{obj.name}</h2>
                            <p>{obj.data.description}</p>
                            <p className="object-price">{obj.data.getFormattedPrice()}</p>
                            <button onClick={() => updateObject(obj.id!)}>Actualitzar</button>
                            <button
                                className="delete-btn"
                                onClick={() => deleteObject(obj.id!)}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
