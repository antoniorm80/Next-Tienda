"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

const SearchBar = () => {

  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if(name) {
      router.push(`/list?name=${name}`)
    }
  }
  
  return (
    <form className=" flex items-center justify-between gap-4 bg-lubou bg-opacity-15 p-2 px-4 rounded-full flex-1" onSubmit={handleSearch}>
      <input type="text" name="name" placeholder="search" className="flex-1 bg-transparent outline-none"/>
      <button className="cursor-pointer">
        <Image src="/search.png" alt="Buscar" width={16} height={16}  />
      </button>
    </form>
  )
}

export default SearchBar