import { Provider as ReduxProvider } from "react-redux";
import  { type JSX } from "react";
import store from "appconfig/redux-store";



const Providers = ({ children }: { children: JSX.Element }) => {
  return (
      <ReduxProvider store={store}>
          {children}
      </ReduxProvider>
  );
};

export default Providers;