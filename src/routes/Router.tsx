import { Routes, Route } from "react-router-dom";
import { Home } from "../screens/Home";

import { DefaultLayout } from "../screens/_layouts/default";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
