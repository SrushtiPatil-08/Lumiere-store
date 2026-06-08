import Smartwatch from "../Images/watch.png";
import mouse from "../Images/mouse.png";
import Headset from "../Images/Headset.png";

export function ProductCards() {
  const products = [
    { name: "Smart Watch", price: "₹2999" ,Image:Smartwatch},
    { name: "Wireless Headphones", price: "₹4999" ,Image:Headset},
    { name: "Gaming Mouse", price: "₹1499" ,Image:mouse},
  ];

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
        `}
      </style>

      <section className="products">
        <h1>Featured Products</h1>

        <div className="product-grid">
          {products.map((item,index)=>(
            <div className="product-card" key={index}>
              <div className="product-image">
                <img src={item.Image}/>
              </div>

              <div className="product-info">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button className="buy-btn">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}