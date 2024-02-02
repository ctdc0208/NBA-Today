// import api from "./Data"

// async function Api() {
//     const fetchapi: object= await Api()
//     console.log(fetchapi)
// }


function GameStats() {
    return (
        <td className="pl-6 py-8">
            <table>
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
                        <td className="p-0">
                            <div
                                className="ml-4"
                            >
                                118
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="border-solid border-l-2 border-border-table ml-4 pl-4 text-center">
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
                                className="mt-2 ml-2"
                            >
                                Bulls
                            </div>
                        </td>
                        <td className="p-0">
                            <div
                                className="mt-2 ml-4"
                            >
                                117
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="pt-2 border-solid border-l-2 border-border-table ml-4 pl-4 text-center">
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
        <table>
            <tbody className="bg-bg-card-black min-h-full text-font-white-game">
                <tr>
                   <GameStats />
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
                <div className="text-font-white-game p-4 border-border-card border-solid border-y">Today</div>
                    <Table />
                    <Table />
            </div>
        </div>
    )
}