export function About() {
  return (
    <>
      <style>
        {`
            .about{
            padding:140px 60px 100px; 
            background:black;
            text-align:center;
          }

          .section-title{
          font-size:3rem;
          font-weight:700;

          background:linear-gradient(135deg,#7C3AED,#06B6D4);
          -webkit-background-clip:text;
          background-clip:text;
          -webkit-text-fill-color:transparent;
          color:transparent;

  
          display:block;
          line-height:1.2;     
          margin:0 0 20px;       
          letter-spacing:1px;
}

          .about-desc{
            max-width:700px;
            margin:auto;
            color:#64748b;
            line-height:1.8;
            margin-bottom:60px;
          }

          .stats-grid{
            display:grid;
            grid-template-columns:
            repeat(auto-fit,minmax(250px,1fr));

            gap:30px;
          }

          .stat-card{
            background:white;

            padding:40px;

            border-radius:30px;

            box-shadow:
            0 15px 40px rgba(0,0,0,.08);

            transition:.4s;
          }

          .stat-card:hover{
            transform:
            translateY(-12px);
            background:rgb(0,0,76);

            box-shadow:
            0 25px 50px rgba(124,58,237,.18);
          }

          .stat-card h2{
            font-size:3rem;
            color:#7C3AED;
            margin-bottom:10px;
          }

          .stat-card p{
            color:#64748b;
            font-size:1.1rem;
          }
        `}
      </style>

      <section className="about" id="about">

        <h1 className="section-title">
          About Lumière
        </h1>

        <p className="about-desc">
          We bring together premium fashion,cutting-edge gadgets and lifestyle essentials for customers who value quality, style and innovation.
        </p>

        <div className="stats-grid">

          <div className="stat-card">
            <h2>50K+</h2>
            <p>Happy Customers</p>
          </div>

          <div className="stat-card">
            <h2>100+</h2>
            <p>Premium Brands</p>
          </div>

          <div className="stat-card">
            <h2>4.9★</h2>
            <p>Customer Rating</p>
          </div>

        </div>

      </section>
    </>
  );
}