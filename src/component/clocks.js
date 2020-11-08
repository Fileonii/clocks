import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import Card from "react-bootstrap/Card";
function Clocks({ gmt, name, timezone }) {
  const TimeChanger = gmt * 3600000 - 3600000;
  const [value, setValue] = useState(new Date(Date.now() + TimeChanger));

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Clock value={value} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {name} timezone: GMT{timezone}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Clocks;
