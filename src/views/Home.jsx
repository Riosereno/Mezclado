import React, { useState } from 'react'
import{useDispatch, useSelector}  from 'react-redux';
import{reset} from '../store/slices/user.slice';
import ProductCard from '../components/common/ProductCard';
import{Form, useLoaderData} from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const{products, categories} = useLoaderData();
  const [categoryValue, setCategoryValue] = useState(null);
  return (
    <div>
      <h1> Home</h1>
      {isLogged && <button onClick={() => dispatch(reset())}> LogOut </button>}
      <section>
    <Form>
<fieldset>
  <legend>Category</legend>
  {categories.map(category => (
    <div key={category.id}>
          <label htmlFor={category.id + category.name}>{category.name}</label>
      <input 
      type="radio" 
      name="category" 
      value={category.id}
      checked={categoryValue?.id=== category.id}
      id={category.id + category.name}
      onChange={() => setCategoryValue(category)}
      style={{display:'none'}}
           
      />
      </div>
  ))}
  
</fieldset>
<button
 type ="submit"
className='className="flex flex-row justify-center items-center p-2 bg-orange-400 rounded-xl"'>
    </button>
</Form>
    </section>
      <section>
<ul>
  {products.map((product) =>(<ProductCard key={product.id} product={product}/>
  ))}
 
        </ul>
      </section>
    </div>
  );
};

export default Home;

