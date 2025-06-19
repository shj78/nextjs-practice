import ClientComponent from "../../component/client-component";
import ServerComponent from "../../component/server-component";
import styles from "./page.module.css";

export default function Home() {
  // console.log("인덱스 페이지 렌더링 - 서버:", typeof window === 'undefined' ? 'SERVER' : 'CLIENT');
  // console.log("window 존재:", typeof window !== 'undefined');
  // console.log("실행 환경:", typeof window === 'undefined' ? 'SERVER' : 'CLIENT');
  // console.log("==================");
  
  //결국 이 컴포넌트는 서버에서 실행이 되니 시크릿키를 작성해도 문제가 없다.
  //그래서 useEffect 같은 리액트훅(브라우저에서 실행됨)을 사용하면 에러가 난다.
  // useEffect(() => {});

  return (
    <div className={styles.page}>
      <h1>인덱스 페이지</h1>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
