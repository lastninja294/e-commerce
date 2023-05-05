import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";

import { store } from "@/Redux/store";

import App from "@/App";

import "@/styles/main.scss";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <HelmetProvider>
        <Provider store={store}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </Provider>
      </HelmetProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
