"use client"
import { useRouter } from "next/navigation";
const Nabvar = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      <h1 className="text-3xl" onClick={() => router.push("/")}> Ecommerce
        <span className="font-bold">Meli</span>
      </h1>
      <div className="items-center justify-between hidden sm:flex">
        <p>Menu desktop</p>
      </div>
      <div className="flex sm:hidden">
        <p>Menu mobile</p>
      </div>
    </div>
  )
}
export default Nabvar;