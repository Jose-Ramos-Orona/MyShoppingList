import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/features/store";

interface ProviderWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const providerWrapper = ({ children }: ProviderWrapperProps) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

export default providerWrapper;
