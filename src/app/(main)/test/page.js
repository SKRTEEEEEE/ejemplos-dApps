import { fetchWeb3Projects } from "@/fetch";
import { ObjectId } from "mongodb";

const TestPage = async () => {
    const projects = await fetchWeb3Projects();
    projects.push({
        _id: new ObjectId(),
        name: 'Other',
        contractUrl: "/#",
        path: "/#",
        false: false,
    })
    console.log(projects);
    return (
        <div>
            <h1>Test Page</h1>
            {projects.map(project => (
                <div key={project.id}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    )

}

export default TestPage;