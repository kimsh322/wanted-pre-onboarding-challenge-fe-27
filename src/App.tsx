import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/global.css";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import theme from "./styles/theme";
import { router } from "./router";

const queryClient = new QueryClient({
  defaultOptions: {},
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />;
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
