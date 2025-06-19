import ClientComponent from "../../../component/client-component";

export default async function Page({
    searchParams // 직접 받는게 서버 컴포넌트 특징, 클라이언트 컴포넌트는 props 불가
}: {

    // 이 코드는 동기
    // searchParams: {q?: string};
    // Next.js 15부터 searchParams는 Promise로 변경됨, 더 빠르기 처리하기 위해 변경
    searchParams: Promise<{q?: string}>; //q는 있을수도 없을수도~ 있으면 string, 없으면 undefined
}) {
    // Promise를 await으로 처리
    const resolvedSearchParams = await searchParams;
    
    return <div>Search 페이지 {resolvedSearchParams.q}
        <ClientComponent>
            <></>
        </ClientComponent>
    </div>;
}