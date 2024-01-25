import {Markup, Telegraf} from "telegraf";
import {Command} from "./command.class";
import {IBotContext} from "../context/context.interface";

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot);
    }

    handle(): void {
        this.bot.start((ctx) => {
            ctx.reply("Вам понравилось приложение?", Markup.inlineKeyboard([
                Markup.button.callback("Like", "app_like"),
                Markup.button.callback("Dislike", "app_dislike"),
            ]));
        });

        this.bot.action("app_like", (ctx) => {
            ctx.session.appLike = true;
            ctx.editMessageText("Круто!");
        });

        this.bot.action("app_dislike", (ctx) => {
            ctx.session.appLike = false;
            ctx.editMessageText("Грустно!");
        });
    }
}