import { Header } from "./components/Header"
import { NotificationButton } from "./components/NotificationButton"
import { SalesCard } from "./components/SalesCard"

function App() {

  return (
    <>
      <Header />
      <main className=" ">
        <section className="pt-10 pr-3 ">
          <div className="w-full max-w-[900px] m-auto ">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
