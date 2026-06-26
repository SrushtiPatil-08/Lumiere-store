
import Smartwatch from "../Images/watch.png";
import mouse from "../Images/mouse.png";
import Headset from "../Images/Headset.png";
import { supabase } from "../supabase";
import { useEffect, useState } from "react";

export function ProductCards() {

  const [title,setTitle] = useState("")
  const [detail,setDetail] = useState("")
  const [price,setPrice] = useState("")
  const [url,setUrl] = useState("")
  const [showForm,setShowForm] = useState(false)
  const [products,setProducts] = useState([])
  const [editId,setEditId] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const staticProducts = [
  //    {
  //   title: "Smart Watch",
  //   detail: "Premium fitness smartwatch with health tracking",
  //   price: "₹2999",
  //   url: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw4408170d/images/Fastrack/Catalog/38203PP02K_1.jpg?sw=600&sh=600"
  // },
  // {
  //   title: "Wireless Headphones",
  //   detail: "Noise cancelling over-ear headphones",
  //   price: "₹4999",
  //   url: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?fm=jpg&q=60&w=3000"
  // },
  // {
  //   title: "Gaming Mouse",
  //   detail: "High precision RGB gaming mouse",
  //   price: "₹1499",
  //   url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSY8IHoJNhYHMe2J7xVAX-6wE1bb-v0diqQ&s"
  // }
  // ]

  async function addProducts(){
    setShowForm(false)

    await fetch("http://localhost:6001/create",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({title,detail,price,url})
    })

    setTitle("")
    setDetail("")
    setPrice("")
    setUrl("")
    fetchProducts();
  }

  async function fetchProducts(){
    const res = await fetch("http://localhost:6001/read")
    const data = await res.json()
    console.log(data);
    setProducts(data);
  }


  async function deleteProducts(id){
    await supabase.from("productCards").delete().eq("id",id)
    fetchProducts();
  }

  useEffect(() => {
    fetchProducts();
  },[])

  return (
    <>
      <style>
        {`
          .products{
            padding:100px 60px;
            background:white;
            text-align:center;
          }

          .products h1{
            margin-bottom:50px;
            font-size:3rem;
            color:black;
          }

          .product-grid{
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
            gap:30px;
          }

          .product-card{
            border-radius:25px;
            overflow:hidden;
            background:white;
            box-shadow:0 15px 30px rgba(0,0,0,.08);
            transition:.4s;
          }

          .product-card:hover{
            transform:translateY(-12px);
          }

          .product-image img{
            width:100%;
            height:100%;
            object-fit:cover;
            display:block;
          }

          .product-info{
            padding:25px;
          }

          .buy-btn{
            margin-top:15px;
            padding:12px 25px;
            border:none;
            border-radius:30px;
            background:#7C3AED;
            color:white;
            cursor:pointer;
          }

          .add-btn{
           padding:12px 25px;
           border:none;
           border-radius:30px;
           background:rgb(20, 94, 178);
           color:white;
           cursor:pointer;
           margin-bottom:30px;
         }

         .form-container{
          max-width:500px;
          margin:0 auto 30px;
          padding:20px;
          background:rgb(185, 189, 183);
          border-radius:15px;
        }

        .form-container input{
          width:100%;
          padding:10px;
          margin:8px 0;
          border:1px solid #777b7c;
          border-radius:10px;
          box-sizing:border-box;
        }

        .submit-btn{
        margin-top:15px;
        padding:12px 25px;
        border:none;
        border-radius:30px;
        background:rgb(18, 135, 40);
        color:white;
        }

        .close-btn {
        margin-top: 10px;
        padding: 12px 25px;
        border: none;
        border-radius: 30px;
        background: #dc1414;
        color: white;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
}

.close-btn:hover {
  background: #ba4343;
  transform: translateY(-2px);
}

.close-btn:active {
  transform: scale(0.98);
}
  .close-btn {
  margin-left: 10px;
}

.delete-btn {
  margin-top: 10px;
  padding: 12px 25px;
  border: none;
  border-radius: 30px;
  background: #dc2626;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.delete-btn:hover {
  background: #b91c1c;
  transform: translateY(-2px);
}

.delete-btn:active {
  transform: scale(0.98);
}

.update-btn {
  margin-top: 10px;
  padding: 12px 25px;
  border: none;
  border-radius: 30px;
  background: #4dc0d7;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.update-btn:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
}

        `}
      </style>

      <section className="products">

        <h1>Featured Products</h1>

        {
          showForm ? (<div className="form-container">
          <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          <input placeholder="Detail" onChange={(e) => setDetail(e.target.value)} />
          <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
          <input placeholder="Url" onChange={(e) => setUrl(e.target.value)} />
          <button className="submit-btn" onClick={addProducts}>Submit</button>
          <button className="close-btn" onClick={() => setShowForm(false)}>Close Form</button>
          <br/>
        </div>) : null
        }

        <button className="add-btn" onClick={()=>setShowForm(true)}>+ Add Product</button><br/><br/>

        <div className="product-grid">
          {products.map((item)=>(
            <div className="product-card" key={item.id}>
              <div className="product-image">
                <img src={item.url}/>
              </div>

              <div className="product-info">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <p>{item.price}</p>
                <button className="buy-btn">
                  Buy Now
                </button><br/>
                <button className="delete-btn" onClick={() => deleteProducts(item.id)}>Delete</button><br/>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}