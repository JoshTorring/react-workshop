import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Layout from "../components/layout"
import Tile from "../components/tile";
import React, { useEffect, useState } from "react";

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
    const [data, setData] = useState<DashboardData | null>(null);

    useEffect(() => {
        getData()
    }, []);

    function getData() {
        fetch("https://localhost:4000", {
            headers: { "Content-Type": "application/json" }
        })
        .then(res => res.json())
        .then(data => setData(data))
    }

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
                </Table>
                <TableBody>
                    <TableBody>{data && <Tile data={data} />}</TableBody>
                </TableBody>
            </TableContainer>
        </Layout>
    )
}

export default Dashboard;