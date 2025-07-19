import CategoryNav from "./headerComponents/CategoryNav"
import LocationBar from "./headerComponents/LocationBar"
import NavBar from "./headerComponents/NavBar"
import SearchBar from "./headerComponents/SearchBar"

const Header =() => {
  return (
    <>
      <header className="header relative z-208 font-[inherit] text-xs leading-[1em] min-w-50">
        <NavBar/>
        <SearchBar/>
        <CategoryNav/>
        <LocationBar/>
      </header>
    </>
  )
}

export default Header