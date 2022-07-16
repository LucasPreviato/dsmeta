import { NotificationButton } from "../NotificationButton";


export function SalesCard() {

  return (
    <section className="pt-10 pr-2">
      <div className="w-full max-w-4xl m-auto pt-7 pr-2">
        <div className="bg-[#283142] ">
          <h2 className=" text-[#676fff] bg-[#283142] text-2xl mb-5">Vendas</h2>


          <div className="mb-4 max-w-xs">
            <input className="w-full h-10 bg-[#1b2531] border border-[#384459] rounded text-[#9aaabe] pt-0 pr-5 text-lg" type="text" />
          </div>
          <div className="mb-4 max-w-xs">
            <input className="w-full h-10 bg-[#1b2531] border border-[#384459] rounded text-[#9aaabe] pt-0 pr-5 text-lg" type="text" />
          </div>

        </div>

        <div>
          <table className="w-full border-spacing-0 border-collapse">
            <thead className="h-14 text-base text-[#e9e9e9] font-bold ">
              <tr>
                <th>ID</th>
                <th>DATA</th>
                <th>Vendedor</th>
                <th>Visitas</th>
                <th>Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
              </tr>
            </thead>
            <tbody className="text-sm font-body text-[#cfcfcf] text-center">
              <tr className=" h-16 border-t-2 border-[#5f6e82]">
                <td className="">#341</td>
                <td className="">08/07/2022</td>
                <td>Anakin</td>
                <td className="">15</td>
                <td className="">11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="flex justify-center">
                    <div >
                      <NotificationButton />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="">#341</td>
                <td className="">08/07/2022</td>
                <td>Anakin</td>
                <td className="">15</td>
                <td className="">11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="flex justify-center">
                    <div className="dsmeta-red-btn">
                      <NotificationButton />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div >
    </section >
  )

}