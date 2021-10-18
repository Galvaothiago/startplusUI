import styled from 'styled-components'

export const Container = styled.header`
    width: calc(100% - 15px);
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${ props => props.scrollValue ? 'rgb(14, 11, 19)' : 'none' };
    padding: 0 1.5rem;
    position: fixed;
    z-index: 3;

    transition: all .2s ease-out;
    
`

export const ContainerMenu = styled.nav`
    width: 850px;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 6rem;
    }

    a {
        width: auto;
        text-decoration: none;
        display: flex;
        align-items: center;

        cursor: pointer;

        svg {
            margin-right: .8rem;
            font-size: .9rem;
            color: white;
        }

        p {
            text-transform: uppercase;
            color: white;
            font-family: 'Ubuntu';
            font-size:.9rem;
            font-weight: 600;
            letter-spacing: .06rem;
        }
    }


`

export const ContainerProfile = styled.div`
    width: 240px;
    height: auto;
    display: flex;
    justify-content: flex-end;
    
    div {
        display: flex;
        align-items: center;
        gap: 1rem;
        
        cursor: pointer;

        p {
            color: white;
            font-size: .95rem;
        }
        img {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
        }
    }
`