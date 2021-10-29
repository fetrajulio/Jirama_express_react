import {ITest} from "../domain/ITest";
import Database from '../dbConfigs';
import {Schema} from "mongoose";
//maka base de donne ato am model
const {mongo: {model}} = Database;

const TestSchema: Schema<ITest> = new Schema<ITest>({text: {type: String, required: true}});

export default model<ITest>('Test',TestSchema);

