import { NotificationButton } from "../NotificationButton";



export function SalesCard2() {


  return (
    <>
      <section className="py-10 px-3 ">
        <div className="w-full max-w-[900px] m-auto ">
          <div className="py-8 px-3 rounded-xl bg-[#283142]">
            <h2 className="text-[#676fff] text-2xl leading-none mb-5">Vendas</h2>
            <div>
              <div className="mb-4 max-w-[300px]">
                <input className="w-full h-11 bg-[#1b2531] border-solid border-2 border-[#384459]
                rounded-md py-0 px-5 text-lg leading-none text-[#9aaabe]" type="text" />
              </div>
              <div className="mb-4 max-w-[300px]">
                <input className="w-full h-11 bg-[#1b2531] border-solid border-2 border-[#384459]
                rounded-md py-0 px-5 text-lg leading-none text-[#9aaabe]" type="text" />
              </div>
            </div>
            <div>
              <table className="w-full border-spacing-0 border-collapse">
                <thead className="h-14 text-base leading-none text-[#e9e9e9] font-bold">
                  <tr>
                    <th className="show992">ID</th>
                    <th className="show576">Data</th>
                    <th>Vendedor</th>
                    <th className="show992">Visitas</th>
                    <th className="show992">Vendas</th>
                    <th>Total</th>
                    <th>Notificar</th>
                  </tr>
                </thead>
                <tbody className="text-sm leading-none text-[#cfcfcf] text-center">
                  <tr className="h-20 border-solid border-t-2 border-[#5f6e82] hover:bg-[#384459] hover:rounded-md">
                    <td>#341</td>
                    <td>08/07/2022</td>
                    <td>Anakin</td>
                    <td>15</td>
                    <td>11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="flex justify-center">
                        <NotificationButton />
                      </div>
                    </td>
                  </tr>
                  <tr className="h-20 border-solid border-t-2 border-[#5f6e82] hover:bg-[#384459] hover:rounded-md">
                    <td>#341</td>
                    <td>08/07/2022</td>
                    <td>Anakin</td>
                    <td>15</td>
                    <td>11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="flex justify-center">
                        <NotificationButton />
                      </div>
                    </td>
                  </tr>
                  <tr className="h-20 border-solid border-t-2 border-[#5f6e82] hover:bg-[#384459 hover:rounded-md">
                    <td>#341</td>
                    <td>08/07/2022</td>
                    <td>Anakin</td>
                    <td>15</td>
                    <td>11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="flex justify-center">
                        <NotificationButton />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}