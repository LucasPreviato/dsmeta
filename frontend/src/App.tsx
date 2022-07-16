import { Header } from "./components/Header"
import { NotificationButton } from "./components/NotificationButton"
import { SalesCard } from "./components/SalesCard"
import { SalesCard2 } from "./components/SalesCard/index2"

function App() {

  return (
    <>
      <Header />
      <main className=" ">
        <section className="">
          {/* <div className="w-full max-w-[900px] m-auto "> */}
          <SalesCard2 />
          {/* // </div> */}
        </section>
      </main>
    </>
  )
}

export default App
