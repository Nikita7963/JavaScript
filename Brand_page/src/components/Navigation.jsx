const Navigation = ()=>{
return(
    <nav>
    <div className="logo">
      <img src="/images/brand_logo.png" alt="Logo" />
    </div>

    <ul className='list'>
      <li href="#">Home</li>
      <li href="#">Location</li>
      <li href="#">About</li>
      <li href="#">Contact</li>
    </ul>
    <button>Login</button>
  </nav >
  );
};

export default Navigation;