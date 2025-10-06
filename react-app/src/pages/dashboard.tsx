import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Layout from "../components/layout"

export type Aircraft = {
  tailNumber: string;
  status: string;
  previousLocation: string;
  nextLocation: string;
};

export interface DashboardData {
  airport: string;
  status: string;
  aircraft: Aircraft[];
};

function Dashboard() {

    // add the useEffect and useState here, working together to retrieve aircraft data from the api.

    return (
        <Layout>
        <TableContainer>
            <Table>
            <TableHead>
                <TableRow>
                <TableCell>Tail Number</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Previous Location</TableCell>
                <TableCell>Next Location</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>{/* Add the tile component here and pass in the data */}</TableBody>
            </Table>
        </TableContainer>
        </Layout>
    )
}

export default Dashboard;