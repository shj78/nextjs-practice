"use client";

import { useState } from "react";
// import { useRouter  } from "next/router"; // 페이지 라우터 버전 useRouter
import { useRouter } from "next/navigation";

export default function Searchbar(){
    const [search, setSearch] = useState("");
    const router = useRouter();

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onSubmit = ()=>{
        router.push(`/search?q=${search}`);
    };

    return (
        <div>
            <input value={search} onChange={onChangeSearch}/>
            <button onClick={onSubmit}>검색</button>
        </div>
    );
}