import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { fireStoreDb } from "../firebaseConfig";
import { hover } from "@testing-library/user-event/dist/hover";

const FirebaseCrud = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewProductName] = useState("");
  const [newPrice, setNewProductPrice] = useState("");

  const [onItemChange, updateProductName] = useState("");
  const [updatedProductPrice, updateProductPrice] = useState("");

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(fireStoreDb, "products"));

    const data = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().name) {
        data.push({ id: doc.id, name: doc.data().name, price: doc.data().price, image: doc.data().image });
      }
    });
    setData(data);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const handleCreate = async () => {
    if(newItem && newPrice){
      await addDoc(collection(fireStoreDb, "products"), {
        name: newItem,
        image: "",
        price: newPrice,
      });
      fetchData();
      setNewProductName("");
      setNewProductPrice("");
    }
    // Add a new document in collection "cities"
  };

  const handleUpdate = async (id, newText, newPrice) => {
    if(newText && newPrice){
      await setDoc(doc(fireStoreDb, "products", id), {
        name: newItem,
        image: "",
        price: newPrice,
      });
      fetchData();
    }
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(fireStoreDb, "products", id));
    fetchData();
  };

  return (
    <div>
      <h2>CRUD App with Firebase</h2>
      <input
        type="text"
        style={{border: "2px solid black", padding: "10px 30px"}}
        placeholder="Please add Product Name"
        value={newItem}
        onChange={(e) => setNewProductName(e.target.value)}
      />
      <br/>
      <input
        type="number"
        style={{border: "2px solid black", margin: "10px 0px", padding: "10px 30px"}}
        placeholder="Please add Product Price"
        value={newPrice}
        onChange={(e) => setNewProductPrice(e.target.value)}
      /><br/>
      <button
        onClick={() => {
          handleCreate();
        }}
        style={{ padding: "10px 30px", border: "2px solid black", backgroundColor: "green", margin: "0px 50px", borderRadius: "5px"}}
      >
        Add Product
      </button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt="" srcset="" height={250} width={250} />
            <input
              type="text"
              placeholder="Update Product Name"
              defaultValue={item.name}
              onChange={(e) => updateProductName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Update Product Price"
              defaultValue={item.price}
              onChange={(e) => updateProductPrice(e.target.value)}
            />
            <button onClick={() => handleUpdate(item.id, onItemChange, updatedProductPrice)}>
              
              Update Product
            </button>
            <span> || </span>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirebaseCrud;
