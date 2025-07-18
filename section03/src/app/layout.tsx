import "./globals.css";
import Link from "next/link";//Next 15 이후
//import { useRouter } from  "next/navigation"; //Next 15 이전
import style from "./layout.module.css";

interface RootLayoutProps {
  children: React.ReactNode;//렌더링 가능한 모든 타입 가능
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>){ //props 수정 방지
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>🌊 DEEPSEA BOOKS</Link>
          </header>
          <main>{children}</main>
          <footer>제작 @deepsea</footer>
        </div>
      </body>
    </html>
  );
}
