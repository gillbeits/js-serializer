/**
 * Created by gillbeits on 31.03.16.
 */
"use strict";
import {User} from "./model/User";
import {Avatar} from "./model/Avatar";
import {Serializer} from "./Serializer";

var user = new User();
user.name = "gillbeits";
user.avatar = new Avatar("https://ru.gravatar.com/userimage/19181038/376c16b5db2e0a452dca35dc2990cc76.jpg");

console.log( Serializer.serialize(user) );
