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
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>ICON</td>
                                            <td>Raptors</td>
                                            <td>Score</td>
                                        </tr>
                                        <tr>
                                            <td>ICON</td>
                                            <td>Bulls</td>
                                            <td>Score</td>
                                        </tr>
                                        <tr>
                                            <td>Final</td>
                                            <td>Today</td>
                                            <td>Video</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>ICON</td>
                                            <td>Raptors</td>
                                            <td>Score</td>
                                        </tr>
                                        <tr>
                                            <td>ICON</td>
                                            <td>Bulls</td>
                                            <td>Score</td>
                                        </tr>
                                        <tr>
                                            <td>Final</td>
                                            <td>Today</td>
                                            <td>Video</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}