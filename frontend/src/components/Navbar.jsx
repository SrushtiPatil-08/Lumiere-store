export function Navbar() {
  return (
    <>
      <style>
        {`
          .navbar{
            position:sticky;
            top:0;
            z-index:1000;

            display:flex;
            justify-content:space-between;
            align-items:center;

            padding:18px 60px;

            background:rgba(15,23,42,0.85);
            backdrop-filter:blur(12px);

            border-bottom:1px solid rgba(255,255,255,0.1);
          }

          .logo{
            font-size:2rem;
            font-weight:700;
            cursor:pointer;
            margin-bottom:10px;

            background:linear-gradient(
              135deg,
              #7C3AED,
              #06B6D4
            );

            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
          }

          .nav-links{
            display:flex;
            gap:35px;
          }

          .nav-links a{
            text-decoration:none;
            color:white;
            font-weight:500;
            position:relative;
            transition:0.3s;
          }

          .nav-links a::after{
            content:"";
            position:absolute;
            width:0%;
            height:2px;
            left:0;
            bottom:-6px;

            background:#06B6D4;
            transition:0.3s;
          }

          .nav-links a:hover::after{
            width:100%;
          }

          .nav-links a:hover{
            color:#06B6D4;
          }

          .nav-btn{
            padding:12px 25px;
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

          .nav-btn:hover{
            transform:translateY(-3px);
            box-shadow:
            0 10px 25px rgba(124,58,237,.4);
          }

          @media(max-width:768px){

            .navbar{
              padding:18px 25px;
              flex-direction:column;
              gap:15px;
            }

            .nav-links{
              gap:20px;
              flex-wrap:wrap;
              justify-content:center;
            }
          }
        `}
      </style>

      <nav className="navbar">
        <div className="logo">
          Lumiere
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <button className="nav-btn">
          Shop Now
        </button>
      </nav>
    </>
  );
}