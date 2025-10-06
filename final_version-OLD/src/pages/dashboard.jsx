import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Layout from "../components/layout"
import Tile from "../components/tile";
import React, { useEffect, useState } from "react";

function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000", {
            "Content-Type": "application/json"
        })
        .then(res => res.json())
        .then(data => setData(data))
    }, []);

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
                    <Tile data={data} />
                </TableBody>
            </TableContainer>
        </Layout>
    )
}

export default Dashboard;