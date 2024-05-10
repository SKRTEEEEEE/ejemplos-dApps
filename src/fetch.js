import { Web3ProjectModel } from "./models/web3Projects-schema";
import { connectToDB } from "./utils/dbConnect";

export const fetchWeb3Projects = async () => {
    connectToDB();
    const web3projects = await Web3ProjectModel.find();
    return web3projects;
  }