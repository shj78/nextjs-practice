import ClientComponent from "../../../component/client-component";

export default async function Page({
    params,
}: {
    params: Promise<{id: string}>
}){
    const {id} = await params;
    return (
        <div>
            book/[id]: 페이지 렌더링 {id}
            <ClientComponent>
                <div>클라이언트 컴포넌트 내용</div>
            </ClientComponent>
        </div>
    );
}