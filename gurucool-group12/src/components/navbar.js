import React,{useState} from 'react';
import Button from './buttonLogin';
import Option from './option';
import { NavBarDropdown } from './navBarDropdown';
//import { Cards } from './cards';
//import SearchBar from './search';


const Navbar = () => {
    const [isFetched, setIsFetched] = useState(false);
    const [masterData, setMasterData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    
    const fetchTutors = async ()=>{
        await fetch("/data/tutors.json",
        { headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }).then((response)=>response.json())
        .then((results)=>{
          setMasterData(results.Tutors);
          setFilterData(results.Tutors);
        })
        .catch((error)=>{
          console.log("error", error);
        })
      }

    const onFetch = () => {
        setIsFetched(true);
        fetchTutors();
    };

    const onSearch = (e) => {
        let value = e.target.value;
         const pattern = /^[A-Za-z0-9]+$/;
        if (value === "" || pattern.test(value)) {
          setSearchValue(value);
          filterList(value);
        }
    }
    const filterList = (value)=>{
        let filteredValues= masterData.filter(o =>
            Object.keys(o).some(k => `${o[k]}`.toLowerCase().includes(value.toLowerCase())));
        setFilterData(filteredValues)
      }

    return (
        <div >
            <nav className="navbar navbar-expand-sm bg-info navbar-dark bg-dark ps-5 pe-5 navblack">
            <NavBarDropdown />
            {/* <Option symbol="p-2 bi bi-person" option="Know Your Tutors"/> */}
            <div className="collapse navbar-collapse justify-content-end pe-3">    
                     <a href="#" className="text-white p-4 nav-item nav-link navElementAdjust" onClick={onFetch}> 
                         <i className="p-2 bi bi-person"></i>Know Your Tutors</a>
            </div>
            <Option symbol="p-2 bi bi-calendar-check"option="Book An Appointment"/>
            <Button name="Sign Up"/>
            <Button name="Login"/>                        
            </nav>
            {/* Need to use Redux ? to pass states....
            <SearchBar setClass ={isFetched} /> */}
            <div className={`input-group searchBar ${isFetched?'searchBarOnfetch':''}`} onChange={onSearch}>
                <input type="text" className="p-2 form-control" placeholder="Search..."/>
                <button className="btn btn-outline-secondary"  type="button"> <i className="bi bi-search "></i></button>
            </div>
            {/* {isFetched?<Cards filterData = {filterData} />:null} */}
            
        </div>
        
    );
};

export default Navbar;
