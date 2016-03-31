/**
 * Created by gillbeits on 31.03.16.
 */
"use strict";

export interface ISerializeConfigField {
    serialized_name: string;
    type: string;
}
export interface ISerializeConfig {
    fields: { [key: string]: ISerializeConfigField };
}
