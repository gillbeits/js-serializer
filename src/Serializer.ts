/**
 * Created by gillbeits on 31.03.16.
 */

"use strict";
import {ISerializable} from "./ISerializable";

export class Serializer {
    static serialize(model: ISerializable) {
        let config = model.getConfig();
        let serializedModel = {};

        for (let key in config.fields) {
            if (config.fields.hasOwnProperty(key) && model.hasOwnProperty(key)) {
                switch (config.fields[key].type) {
                    case 'string':
                    case 'number':
                    case 'bool':
                        serializedModel[config.fields[key].serialized_name] = model[key];
                        break;
                    default:
                        if (Function.prototype.toString.call(model[key].constructor).match(/function (.*)\(/)[1] === config.fields[key].type) {
                            serializedModel[config.fields[key].serialized_name] = JSON.parse(Serializer.serialize(model[key]));
                        }
                        break;
                }
            }
        }

        return JSON.stringify(serializedModel);
    }
}
