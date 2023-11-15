import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Aside from "./Aside";
import Section from "./Section";
import { Route, Routes } from "react-router-dom";
import EmptyChat from "./EmptyChat";

function App() {
  return (
    <div className="App">
      <main>
        <Aside />
        <Routes>
          <Route path="/" element = {<EmptyChat/>} index={true}/>
          <Route
            path="/chat1"
            element={
              <Section
                name="Alex Smith"
                photo="1"
                msg="How to make website using html and css?"
                sendtime="06:04 PM"
                onlinetime="last seen 10 minutes ago"
              />
            }
          />
          <Route
            path="/chat2"
            element={
              <Section
                name="Amelia"
                photo="2"
                msg="How are you?"
                sendtime="14:19 PM"
                onlinetime="last seen 2 hours ago"
              />
            }
          />
          <Route
            path="/chat3"
            element={
              <Section
                name="Diana"
                photo="3"
                msg="Нестеп жатсың?"
                sendtime="00:08 PM"
                onlinetime="last seen 1 hours ago"
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
