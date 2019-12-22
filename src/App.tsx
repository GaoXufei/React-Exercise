import React from "react";
import { HashRouter, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "@/routes";
import 'antd/dist/antd.css'
import '@/assets/reset.css'

const App: React.FC = (props: any) => {
  return <HashRouter><Switch>{renderRoutes(routes)}</Switch></HashRouter>;
};

export default App;
