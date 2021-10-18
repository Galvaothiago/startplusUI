import { Container, ContainerMenu, ContainerProfile } from './styles'
import { AiFillHome } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { FaPlus } from 'react-icons/fa'
import { MdSportsBasketball } from 'react-icons/md'
import { GiFilmSpool } from 'react-icons/gi'
import { GiTv } from 'react-icons/gi'
import { useEffect, useState } from 'react'
export function Header({ scrollValue }) {
    const [ showBackground, setShowBackground ] = useState(false)

    useEffect(() => {
        if(scrollValue > 5.00) {
            setShowBackground(true)
            return
        }
        setShowBackground(false)

    }, [scrollValue])
    return (
        <Container scrollValue={showBackground}>
           <ContainerMenu>
                <img src="/assets/STAR-PLUS-LOGO.png" alt="Star plus logo" />
                <a>
                    <AiFillHome />
                    <p>home</p>
                </a>
                <a>
                    <BiSearch />
                    <p>search</p>
                </a>
                <a>
                    <FaPlus />
                    <p>watchlist</p> 

               </a>
                <a>
                    <MdSportsBasketball />
                    <p>espn</p>
                </a>
                <a>
                    <GiFilmSpool />
                    <p>movies</p>
                </a>
                <a>
                    <GiTv />
                    <p>series</p>
                </a>
           </ContainerMenu>
           <ContainerProfile>
               <div>
                   <p>Thiago</p>
                   <img src="https://github.com/Galvaothiago.png" alt="profile photo" />
               </div>
           </ContainerProfile>
        </Container>
    )
}