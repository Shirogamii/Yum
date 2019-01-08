const Discord = module.require("discord.js");
const urban = module.require("urban.js");

module.export.run = async (bot, message, args) => {
  if(args.length < 1) return messae.channel.send("Porfavor introduce algo.");
  console.log(args.join(" "));
}

module.export.help = {
  name: "urban"
}
