// import api from "./Data"

// async function Api() {
//     const fetchapi: object= await Api()
//     console.log(fetchapi)
// }

export default function Games() {
    return (
        <div className="h-svh bg-bg-black">
            <div className="flex flex-col w-760 mx-auto">
                <div className="text-font-white-game p-4 border-border-card border-solid border-y">Today</div>
                <table>
                    <tbody className="bg-bg-card-black min-h-full text-font-white-game">
                        <tr>
                            <td className="pl-6 py-8">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img 
                                                    className="h-6 w-6"
                                                    src="src\assets\Nba Team Logos\28.png" 
                                                    title="team logo"
                                                />
                                            </td>
                                            <td>
                                                <div
                                                    className="ml-2"
                                                >
                                                    Raptors
                                                </div>
                                            </td>
                                            <td>
                                                <div
                                                    className="ml-40"
                                                >
                                                    118
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img 
                                                    className="h-6 w-6 mt-2"
                                                    src="src\assets\Nba Team Logos\5.png" 
                                                    title="team logo"
                                                />
                                            </td>
                                            <td>
                                                <div
                                                    className="mt-2 ml-2"
                                                >
                                                    Bulls
                                                </div>
                                            </td>
                                            <td>
                                                <div
                                                     className="mt-2 ml-40"
                                                >
                                                    117
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Final</td>
                                            <td>Today</td>
                                            <td>Video</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td className="pl-6 py-6">
                            {/* <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img 
                                                    className="h-6 w-6"
                                                    src="src\assets\Nba Team Logos\28.png" 
                                                    title="team logo"
                                                />
                                            </td>
                                            <td>
                                                <div
                                                    className="ml-4"
                                                >
                                                    Raptors
                                                </div>
                                            </td>
                                            <td>
                                                <div
                                                    className="ml-10"
                                                >
                                                    118
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img 
                                                    className="h-6 w-6"
                                                    src="src\assets\Nba Team Logos\5.png" 
                                                    title="team logo"
                                                />
                                            </td>
                                            <td>
                                                <div
                                                     className="ml-4"
                                                >
                                                    Bulls
                                                </div>
                                            </td>
                                            <td>
                                                <div
                                                     className="ml-10"
                                                >
                                                    117
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Final</td>
                                            <td>Today</td>
                                            <td>Video</td>
                                        </tr>
                                    </tbody>
                            </table> */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}