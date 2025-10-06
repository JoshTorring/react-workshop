import { TableCell, TableRow } from "@mui/material";

function Tile(props) {

    return (
        props.data.aircraft?.map((row, index) => (
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