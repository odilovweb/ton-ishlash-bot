const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");

const bot = new Telegraf("7435509761:AAFd3NZvVm7d5kWkTBTbFS9rUp49SlUXepo");

const isMemberFunc = async (ctx) => {
  const id = ctx.chat.id;

  const member = "member";

  const member1 = await ctx.telegram
    .getChatMember(`-100${1873339742}`, id)
    .then((s) => s.status)
    .catch((e) => console.log(e));

  const member2 = await ctx.telegram
    .getChatMember(`-100${2162433057}`, id)
    .then((s) => s.status)
    .catch((e) => console.log(e));

  if (member == "creator" || member == "member" || member == "adminstrator") {
    if (
      member1 == "creator" ||
      member1 == "member" ||
      member1 == "adminstrator"
    ) {
      if (
        member2 == "creator" ||
        member2 == "member" ||
        member2 == "adminstrator"
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

bot.start(async (ctx) => {
  const azomi = await isMemberFunc(ctx);
  console.log(azomi);

  if (azomi == true) {
    try {
      ctx.reply(
        `Hurmatli foydalanuvchi ushbu botimiz orqali , o'yinlar o'ynab
pul ishlashni o'rganasiz !

P.s: Hech qanaqa pul sarflamaysiz 😉
`,
        {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Sarmoyasiz TON ishlash 💎",
                  callback_data: "freeton",
                },
              ],
              [
                {
                  text: "Sarmoyasiz Notcoin ishlash 💰",
                  callback_data: "freenot",
                },
              ],
            ],
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      ctx.reply(
        `Hurmatli foydalanuvchi ushbu botimizdan foydalanish uchun quyidagi kanallarga obuna bo'lishingiz kerak 👇 !
  `,
        {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Telegram Loyihalar 🤖",
                  url: "https://t.me/+-yv3MGuLD_xhMWI6",
                },
              ],
              [
                {
                  text: "2 - Kanal 📢",
                  url: "https://t.me/+cJC9o2kujkswMzYy",
                },
              ],
              [
                {
                  text: "Tekshirish ✅",
                  url: "https://t.me/tondagi_oyinlar_bot?start=1",
                },
              ],
            ],
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
});
bot.on("callback_query", async (ctx) => {
  if (ctx.callbackQuery.data == "freeton") {
    try {
      ctx.reply(
        `Diqqat qiling , quyida ko'rsatilgan botlar xohlagan payt TON berishni to'xtatishi mumkin shu sababli o'yinlarga hech qanaqa pul kiritmasdan ton ishlang ❗❗❗

Hozirda to'ayotganlari 👇

1} Tonify - https://t.me/TonifyAppBot?start=841886966`
      );
    } catch (e) {
      console.log(e);
    }
  } else if (ctx.callbackQuery.data == "freenot") {
    try {
      ctx.reply(
        `Notcoin ishlash uchun 100 foiz ishonchli bot , bu notcoinni o'zini boti.
          
Ushbu botda siz pul sarflamasdan ham notcoin ishlay olasiz , lekin juda kam. Ko'proq notcoin ishlash uchun Platinum versiyasini sotib oling !

https://t.me/notcoin_bot?start=er_1927899
`
      );
    } catch (e) {
      console.log(e);
    }
  }
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
