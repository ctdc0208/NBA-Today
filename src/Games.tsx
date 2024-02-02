// import api from "./Data"

// async function Api() {
//     const fetchapi: object= await Api()
//     console.log(fetchapi)
// }


function GameStats() {
    return (
        <td className="pl-5 py-7 border-x border-border-card border-solid border-collapse table-auto">
            <table className="table-auto">
                <tbody>
                    <tr>
                        <td className="p-0">
                            <img 
                                className="h-6 w-6"
                                src="src\assets\Nba Team Logos\28.png" 
                                title="team logo"
                            />
                        </td>
                        <td className="p-0">
                            <div
                                className="ml-2"
                            >
                                Raptors
                            </div>
                        </td>
                        <td className="p-0 align-middle">
                            <div className="flex flex-row">
                                <div
                                    className="ml-28"
                                >
                                    118
                                </div>
                                <svg className="my-auto ml-2" aria-label="Winner" height="8" role="img" width="6"><polygon fill="#fff" points="6,0 6,8 0,4"></polygon></svg>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className=" ml-4 pl-4 pt-4 border-solid border-l-2 border-border-table  text-center">
                                Final
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-0">
                            <img 
                                className="h-6 w-6 mt-2"
                                src="src\assets\Nba Team Logos\5.png" 
                                title="team logo"
                            />
                        </td>
                        <td className="p-0">
                            <div
                                className="mt-2 ml-2 text-font-gray"
                            >
                                Bulls
                            </div>
                        </td>
                        <td className="p-0">
                            <div
                                className="mt-2 ml-28 text-font-gray"
                            >
                                117
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="pb-4 ml-4 pl-4 border-solid border-l-2 border-border-table text-justify align-text-top text-font-gray text-xs">
                            Wed, Jan 31
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>                        
        </td>       
    )
}

function Table(){
    return (
        <table className="border-y border-border-card border-solid border-collapse table-auto">
            <tbody className="bg-bg-card-black min-h-full text-font-white-game">
                <tr>
                   <GameStats />
                </tr>
            </tbody>
        </table>
    )
}

export default function Games() {
    return (
        <div className="h-svh bg-bg-black">
            <div className="flex flex-col w-760 mx-auto">
                <div className="text-font-white-game p-4">Today</div>
                    <Table />
            </div>
        </div>
    )
}