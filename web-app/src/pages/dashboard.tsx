
import { useEffect, useState } from "react";

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

    return (
        <>
            <p>React Workshop</p>
        </>
    )
}

export default Dashboard;