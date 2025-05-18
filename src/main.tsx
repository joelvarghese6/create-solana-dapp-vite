import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Navbar } from '@/components/nav-bar';
import { HomePage } from '@/pages/home';
import { AccountsPage } from '@/pages/account';
import { SolanaProvider } from '@/components/solana/solana-provider';

const AppLayout = () => (
  <div className="flex flex-col h-screen overflow-hidden">
    <Navbar />
    <main className="flex-grow overflow-auto px-9 py-4 bg-gray-50">
      <Outlet />
    </main>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'accounts',
        element: <AccountsPage />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SolanaProvider>
      <RouterProvider router={router} />
    </SolanaProvider>
  </StrictMode>,
)
