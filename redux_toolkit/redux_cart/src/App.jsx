import { useEffect, useState } from 'react'
import './App.css'
import { add } from './store/Slices/cartSlice';
import {  useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect( () => {
    const fetchdata = async ()=>{
      const response = await fetch("https://fakestoreapi.com/products")
      const data1 = await response.json();
      console.log(data1);
      setData(data1);
    }
    fetchdata();

  }, [])
  const handleAdd = (product)=>{
    console.log(product);
    dispatch(add(product));
  }
  return (
    <>
      <div className="row container mx-auto">
    {
      data.slice(0,20).map((item)=> {return (
          <div className="col-12 col-md-4 col-lg-3 mb-5" key={item.id}>

      <div className="card align-items-center"  style={{width: '18rem'}}>
        <img src={item.image} style={{width: '15rem',height:'15rem'}} className="card-img-top -centertext object-fit-contain" alt="..." />
        <div className="card-body text-center">
          <button
           onClick={()=>{handleAdd(item)}}
            className="btn btn-primary">Add to cart</button>
        </div>
          </div>
      </div>
      )})
    }
    </div>
    </>
  )
}

export default App
