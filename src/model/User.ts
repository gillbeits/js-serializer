/**
 * Created by gillbeits on 31.03.16.
 */

"use strict";
import {ISerializable} from "../ISerializable";
import {ISerializeConfig} from "../ISerializeConfig";
import {Avatar} from "./Avatar";

export class User implements ISerializable {
    public name: string;
    public avatar: Avatar;

    getConfig():ISerializeConfig {
        return {
            fields: {
                name: {
                    serialized_name: 'username',
                    type: 'string'
                },
                avatar: {
                    serialized_name: 'user_avatar',
                    type: 'Avatar'
                }
            }
        }
    }
}
