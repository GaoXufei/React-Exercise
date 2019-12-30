import React from "react";
import { HashRouter, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from 'react-redux'
import routes from "@/routes";
import 'antd/dist/antd.css';
import '@/assets/reset.css';
import 'animate.css'
import store from '@/store';

const App: React.FC = (props: any) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </HashRouter>
    </Provider>
  );
};

export default App;
