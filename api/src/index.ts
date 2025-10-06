import express from "express";
import cors from "cors";



type Aircraft = {
  tailNumber: string;
  status: string;
  previousLocation: string;
  nextLocation: string;
};

type Data = {
  airport: string;
  status: string;
  aircraft: Aircraft[];
};

// expanded list for more randomness
const allAircraft: Aircraft[] = [
  { tailNumber: "tail-001", status: "Landed", previousLocation: "Benson", nextLocation: "Brize Norton" },
  { tailNumber: "tail-002", status: "Taxiing", previousLocation: "Lossiemouth", nextLocation: "Marham" },
  { tailNumber: "tail-003", status: "Maintenance", previousLocation: "Akrotiri", nextLocation: "Boston" },
  { tailNumber: "tail-004", status: "Flight Servicing", previousLocation: "Las Vegas", nextLocation: "Paris" },
  { tailNumber: "tail-005", status: "Taxiing", previousLocation: "Birmingham", nextLocation: "St Mawgan" },
  { tailNumber: "tail-006", status: "Flight Servicing", previousLocation: "London Luton", nextLocation: "Dublin" },
  { tailNumber: "tail-007", status: "En Route", previousLocation: "Heathrow", nextLocation: "Gibraltar" },
  { tailNumber: "tail-008", status: "Delayed", previousLocation: "Prestwick", nextLocation: "Marham" },
  { tailNumber: "tail-009", status: "In Hangar", previousLocation: "Brize Norton", nextLocation: "None" },
  { tailNumber: "tail-010", status: "Landed", previousLocation: "Fairford", nextLocation: "Lossiemouth" },
  { tailNumber: "tail-011", status: "Departed", previousLocation: "Benson", nextLocation: "Akrotiri" },
  { tailNumber: "tail-012", status: "Ready for Takeoff", previousLocation: "Waddington", nextLocation: "Birmingham" },
];

// helper function to pick random unique aircraft
function getRandomAircraft(count: number): Aircraft[] {
  const shuffled = [...allAircraft].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const app = express();
app.use(cors());
const port = 4000; 

app.get("/", (req, res) => {
  const selectedAircraft = getRandomAircraft(3);

  const responseData: Data = {
    airport: "RAF Brize Norton",
    status: "Active",
    aircraft: selectedAircraft,
  };

  console.log("Sending data:", responseData);
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
