export function Hero() {
  return (
    <>
      <style>
        {`
          .hero{
            min-height:90vh;

            display:flex;
            justify-content:space-between;
            align-items:center;

            padding:80px;

            background:
            linear-gradient(
              135deg,
              #0F172A,
              #1E293B,
              #312E81
            );

            color:white;
            overflow:hidden;
          }

          .hero-left{
            flex:1;
          }

          .hero-left h1{
            font-size:4.5rem;
            line-height:1.1;
            margin-bottom:20px;
          }

          .gradient-text{
            background:linear-gradient(
              135deg,
              #7C3AED,
              #06B6D4
            );

            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
          }

          .hero-left p{
            max-width:550px;
            color:#cbd5e1;
            font-size:1.1rem;
            line-height:1.8;
          }

          .hero-buttons{
            margin-top:35px;
            display:flex;
            gap:20px;
          }

          .primary-btn{
            padding:15px 35px;
            border:none;
            border-radius:50px;

            background:linear-gradient(
              135deg,
              #7C3AED,
              #06B6D4
            );

            color:white;
            font-weight:600;
            cursor:pointer;
            transition:0.3s;
          }

          .primary-btn:hover{
            transform:translateY(-5px);
            box-shadow:
            0 12px 30px rgba(124,58,237,.4);
          }

          .secondary-btn{
            padding:15px 35px;
            border-radius:50px;
            border:1px solid rgba(255,255,255,0.2);

            background:transparent;
            color:white;

            cursor:pointer;
            transition:0.3s;
          }

          .secondary-btn:hover{
            background:rgba(255,255,255,0.1);
          }

          .hero-right{
            flex:1;
            display:flex;
            justify-content:center;
            align-items:center;
            position:relative;
          }

          .glass-card{
            width:260px;
            height:180px;

            background:rgba(255,255,255,0.08);

            backdrop-filter:blur(12px);

            border:1px solid rgba(255,255,255,0.15);

            border-radius:25px;

            position:absolute;

            display:flex;
            justify-content:center;
            align-items:center;

            font-size:1.4rem;
            font-weight:600;

            animation:float 4s ease-in-out infinite;
          }

          .card1{
            top:-50px;
            left:50px;
          }

          .card2{
            top:120px;
            right:20px;
            animation-delay:1s;
          }

          .card3{
            bottom:-40px;
            left:120px;
            animation-delay:2s;
          }

          @keyframes float{
            0%{
              transform:translateY(0px);
            }

            50%{
              transform:translateY(-20px);
            }

            100%{
              transform:translateY(0px);
            }
          }

          @media(max-width:900px){

            .hero{
              flex-direction:column;
              text-align:center;
              gap:70px;
              padding:60px 25px;
            }

            .hero-left h1{
              font-size:3rem;
            }

            .hero-buttons{
              justify-content:center;
              flex-wrap:wrap;
            }

            .hero-right{
              min-height:400px;
            }
          }
        `}
      </style>

      <section className="hero">

        <div className="hero-left">

          <h1>
            Premium
            <span className="gradient-text">
              {" "}Shopping
            </span>
            <br />
            Experience
          </h1>

          <p>
            Discover premium collections, luxury accessories,
            smart gadgets, and trending fashion products
            designed for modern lifestyles.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Products
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>

        </div>

        <div className="hero-right">

          <div className="glass-card card1">
            ⚡ Premium Quality
          </div>

          <div className="glass-card card2">
            🚀 Fast Delivery
          </div>

          <div className="glass-card card3">
            ⭐ Top Rated
          </div>

        </div>

      </section>
    </>
  );
}