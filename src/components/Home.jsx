import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Footer from './Footer'



function Home() {
  return (
    <div>
        <Navbar/>
        <div className="con-1">
    
            <div className="con1-text">
              <h1>Savor Flavor, <span>Taste</span> Happiness</h1>
              <p>"Welcome to [Your Restaurant Name], where every meal is crafted with passion and served with warmth. From fresh ingredients to authentic flavors, we bring you a dining experience that feels like home. Sit back, relax, and let us treat you to delicious moments worth remembering."</p>
            </div>
                    <img src="re-1.jpg" alt="" />
        </div>
      <div className="con-2">
        <div className="menu1">
        <h1>SELEC<span>T</span></h1>
        <h1><span>Y</span>OUR</h1>
        <h1>MEN<span>U</span></h1>

        </div>
        {/* <div className="menu2">
          <div className="menu2-box-1">

          </div>
            <div className="menu2-box-2">
            
          </div>
                  </div> */}
                  <div class='pageOption'>
  <a href='#' class='option' data-inf='photo'>
    <img src="dosa.jpg" alt="" />
  </a>
  <a href='#' class='option' data-inf='cinema'>
    <img src="thali.jpg" alt="" />
  </a>
</div>
      </div>

      {/* menu-container */}
      <div className="manu-container">
       <div className="text"><h1>🍴 Restaurant Menu</h1></div>
     <div className="menu-big-con">
        <div className="menu-card">
        <h2>🥗 Starters</h2>
        <p>
<span>Veg Samosa (2 pcs) –</span> Crisp pastry filled with spiced potatoes & peas</p>
<p><span>Paneer Tikka –</span> Cottage cheese marinated & grilled in tandoor</p>
<p><span>Onion Bhaji –</span> Golden fried onion fritters</p>
       </div>

        <div className="menu-card">
        <h2> Main Course – Vegetarian </h2>
    <p><span>Paneer Butter Masala –</span> Crisp pastry filled with spiced potatoes & peas</p>
<p><span>Dal Tadka –</span> Cottage cheese marinated & grilled in tandoor</p>
<p><span>Chole Masala –</span> Golden fried onion fritters</p>
<p><span>Veg Biryani –</span> Golden fried onion fritters</p>
<p><span>Malai Kofta –</span> Golden fried onion fritters</p>

       </div>
     </div>




          <div className="menu-big-con2">
        <div className="menu-card">
        <h2> Breads & Rice 🫓</h2>
        <p>Butter Naan</p>
        <p>Garlic Naan</p>
        <p>Tandoori Roti</p>
        <p>Steamed Basmati Rice</p>
        <p>Jeera Rice</p>
       </div>

        <div className="menu-card">
        <h2>Sides 🥗 </h2>
       <p> Green Salad</p>
       <p>Raita (Boondi / Cucumber)</p>
       <p>Papad (Roasted / Fried)</p>
       <p>Pickles & Chutneys</p>
       </div>

       
        
     </div>
<div className="ab">    
   <div className="menu-card">
        <h2> Desserts 🍨</h2>
       <p>Gulab Jamun – Soft fried dumplings soaked in sugar syrup</p>
       <p>Rasmalai – Paneer patties in saffron milk</p>
       <p>Kheer – Rice pudding with cardamom & nuts</p>
       <p>Kulfi – Traditional Indian ice cream</p>
       </div></div>

       

      </div>
<div className="con3">
  <div className="con3-card">
    <Carousel/>


  </div>


</div>
<div className="cardd1">

  <div className="cardd-first">
  <div className="cardd-1">
<img src="samosa.webp" alt="" />
<div className="cardd-text"><p>Samosa</p></div>
  </div>
  
   <div className="cardd-1">
<img src="bhature.webp" alt="" />
<div className="cardd-text"><p>Chole Bhature</p></div>
    
  </div>
   <div className="cardd-1">
<img src="sandwich.jpeg" alt="" />
<div className="cardd-text"><p>Sandwich</p></div>

    
  </div>
   <div className="cardd-1">
<img src="meggie.jpeg" alt="" />
<div className="cardd-text"><p>Meggie</p></div>
    
  </div>
</div>

<div className="cardd-second">
  <div className="cardd-1">
<img src="gol.jpeg" alt="" />
<div className="cardd-text"><p>Gol Gappe</p></div>

  </div>
   <div className="cardd-1">
<img src="Dahi.jpg" alt="" />
<div className="cardd-text"><p>Dahi Bhalla</p></div>
    
  </div>
   <div className="cardd-1">
<img src="kachori.jpg" alt="" />
<div className="cardd-text">
  <p>Kachori</p></div>
    
  </div>
   <div className="cardd-1">
<img src="burger.jpg" alt="" />
<div className="cardd-text"><p>Burger</p>
</div>
    
  </div>
  </div>
  
  
</div>


      <div className="con4">
        <div className="con4-text">
        <h1>RESERVE A TABLE</h1>
        <p>To help us find the best table for you, select the preferred party size, date, and time of your reservation.

</p></div>
        <div className="con4-card">
<p></p>
<form>
  <label for="party size">Party Size</label> <br/>
  <div className='select'>
  <select name="party" id="party">
    <option value="1">1 guests</option>
    <option value="2">2 guests</option>
    <option value="3">3 guests</option>
    <option value="4">4 guests</option>
    <option value="5">5 guests</option>
    <option value="6">6 guests</option>
  </select>
</div>
   <label for="date">Date</label> <br />
   <input  type="date" />
  <br />

   <label for="time">Time</label> <br />
 <input type="time" />
  <button>Find a Table</button>
</form>

        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Home
