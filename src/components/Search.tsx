import React,{FC,useState,FormEvent}from 'react'
import { useDispatch } from 'react-redux'
import { setAlert } from '../store/actions/alertActions';
import { getWeahter, setLoading } from '../store/actions/weather.Action';

interface SearchProp{
  title:string;
}

 const Search:FC<SearchProp>= ({title})=>  {
  const dispatch = useDispatch();
  const [city,setCity] = useState('');

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setCity(e.currentTarget.value);
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(city.trim()=== ''){
     return dispatch(setAlert('** City is required **'))
    }
    dispatch(setLoading())
    dispatch(getWeahter(city));
    setCity('');
  }

  return (
    <div className="hero is-light has-text-centered">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{title}</h1>
        <form className="py-5" onSubmit={handleSubmit}>
          <input 
            className="input has-text-centered mb-2" 
            type="text" 
            placeholder="Enter city name" 
            style={{maxWidth: 300}} 
            value={city} 
            onChange={handleChange} 
          />
          <button className="button is-primary is-fullwidth" style={{maxWidth: 300, margin: '0 auto'}}>Search</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Search;


