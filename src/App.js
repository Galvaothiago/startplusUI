import styled from 'styled-components'
import { Header } from "./components/Header";
import { InfoMovie } from './components/InfoMovie';

import  info  from '../src/data-series.json'
import { useEffect, useState, useRef } from 'react';

import { useScrollPosition } from '@n8tb1t/use-scroll-position'


function App() {
  const movieInfo = info[0]

  const [ value, setValue ] = useState(0)
  const container = useRef(null)
  
  useEffect(() => {
    if(container.current) {
      const updateSCrollValue = () => {
        const element = container.current
        const { scrollTop, scrollHeight, offsetHeight } = element

        const progressScroll = (scrollTop / (scrollHeight - offsetHeight) * 100).toFixed(2)
        setValue(progressScroll)
      }

    container.current.addEventListener('scroll', updateSCrollValue)

    return () => container.current.removeEventListener('scroll', updateSCrollValue) 
    
    }

  }, [value, container])
  
  return (
    <Container ref={container} backgroundImg={movieInfo.backgroundImg} >
      <Overlay>
      <Header scrollValue={value}/>
      <ContainerContent id="scroll-id">
        <div id="test1">test</div>
        <InfoMovie info={movieInfo}/>
        <InfoMovie info={movieInfo}/>
        <InfoMovie info={movieInfo}/>
        <InfoMovie info={movieInfo}/>
        <InfoMovie info={movieInfo}/>
      </ContainerContent>
      </Overlay>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;

    
  background-image: url(${ ({ backgroundImg }) => backgroundImg });
  background-size: 120% auto ;
  background-position:center 40%;
  background-repeat: no-repeat;
  -webkit-box-shadow: inset 325px 36px 148px 20px rgba(0,0,0,1);
  -moz-box-shadow: inset 325px 36px 148px 20px rgba(0,0,0,1);
  box-shadow: inset 325px 36px 148px 20px rgba(0,0,0,1);
    
  position: fixed;
`
const ContainerContent = styled.div`
  width: 100%;
  min-height: 100%;
  height: auto;
  padding: 4.5rem 0;

  display: flex;
  flex-direction: column;

`

const Overlay = styled.div`
  background-image: radial-gradient(farthest-side at 73% 21%, transparent, rgb(14, 11, 19));
  /*position: absolute;
  
  top: 0;
  bottom: 0;  */
  opacity:.2;
  z-index: -1;

`

export default App;
