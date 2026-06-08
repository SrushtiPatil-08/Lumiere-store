export function Testimonials() {
  return (
    <>
      <style>
        {`
          .testimonials{
            padding:100px 60px;
            background:#f8fafc;
            text-align:center;
            color:;
          }

          .testimonials h1{
          color:black;
          }

          .testimonial-grid{
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
            gap:30px;
            margin-top:50px;
          }

          .testimonial{
            background:white;
            padding:30px;
            border-radius:20px;
            box-shadow:0 10px 25px rgba(0,0,0,.08);
            transition:.3s;
          }

          .testimonial:hover{
            transform:translateY(-10px);
          }

          .avatar{
            width:70px;
            height:70px;
            border-radius:50%;
            margin:auto;
            background:linear-gradient(
            135deg,
            #7C3AED,
            #06B6D4);
          }
        `}
      </style>

      <section className="testimonials">
        <h1>What Customers Say</h1>

        <div className="testimonial-grid">

          <div className="testimonial">
            <div className="avatar"></div>
            <h3>Rahul Sharma</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p>Amazing quality and delivery.</p>
          </div>

          <div className="testimonial">
            <div className="avatar"></div>
            <h3>Priya Patel</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p>Beautiful shopping experience.</p>
          </div>

          <div className="testimonial">
            <div className="avatar"></div>
            <h3>Amit Verma</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p>Highly recommended products.</p>
          </div>

        </div>
      </section>
    </>
  );
}