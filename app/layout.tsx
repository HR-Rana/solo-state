import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'Solo State — Define Your Attitude',description:"Premium men's fashion by Solo State."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
