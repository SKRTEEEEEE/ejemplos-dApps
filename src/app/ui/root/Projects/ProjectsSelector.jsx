import { dataProjects } from "@/const/const"
import { Buttons } from "./Buttons"
import { Lottery } from "./Lottery"
import { Marketing } from "./Marketing"
import { MemberShip } from "./MemberShip"
import { Other } from "./Other"
import { SafeStorage } from "./SafeStorage"


export const ProjectsSelector = ({work})=> {
  const project = dataProjects.find(project => project.name === work);
  

  const components = {
    'Safe Storage': <SafeStorage />,
    'NFT MemberShip': <MemberShip />,
    'Lottery': <Lottery />,
    'Marketing 3.0': <Marketing />,
    'Other': <Other />
  };

  // const Component = components[work] || components['Other'];
  const Component = components[work]

  return (
    <>
      {Component}
      <Buttons id={project.id}/>
    </>
  );
}
