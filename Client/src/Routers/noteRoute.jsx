import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";

import { CreateNote } from "../pages/CreateNote";
import { EditNote } from "../pages/EditNote";

export const noteRoute = () => {
  return (
    <Router>
      <div>
        <h2>Notes Routes</h2>
        <section>
          <Route path="/create" Component={CreateNote} />
          <Route path="/edit/:id" Component={EditNote} />
        </section>
      </div>
    </Router>
  );
};
