import { Buttons } from "./Buttons"
import { Lottery } from "./Lottery"
import { Marketing } from "./Marketing"
import { MemberShip } from "./MemberShip"
import { Other } from "./Other"
import { SafeStorage } from "./SafeStorage"

export const ProjectsSelector = ({work})=> {
 
    return (
        <>
            {work === 'Safe Storage' ? (
                <>
            <SafeStorage />
            <Buttons urlDApp="/counter" urlInfo="/#" urlContrato="/#"/>
            </>
          ) : work === 'NFT MemberShip' ? (
            <>
            <MemberShip />
            <Buttons urlDApp="/counter" urlInfo="/#" urlContrato="/#"/>
            </>
          ) : work === 'Lottery' ? (
            <>
            <Lottery />
            <Buttons urlDApp="/nft-raffle" urlInfo="/#" urlContrato="/#"/>
            </>
          ) : work === 'Marketing 3.0' ? (
            <>
            <Marketing />
            <Buttons urlDApp="/counter" urlInfo="/#" urlContrato="/#"/>
            </>
          ) : (
            <Other />
          )}
       </>
    )

}