import { json, Links, Meta, Outlet, redirect, Scripts, ScrollRestoration } from '@remix-run/react'
import './styles/main.css'

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url)
  const headers: any = {}

  if (url.pathname.endsWith('/') && url.pathname !== '/') {
    // Remove forward-slash
    return redirect(url.pathname.slice(0, -1) + url.search, headers ? { headers } : undefined)
  } else {
    return json({ status: 'ok' }, headers ? { headers } : undefined)
  }
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="light">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
