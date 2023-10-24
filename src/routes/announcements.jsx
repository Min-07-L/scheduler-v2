import { Link } from "react-router-dom";
import TableRow from "./tablerow.jsx"
export default function Announcements() {
    return <div className="flex">
        <div class="overflow-x-auto table">
            <table class="table w-max">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Topic</th>
                        <th>Title</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody class="hv">
                    <TableRow date="2023.10.20" topic="Puzzle" title="Sudoku" username="Chris Di Antonio"/>
                    <TableRow date="2023.10.23" topic="AMC" title="AMC 12B" username="Min.lim07"/>
                </tbody>
            </table>
        </div>
    </div>;
}
