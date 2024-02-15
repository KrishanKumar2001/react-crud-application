 //import  "./searchcourse.css "
 import { CiSearch } from "react-icons/ci";

const SearchCourse = ({handleSearch}) => {

 // console.log(handleSearch);
  return (
    <div className="search-bar">
      
      <input type="text" onInput={(e)=>handleSearch(e.target.value)} placeholder="search courses..."  />
      <span className="search-icon">
         <CiSearch></CiSearch>
      </span>
    </div>
  )
}

export default SearchCourse