import Header from "./webpages/components/header";
import notFound from "../not-found";
import { ABeeZee } from 'next/font/google';

const inter = ABeeZee({
  subsets: ['latin'],
  weight: '400',
})
export default function webpagesLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    notFound()
    return (
      <div className={inter.className}>
        <Header/>
        {children}
      </div>
    );
  }