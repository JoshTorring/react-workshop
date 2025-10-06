import express from "express";

type Aircraft = {
	tailNumber: string;
	status: string;
	previousLocation: string;
	nextLocation: string;
};

type data = {
	airport: string;
	status: string;
	aircraft: Aircraft[]
}

const aircraftDetails: data = {
    "airport": "",
    "status": "",
    "aircraft": [
        {
            "tailNumber": "tail-001",
            "status": "Landed",
            "previousLocation": "Benson",
            "nextLocation": "Brize norton"
        },
        {
            "tailNumber": "tail-002",
            "status": "Taxiing",
            "previousLocation": "Lossiemouth",
            "nextLocation": "Marham"
        },
        {
            "tailNumber": "tail-003",
            "status": "Maintainence",
            "previousLocation": "Akrotiri",
            "nextLocation": "Boston"
        },
        {
            "tailNumber": "tail-004",
            "status": "Flight Servicing",
            "previousLocation": "Las Vegas",
            "nextLocation": "Paris"
        },
        {
            "tailNumber": "tail-005",
            "status": "Taxiing",
            "previousLocation": "Birmingham",
            "nextLocation": "St Mawgan"
        },
        {
            "tailNumber": "tail-006",
            "status": "Flight Servicing",
            "previousLocation": "London Luton",
            "nextLocation": "Dublin"
        }
    ]
}

const app = express();

const port = "3000";

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Response sent");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
