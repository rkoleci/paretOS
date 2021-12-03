import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { quotes } from "../libs/quotes";

const randomIndex = Math.floor(Math.random() * Math.floor(quotes.length));

/**
 * This component is responsible for showing some sweet motivational quotes while everything loads.
 * @TODO Issue #53
 */

const LoadingModal = () => {
  const [timeUp, setTimeUp] = useState(true)
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setTimeUp(true)
    }, 20 * 1000)
  }, [])

  return (
    <React.Fragment>
      <DialogContent style={{ overflow: "visible", textAlign: "center" }}>
        <div className="ipl-progress-indicator" id="spinner">
          <h1 id="header">Un Momento</h1>
          <div className="lds-dual-ring" />
        </div>{" "}
      </DialogContent>
      <div style={{ marginBottom: 400 }}>
        <DialogContent>
          <DialogContentText
            style={{
              textAlign: "center",
              color: "black",
              fontSize: 24,
              marginRight: "20%",
              marginLeft: "20%",
              textAlign: "center",
            }}
            id="now-loading"
          >
            {quotes[randomIndex].quote}
          </DialogContentText>
          <DialogContentText
            style={{ textAlign: "center", color: "black", fontSize: 20 }}
          >
            {quotes[randomIndex].author}
          </DialogContentText>
          {timeUp &&  <input type="submit" value="Reset" name="reset" onClick={() => history.push("/logout")} />}
        </DialogContent>
      </div>
    </React.Fragment>
  );
};

export default LoadingModal;
