import React,{ useState} from 'react'
import menu from './data'
import Memusearch from "./Memusearch.js"
import Filtercomponents from './Filtercomponents'

const App = () => {

  // const [data, setdata] = useState(Menu)
  // const [search, setsearch] = useState([]);

  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState([]);


  
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (

    <>
 


    <div className="">

    this is nav bar
    </div>

    <div>
        
         <div className="headin">      
         <h1 className='h1'> our menu</h1>
        <div className='unserline'></div>
         </div>
      


      <div className="mapcontent">

    
        
            <Filtercomponents   categories={categories} filterItems={filterItems}  />
            <Memusearch menuitem={menuItems}/>
         

    
    </div>
       
    </div>
    </>
  )
}

export default App



// id: 9,
// title: 'quarantine buddy',
// category: 'shakes',
// price: 16.99,
// img: './images/item-9.jpeg',
// desc: `sk