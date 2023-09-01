// Importing required modules from React
import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Transitions from "./Transitions";

// Creating a new instance of QueryClient
const queryClient = new QueryClient();

export default function Layout() {
  return (
    // Wrap the application with the QueryClientProvider to provide React Query's QueryClient to the application
    <QueryClientProvider client={queryClient}>
      {/* Apply page transitions using the Transitions component */}
      <Transitions>
        <div className="site-wrapper">
          <Navbar />

          <main>
            {/* Use the Outlet component to render the nested route content */}
            <Outlet />
          </main>

          <Footer />
        </div>
      </Transitions>
    </QueryClientProvider>
  );
}
