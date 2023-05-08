import Image from "next/image"
import { Header } from "@/components/layouts/Header/Header"

export default function Home() {
  return (
    <>
      <Header />
      <Image
        src="/images/kyoto_bgimg.jpg"
        alt="清水寺"
        height={100}
        width={200}
      />
      <Header />
    </>
  )
}
