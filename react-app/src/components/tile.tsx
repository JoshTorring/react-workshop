import { TableCell, TableRow } from "@mui/material";

interface tileProps {
    data: {
        airport: string;
        status: string;
        aircraft: Aircraft[]
    }
};

type Aircraft = {
	tailNumber: string;
	status: string;
	previousLocation: string;
	nextLocation: string;
}

function Tile(tileProps: tileProps) {

    return (
        tileProps.data.aircraft?.map((row, index) => (
            <TableRow key={index}>
                <TableCell>{row.tailNumber}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.previousLocation}</TableCell>
                <TableCell align="right">{row.nextLocation}</TableCell>
            </TableRow>
        ))
    )
}

export default Tile;