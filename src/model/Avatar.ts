/**
 * Created by gillbeits on 31.03.16.
 */
"use strict";
import {ISerializable} from "../ISerializable";
import {ISerializeConfig} from "../ISerializeConfig";

export class Avatar implements ISerializable {
    public url: string;

    constructor (url: string) {
        this.url = url;
    }

    getConfig():ISerializeConfig {
        return {
            fields: {
                url: {
                    serialized_name: 'avatar_url',
                    type: 'string'
                }
            }
        }
    }
}
