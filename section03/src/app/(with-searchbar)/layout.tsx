//with-searchbar 폴더 안에 있는 모든 파일에 적용되는 레이아웃
import { ReactNode } from "react";
import Searchbar from "../../components/searchbar";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
}
