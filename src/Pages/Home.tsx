import Header from "../Components/Header/Header"
import Menu from "../Components/Header/Menu/Menu"
import Main from "../Components/Main/Main"

const Home = () => {
  return (
    <>
      <Menu />
      <Header hasCat={true}/>
      <Main/>
    </>
  )
}

export default Home