import { useEffect, useState } from "react"
import Selector from "./heroComponents/Selector"

type HeroTypes = {
    id: string;
    src: string;
}

type HeroResponse = {
    hero_images: HeroTypes[]
}
const HeroWidget = () => {
    const [res, setRes] = useState<HeroTypes[]>([])
    const [index, setIndex] = useState<number>(1)
    const indexLength = 9
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            // let isLoading : boolean = false
            try {
                const data = await fetch("./JSON/Amazon.json")
                const res: HeroResponse = await data.json()
                setRes(res.hero_images)
            }
            catch (error) {
                console.log(error)
            }
            finally {
                // isLoading = false
            }
        }
        fetchData()
    }, [])
    useEffect(() => {
        const interval : number  = setInterval(() => {
            setIndex(i => (i + 1) % indexLength)
        }, 5000);
        return () => clearInterval(interval)
    }, [indexLength])
    return (
        <>
            <div className="hero-widget-container h-[63vw] z-0 relative mb-0 overflow-visible ">
                <div className="h-[63vw]">
                    <div className="hero-wrapper h-[78vw] w-full overflow-hidden before:bg-[linear-gradient(-180deg,rgba(213,219,219,0)_45%,#E3E6E6_100%)] before:content-[''] before:absolute before:top-[50vw] before:bottom-0 before:left-0 before:right-0 before:w-full before:h-[28vw] before:z-1 before:pointer-none:">
                        <ol className="hero-ol w-full m-0 list-none h-full whitespace-nowrap overflow-x-scroll text-[#0f1111] tracking-[.4] ">
                            {res.length > 0 && (
                                <li key={res[index].id} className="hero-li w-full m-0 visible text-center align-top overflow-hidden min-h-full list-none inline-block whitespace-normal tracking-normal break-words">
                                    <div className="relative mt-0 pt-0 mb-[-25%] ml-auto mr-auto max-w-[1000px]  bg-white overflow-auto after:rounded-[.5rem] after:shadow-[inset_0_0_0_.3rem_#2162a1,inset_0_0_0_.6rem_#fff] after:content-[''] after:h-full after:left-0 after:absolute after:top-0 after:invisible after:w-full">
                                        <img src={res[index].src} alt={res[index].id} />
                                    </div>
                                </li>
                            )}
                        </ol>
                    </div>
                </div>
                <div className="touch-scroller bottom-[17px] leading-0 relative block text-center">
                    <ul className="touch-ul border-0 leading-0 m-0 p-0 w-full list-disc text-center text-[#0f1111]">
                        <Selector index={index} setIndex={setIndex} />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HeroWidget