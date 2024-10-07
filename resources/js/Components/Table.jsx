export const Table = () => {
  return (
    <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
        <div>
          <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">Projects</h6>
          <p className="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" strokeWidth="3" className="h-4 w-4 text-blue-gray-200">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd"></path>
            </svg>
            <strong>30 done</strong> this month
          </p>
        </div>
        <button aria-expanded="false" aria-haspopup="menu" id=":rt9:" className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
            </svg>
          </span>
        </button>
      </div>
      <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">companies</p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">members</p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">budget</p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">completion</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <img src="/img/logo-xd.svg" alt="Material XD Version" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md" />
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Material XD Version</p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <img src="/img/team-1.jpeg" alt="Romina Hadid" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white" />
                <img src="/img/team-2.jpeg" alt="Ryan Tompson" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5" />
                <img src="/img/team-3.jpeg" alt="Jessica Doe" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5" />
                <img src="/img/team-4.jpeg" alt="Alexander Smith" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5" />
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">$14,000</p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">60%</p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full font-sans rounded-full text-xs font-medium h-1">
                    <div className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-5 ">
                <div className="flex items-center gap-4">
                  <img src="/img/logo-invision.svg" alt="Redesign New Online Shop" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md" />
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Redesign New Online Shop</p>
                </div>
              </td>
              <td className="py-3 px-5 ">
                <img src="/img/team-1.jpeg" alt="Romina Hadid" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white" />
                <img src="/img/team-4.jpeg" alt="Alexander Smith" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5" />
              </td>
              <td className="py-3 px-5 ">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">$2,000</p>
              </td>
              <td className="py-3 px-5 ">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">40%</p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full font-sans rounded-full text-xs font-medium h-1">
                    <div className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <img src="/img/logo-atlassian.svg" alt="Add Progress Track" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md" />
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Add Progress Track</p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <img src="/img/team-2.jpeg" alt="Ryan Tompson" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white" />
                <img src="/img/team-4.jpeg" alt="Alexander Smith" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5" />
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">$3,000</p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">10%</p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full font-sans rounded-full text-xs font-medium h-1">
                    <div className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <img src="/img/logo-slack.svg" alt="Fix Platform Errors" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md" />
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Fix Platform Errors</p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <img src="/img/team-3.jpeg" alt="Jessica Doe" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white" />
                <img src="/img/team-1.jpeg" alt="Romina Hadid" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5" />
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">Not set</p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">100%</p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full font-sans rounded-full text-xs font-medium h-1">
                    <div className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-gradient-to-tr from-green-600 to-green-400 text-white" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <img src="/img/logo-spotify.svg" alt="Launch our Mobile App" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md" />
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Launch our Mobile App</p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <img src="/img/team-4.jpeg" alt="Alexander Smith" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white" />
                <img src="/img/team-3.jpeg" alt="Jessica Doe" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5" />
                <img src="/img/team-2.jpeg" alt="Ryan Tompson" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5" />
                <img src="/img/team-1.jpeg" alt="Romina Hadid" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5" />
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">$20,500</p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">100%</p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full font-sans rounded-full text-xs font-medium h-1">
                    <div className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-gradient-to-tr from-green-600 to-green-400 text-white" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <img
                    src="/img/logo-jira.svg"
                    alt="Add the New Pricing Page"
                    className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"
                  />
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                    Add the New Pricing Page
                  </p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <img
                  src="/img/team-4.jpeg"
                  alt="Alexander Smith"
                  className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white"
                />
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                  $500
                </p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                    25%
                  </p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full font-sans rounded-full text-xs font-medium h-1">
                    <div
                      className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                      style={{ width: '25%' }}
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}