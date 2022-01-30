import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Dashboard.css';
function Dashboard()
{
    const [query,setQuery]=useState('');
    const [number,setNumber]=useState(0);
    const [intolerance,setIntolerance]=useState([]);
    let navigate=useNavigate();
    function clickHandler()
    {
        localStorage.setItem('query',query);
        localStorage.setItem('number',number);
        localStorage.setItem('intolerance',intolerance);
    }
    function clickHandler2()
    {
        localStorage.setItem('query','');
        localStorage.setItem('number',0);
        localStorage.setItem('intolerance','');
        localStorage.setItem('user',[]);
        navigate('/');
    }
    function handleCheckboxChange(event){
      let newArray = [...intolerance, event.target.value];
      console.log(newArray);
      setIntolerance(newArray);
    }
    return(
    <div >
      <div className=" grid container ">
          <button  onClick={clickHandler2} className="fluid ui button blue">Logout</button>
      </div>
      <div className="grid container ">
          <h2>Ingredient Search</h2>
      </div>
      <div className="grid container ">
          <h3>Search for simple whole foods</h3>
      </div>
      <div className="grid container">
          <h2>(fruits,vegetables,nuts,dairy etc .)</h2>
      </div>
      <div className="container">
        <form>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">s
            <input type="text" placeholder='query' onChange={(e)=>{setQuery(e.target.value)}} required/>
          </div>
          <div className="field">
            <input type="number" placeholder='number' onChange={(e)=>{setNumber(e.target.value)}} required/>
          </div>
          <input type="text"  placeholder="Choose Intolerance"  className='select-field' onClick={()=>{document.querySelector('.list').classList.toggle('show');}}></input>
          <div className='list' >
          <div><input type="checkbox" className="control-input" id="Dairy" value="Dairy"  onChange={handleCheckboxChange}/>Dairy</div>
          <div><input type="checkbox" className="control-input" id="Peanut" value="Peanut"  onChange={handleCheckboxChange}/>Peanut</div>
          <div><input type="checkbox" className="control-input" id="Soy" value="Soy"  onChange={handleCheckboxChange}/>Soy</div>
          <div><input type="checkbox" className="control-input" id="Egg" value="Egg"  onChange={handleCheckboxChange}/>Egg</div>
          <div><input type="checkbox" className="control-input" id="Seafood" value="Seafood"  onChange={handleCheckboxChange}/>Seafood</div>
          <div><input type="checkbox" className="control-input" id="Sulfite" value="Sulfite"  onChange={handleCheckboxChange}/>Sulfite</div>
          </div>
          <div className="field">
          <button onClick={clickHandler} className="fluid ui button blue">Get Details</button>
          </div>
        </div>
      </form>
    </div>
    </div>
    )
}
export default Dashboard;