export function Categories() {
  const categories = [
    { icon: "📱", name: "Electronics" },
    { icon: "👕", name: "Fashion" },
    { icon: "⌚", name: "Accessories" },
    { icon: "🎮", name: "Gaming" },
  ];

  return (
    <>
      <style>
        {`
          .categories{
            padding:100px 60px;
            background:#f8fafc;
            text-align:center;
          }

          .categories h1{
            font-size:3rem;
            margin-bottom:50px;
            color:#0F172A;
          }

          .cat-grid{
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
            gap:30px;
          }

          .cat-card{
            background:white;
            padding:40px;
            border-radius:25px;
            box-shadow:0 15px 30px rgba(0,0,0,.08);
            transition:.4s;
            cursor:pointer;
          }

          .cat-card:hover{
            transform:translateY(-12px);
            box-shadow:0 20px 40px rgba(124,58,237,.25);
          }

          .cat-icon{
            font-size:3rem;
          }

          .cat-card h3{
            margin-top:15px;
          }
        `}
      </style>

      <section className="categories">
        <h1>Shop By Category</h1>

        <div className="cat-grid">
          {categories.map((item,index)=>(
            <div className="cat-card" key={index}>
              <div className="cat-icon">{item.icon}</div>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}