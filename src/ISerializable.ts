/**
 * Created by gillbeits on 31.03.16.
 */
"use strict";
import {ISerializeConfig} from "./ISerializeConfig";

export interface ISerializable {
    getConfig() : ISerializeConfig;
}
