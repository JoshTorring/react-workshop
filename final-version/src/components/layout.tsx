import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

function Layout({children}:LayoutProps) {
    return (
        <Box flexGrow={1}>
            <AppBar>
                <Toolbar>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Aircraft Planning Tool
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box>
                {children}
            </Box>
        </Box>
    )
}

export default Layout;