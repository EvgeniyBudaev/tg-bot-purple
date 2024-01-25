import {Context} from "telegraf";

export interface ISessionData {
    appLike: boolean;
}

export interface IBotContext extends Context {
    session: ISessionData;
}