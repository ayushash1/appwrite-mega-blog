import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
  client = new Client();
}


const service = new Service();
export default service;