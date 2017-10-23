import { Schema } from "redux-orm";
import { Department, Employee } from "./models";

const schema = new Schema();
schema.register(Department, Employee);

export default schema;
