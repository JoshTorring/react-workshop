import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function Layout({children}) {
    return (
        <Box flexGrow={1}>
            <AppBar>
                <Toolbar>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Aircraft Planning Tool
                    </Typography>
                    <Typography>Login</Typography>
                </Toolbar>
            </AppBar>
            <Box>
                {children}
            </Box>
        </Box>
    )
}

export default Layout;