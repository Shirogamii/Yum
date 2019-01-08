// Load up the discord.js library
const Discord = require('discord.js');
const prefix = "s!";
const ytdl = require('ytdl-core');
const urban = module.require('urban.js');

// This is your client. Some people call it `bot`, some people call it `self`,
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client({disableEveryone: true});

// Here we load the config.json file that contains our token and our prefix values.
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Vamo a darle`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`s!help`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`s!help`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`s!help`);
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  // Let's go with a few common example commands! Feel free to delete or change those.

if(command === "helpm"){

      let helpm = new Discord.RichEmbed()
    .addField("->  ban <@user>              ","Banear a un usuario del servidor incluye razon.")
    .addField("->  kick <@user>             ","Patear a un usuario del servidor incluye razon.")
    .addField("->  purge                    ","Borra los mensajes del chat.")
  	.addField("->  addrol <@user> [rol]     ","Añade el rol mencionado al usuario mencionado.")
  	.addField("->  removerol <@user> [rol]  ","Quita el rol mencionado del usuario mencionado.")
  	.setDescription("**Comandos de moderación de Yūm Hamasaki *prefix = s!***")
  	.setColor("#6667ff");

    message.author.send(helpm);
    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
}
if(command === "helpr"){
    let helpr = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField("->  cry","Muestra tu tristesa en un mensaje.")
    .addField("->  hug <@user>","Abrasa a alguien.")
    .addField("->  kiss <@user>","Besa a alguien.")
    .addField("->  kill <@user>","Mata a alguien.")
    .addField("->  suicide",". . .")
    .addField("->  boom","BOOM!!!")
    .addField("->  happy","Muestra que estas feliz.")
    .addField("->  dance","Baila.")
    .addField("->  angry","Muestra tu enojo.")
    .addField("->  confused","???")
    .addField("->  pat <@user>","Acaricia a alguien.")
    .addField("->  cuddle","Acurrucate con alguien.")
    .addField("->  sleep","Zzz")
    .addField("->  highfive","Choca los 5 con alguien.")
    .addField("->  blush","0//-//0")
    .addField("->  punch","Desata la ira de tus puños golpeando a alguien.")
    .addField("->  shrug",'idk')
    .addField("->  poke",'Molesta a alguien.')
    .setDescription("**Comandos de reacción de Yūm Hamasaki *prefix = s!***")
    .setColor("#ffb266");

    message.author.send(helpr);
    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
}
if(command === "helpu"){
    let helpu = new Discord.RichEmbed()
    .addField("->  roll [numero]",'Te da un numero al azar entre el 1 y el numero seleccionado.')
    .addField("->  waifu",'Te muestra una waifu al azar.')
    .addField("->  loli",'Ten cuidado con el FBI y la ONU.')
    .addField("->  8ball [pregunta]","Responde a tu pregunta.")
    .addField("->  ping                    ","Comprueba la latencia del bot y de tus mensajes.")
    .addField("->  avatar <@user>           ","Muestra el avatar de un usuario." )
    .addField("->  say [texto]              ","Hace que el bot diga un mensaje.")
    .addField("->  user <@user>             ","Muestra información sobre un usuario mencioando.")
    .addField("->  server                   ","Muestra información de un servidor determinado.")
    .addField("->  cookie                 ","Galletas >u<.")
    .addField("->  invite                 ","Genera una invitación para invitar al bot a otro servidor.")
    .addField("->  sayem [URL imagen] [texto]",'Envia un mensaje con imagen en el formato embed.')
    .addField("->  suggest [sugerencia]","Usa este comando para sugerir algo.")
    .setDescription("**Comandos de utilidad de Yūm Hamasaki *prefix = s!***")
    .setColor("#00cd66");

    message.author.send(helpu);
    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
}
if(command === "helpn"){
    let helpn = new Discord.RichEmbed()
  .addField("->  fuck <@user>              ",'Dale "amor" a esa persona especial.')
  .addField("->  suck <@user>              ",'Dale "amor" a esa persona especial de una manera diferente.')
  .setDescription("**Comandos NSFW de Yūm Hamasaki**")
  .setColor("#ff6667");

  message.author.send(helpn);
  message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
}
if(command === "help"){

    let help = new Discord.RichEmbed()
	.addField("->  help                    ","Muestra este mensaje.")
  .addField("->  helpm                   ","Muestra el mensaje de ayuda de los comandos de moderación.")
  .addField("->  helpr           ","Muestra el mensaje de ayuda de los comandos de reacción." )
  .addField("->  helpu              ","Muestra el mensaje de ayuda de los comandos de utilidad.")
  .addField("->  helpn             ","Muestra el mensaje de ayuda de los comandos de NSFW.")
	.setDescription("**Comandos de ayuda de Yūm Hamasaki *prefix = s!***")
	.setColor("#b266ff");


   message.author.send(help);
   message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
}
if(command === "say"){
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    message.channel.send(sayMessage);
  }
if(command === "kick"){
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    let perms = message.member.hasPermission("KICK_MEMBERS");
    if (!perms) return message.reply("No tienes permisos para usar este comando!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Menciona un miembro valido");
    if(!member.kickable)
      return message.reply("No puedo echar al usuario del servidor! Tiene un rol mas alto al tuyo? Tengo permisos para echarlo?");

    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No se ha incluido una razón";

    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Lo siento ${message.author} no pude echar al usuario por: ${error}`));
    message.reply(`${member.user.tag} fue echado por ${message.author.tag}, razón: ${reason}`);

  }
if(command === "ban"){
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    let perms = message.member.hasPermission("ADMINISTRATOR","BAN_MEMBERS");
    if (!perms) return message.reply("No tienes permisos para usar este comando!");

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Menciona un miembro valido");
    if(!member.bannable)
      return message.reply("No puedo banear al usuario del servidor! Tiene un rol mas alto al tuyo? Tengo permisos para banearlo?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No se ha incluido una razón";

    await member.ban(reason)
      .catch(error => message.reply(`Lo siento ${message.author} no pude banear al usuario por: ${error}`));
    message.reply(`${member.user.tag} fue baneado por ${message.author.tag}, razón: ${reason}`);
  }
if(command === "purge"){
    // This command removes all messages from all users in the channel, up to 100.
    let perms = message.member.hasPermission("MANAGE_MESSAGES");
    if (!perms) return message.reply("No tienes permisos para usar este comando!");
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);

    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Por favor dime un numero entre el 2 y el 100 para borrar los mensajes");

    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`No pude borrar esto por: ${error}`));}
if(command === 'avatar'){

      let co = ["#6667ff","#ff6667","#ffb266","#00cd66"];
      let rco = Math.floor((Math.random() * co.length));

      let img = message.mentions.users.first()
      if (!img) {

          const embed = new Discord.RichEmbed()
          .setImage(`${message.author.avatarURL}`)
          .setColor(co[rco])
          .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
          message.channel.send({ embed });

      } else if (img.avatarURL === null) {

          message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");

      } else {

          const embed = new Discord.RichEmbed()
          .setImage(`${img.avatarURL}`)
          .setColor(co[rco])
          .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
          message.channel.send({ embed });

      };
}
if(command === 'server'){

    var server = message.guild;

    let co = ["#6667ff","#ff6667","#ffb266","#00cd66"];
    let rco = Math.floor((Math.random() * co.length));

    const embed = new Discord.RichEmbed()
    .setThumbnail(server.iconURL)
    .setAuthor(server.name, server.iconURL)
    .addField('ID', server.id, true)
    .addField('Region', server.region, true)
    .addField('Creado el', server.joinedAt.toDateString(), true)
    .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
    .addField('Miembros', server.memberCount, true)
    .addField('Roles', server.roles.size, true)
    .setColor(co[rco])

   message.channel.send({ embed });

}
if(command === 'user'){

    let co = ["#6667ff","#ff6667","#ffb266","#00cd66"];
    let rco = Math.floor((Math.random() * co.length));

    let userm = message.mentions.users.first()
    if(!userm){
      var user = message.author;

        const embed = new Discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
        .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
        .addField('ID', user.id, true)
        .addField('Estado', user.presence.status, true)
        .addField('Apodo', user.presence.nickname != null ? user.presence.nickname.name : "Ninguno", true)
        .addField('Cuenta Creada', user.createdAt.toDateString(), true)
        .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
        .addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
        .setColor(co[rco])

       message.channel.send({ embed });
}else{
      const embed = new Discord.RichEmbed()
      .setThumbnail(userm.avatarURL)
      .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
      .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
      .addField('ID', userm.id, true)
      .addField('Estado', userm.presence.status, true)
      .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
      .setColor(co[rco])

     message.channel.send({ embed });
    }
}
if(command === 'addrol'){

    let miembro = message.mentions.members.first();
    let nombrerol = args.slice(1).join(' ');

    let role = message.guild.roles.find("name", nombrerol);
    let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");

    if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");

    if(message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
    if(!nombrerol) return message.channel.send('Escriba el nombre del rol a agregar, `-addrol @username [rol]`');
    if(!role) return message.channel.send('Rol no encontrado en el servidor.');

    miembro.addRole(role).catch(console.error);

    message.channel.send(`El rol **${role.name}** fue agregado correctamente a **${miembro.user.username}**.`);
}
if(command === 'removerol'){

    let miembro = message.mentions.members.first();
    let nombrerol = args.slice(1).join(' ');

    let role = message.guild.roles.find("name", nombrerol);
    let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");

    if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");

    if(message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
    if(!nombrerol) return message.channel.send('Escriba el nombre del rol a remover, `-removerol @miembro [rol]`');
    if(!role) return message.channel.send('Rol no encontrado en el servidor.');

    miembro.removeRole(role).catch(console.error);
    message.channel.send(`El rol **${role.name}** del miembro **${miembro.user.username}** fue removido  correctamente.`);
}
if(command === 'join'){
    let Canalvoz = message.member.voiceChannel;
    if (!Canalvoz || Canalvoz.type !== 'voice') {
    message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
    } else if (message.guild.voiceConnection) {
    message.channel.send('Ya estoy conectado en un canal de voz.');
    } else {
     message.channel.send('Conectando...').then(m => {
          Canalvoz.join().then(() => {
               m.edit(':white_check_mark: | Conectado exitosamente.').catch(error => message.channel.send(error));
         }).catch(error => message.channel.send(error));
     }).catch(error => message.channel.send(error));
    }}
if(command === 'leave'){
    let Canalvoz = message.member.voiceChannel;
    if (!Canalvoz) {
        message.channel.send('No estoy en un canal de voz.');
    } else {
        message.channel.send('Dejando el canal de voz.').then(() => {
        Canalvoz.leave();
        }).catch(error => message.channel.send(error));
    }
}
if(command === 'play'){

}
if(command === 'invite'){
  let li = await client.generateInvite(["ADMINISTRATOR"]);
  message.author.send(`:love_letter: Ten ${li}, con esto me podre unir a cualquier server que puedas administrar :love_letter:`);
  message.channel.send(`**${message.author.username}**, te acabo de enviar la invitación por mensaje privado`);
}
if(command === 'play'){
 if(message.author.id =='457684679688978444'){
 const streamOptions = { seek: 0, volume: 1 };
 if(!message.member.voiceChannel) return message.channel.send("¡No estas conectado a ningun canal de voz!");
 if(!args[0]) return message.channel.send("Porfavor envia un URL valido");
 let validate = await ytdl.validateURL(args[0]);
 if(!validate) return message.channel.send("Porfavor envia un URL valido");
 let info = await ytdl.getInfo(args[0]);
 let voiceConnection = message.member.voiceChannel.join()
  .then(voiceConnection => {
  const stream = ytdl(args[0], { filter : 'audioonly' });
  const streamDispatcher = voiceConnection.playStream(stream, streamOptions);
  })
  .catch(console.error);
 message.channel.send(`Ahora reproduciendo: **${info.title}**`);
}}
});
client.on('message', async message => {

    if (message.author.bot) return undefined;

    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();

if(message.content.startsWith(prefix + '8ball')){
 if(!args[1]) return message.reply("Por favor escribe una pregunta completa");                                                                                                                                                                                                               if(!args[2]) return message.reply("Por favor escribe una pregunta completa");

       let co = ["#6667ff","#ff6667","#ffb266","#00cd66"];
       let rco = Math.floor((Math.random() * co.length));


       let replies = ["Sí", "No", "¿Por qué?", "Pregunta de nuevo", "Tal vez", "No sé", "Definitivamente", " ¡Claro! "," Por supuesto! "," Por supuesto que no "];

       let result = Math.floor((Math.random() * replies.length));
       let question = args.join(" ");

       let ballembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor(co[rco])
       .addField("Pregunta", question)
       .addField("Respuesta", replies[result]);

      message.channel.send(ballembed);

}
if(message.content.startsWith(prefix + 'cry')){
       let re = ["https://media1.giphy.com/media/yarJ7WfdKiAkE/giphy.gif?cid=3640f6095c1b16254c6c4435637bd822", "https://media2.giphy.com/media/shVJpcnY5MZVK/giphy.gif?cid=3640f6095c1b16644c4f70384d85cd8e","https://media.giphy.com/media/13AsVQz5fUV916/giphy.gif","https://media.giphy.com/media/cUl8fuIG75QWs/giphy.gif","https://media.giphy.com/media/4iusP4Pbf1L8c/giphy.gif","https://media.giphy.com/media/PViTwIUp9A86s/giphy.gif","https://media.giphy.com/media/NHTqyT68fOEsU/giphy.gif","https://media1.tenor.com/images/ce52606293142a2bd11cda1d3f0dc12c/tenor.gif?itemid=5184314","https://media1.tenor.com/images/f7fde4b118501c8fa5cb1a5dd171beab/tenor.gif?itemid=5652242","https://media1.tenor.com/images/f5ec64b40d2adf7deb84e3c0e192ff32/tenor.gif?itemid=6194053","https://media1.tenor.com/images/031c7c348d3b86296976e2407723d4a8/tenor.gif?itemid=5014031","https://media1.tenor.com/images/c09cfb56ca4311502f8713712f6a96d1/tenor.gif?itemid=9052471","https://media1.tenor.com/images/80cdf21ba7a7a3c364469405f5faf852/tenor.gif?itemid=3550867","https://media1.tenor.com/images/8f6da405119d24f7f86ff036d02c2fd4/tenor.gif?itemid=5378935","https://media1.tenor.com/images/180ece0e4a1656131513bcc60afeec81/tenor.gif?itemid=5081292"];

       let rt = Math.floor((Math.random() * re.length));

       let color = 	["#075775","#074575","#0079a6","#0050a6","#002b5a"];
       let rcolor = Math.floor((Math.random() * color.length));


       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor(color[rcolor])
       .setImage(re[rt])
       .setDescription(`**${message.author.username}** esta llorando`);
  if(!args[0]) return message.channel.send(sadembed);
      message.channel.send(sadembed);
}
if(message.content.startsWith(prefix + 'hug')){
       let re = ["https://media.giphy.com/media/wnsgren9NtITS/giphy.gif","https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif","https://media.giphy.com/media/143v0Z4767T15e/giphy.gif","https://media.giphy.com/media/kvKFM3UWg2P04/giphy.gif","https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif","https://media.giphy.com/media/iMrHFdDEoxT5S/giphy.gif","https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif","https://media.giphy.com/media/svXXBgduBsJ1u/giphy.gif","https://media1.tenor.com/images/1069921ddcf38ff722125c8f65401c28/tenor.gif?itemid=11074788","https://media1.tenor.com/images/b4ba20e6cb49d8f8bae81d86e45e4dcc/tenor.gif?itemid=5634582","https://media1.tenor.com/images/f9c540c2b5cdb52f22ed835478b0a36f/tenor.gif?itemid=10751424","https://media1.tenor.com/images/074d69c5afcc89f3f879ca473e003af2/tenor.gif?itemid=4898650","https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093","https://media1.tenor.com/images/b77fd0cfd95f89f967be0a5ebb3b6c6a/tenor.gif?itemid=7864716","https://media1.tenor.com/images/4be3396644e87d3c201f8965104e57b7/tenor.gif?itemid=7539851"];

       let rt = Math.floor((Math.random() * re.length));

       let member = message.mentions.members.first();

       let color = 	["#00592f","#005759","#005945","#003e40","#077275"];
       let rcolor = Math.floor((Math.random() * color.length));

       let happy = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor(color[rcolor])
       .setImage(re[rt])
       .setDescription(`Toma un abrazo de mi parte **${message.author.username}**`);

       if(!args[0]) return message.channel.send(happy);

       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor(color[rcolor])
       .setImage(re[rt])
       .setDescription(`**${message.author.username}** abrazo a **${member.user.username}**`);
        message.channel.send(sadembed);
}
if(message.content.startsWith(prefix + 'kiss')){
 if (!args[0]) return message.channel.send("0//-//0 mejor menciona a alguien");
       let re = ["https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif","https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif","https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif","https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif","https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif?itemid=12612515","https://media1.tenor.com/images/621ceac89636fc46ecaf81824f9fee0e/tenor.gif?itemid=4958649","https://media1.tenor.com/images/a562410344e8b88fd737dfc9a4b6b1e1/tenor.gif?itemid=3560801","https://media1.tenor.com/images/bc877c3339fdb444abedb0c1289de1b0/tenor.gif?itemid=5198866","https://media1.tenor.com/images/d1a11805180742c70339a6bfd7745f8d/tenor.gif?itemid=4883557","https://media1.tenor.com/images/e0b46d664eecc78b09bfe36ccc7b1a04/tenor.gif?itemid=5139548"];

       let rt = Math.floor((Math.random() * re.length));

       let member = message.mentions.members.first();

       let color = ["#ff4d89","#ff4d5c","#ff1a2d","#ff0057"];
       let rcolor = Math.floor((Math.random() * color.length));
       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor(color[rcolor])
       .setImage(re[rt])
       .setDescription(`**${message.author.username}** beso a **${member.user.username}**`);
       message.channel.send(sadembed)
}
if(message.content.startsWith(prefix + 'kill')){
 if (!args[0]) return message.channel.send("Y-yo no quiero morir >-<");
       let re = ["https://media.giphy.com/media/rDOW7YUXV4IOA/giphy.gif","https://media0.giphy.com/media/UdiKYa4TbR9E4/giphy.gif","https://media.giphy.com/media/a5OCMAro7MGQg/giphy.gif","https://media.giphy.com/media/PtF2mH7t9SnK/giphy.gif","https://media.giphy.com/media/10ZuedtImbopos/giphy.gif","https://media1.giphy.com/media/28p7K4xfPHK8w/giphy.gif","https://media1.tenor.com/images/0304cf80269c43d51bab9554c04435e9/tenor.gif?itemid=5541092","https://media1.tenor.com/images/46051e203deaefc5642916c1eafa54a7/tenor.gif?itemid=3660367","https://media1.tenor.com/images/db1136b19969ca0809daffc3d93fc848/tenor.gif?itemid=9983954","https://media1.tenor.com/images/2c945adbbc31699861f411f86ce8058f/tenor.gif?itemid=5459053"];

       let rt = Math.floor((Math.random() * re.length));

       let member = message.mentions.members.first();

       let co = ["#ff0000","#6a00ff","#4a00b3","#2a0067"];
       let rco = Math.floor((Math.random() * co.length));
       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor(co[rco])
       .setImage(re[rt])
       .setDescription(`**${message.author.username}** mató a **${member.user.username}**`);
       message.channel.send(sadembed)
}
if(message.content.startsWith(prefix + 'suicide')){
       let re = ["https://media1.tenor.com/images/a5db1c26b710b8b834d8265bf97a6c79/tenor.gif?itemid=5091706","https://media1.tenor.com/images/47892bb88afc132a3afb775988208240/tenor.gif?itemid=5505166","https://media1.tenor.com/images/415f8c8ec573e813f8daccb945b03721/tenor.gif?itemid=11426235","https://media.giphy.com/media/WsWJZcJoxmLUk/giphy.gif","https://media.giphy.com/media/aSG7yg2hyMAik/giphy.gif","https://media1.tenor.com/images/11bb5e84bcc76e190c23ead6db8ec2d8/tenor.gif?itemid=8133523","https://media1.tenor.com/images/d7faa155695550b72a5b3602cad67f17/tenor.gif?itemid=7294134"];

       let rt = Math.floor((Math.random() * re.length));

       let color = ["#292929","#3d3d3d","#787878","#000000"];
       let rcolor = Math.floor((Math.random() * color.length));
       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor(color[rcolor])
       .setImage(re[rt])
       .setDescription(`**${message.author.username}** se suicidó`);
  if(!args[0]) return message.channel.send(sadembed);
      message.channel.send(sadembed);
}
if(message.content.startsWith(prefix + 'boom')){
       let re = ["https://media1.tenor.com/images/43d8827542eb6e5176fd086f8d2a80c9/tenor.gif?itemid=11942940","https://media1.tenor.com/images/49c8f70d352cc6ab01a5c313eee1975e/tenor.gif?itemid=9611830","https://media1.tenor.com/images/8ae23e58bf500996ff479b561ba5713c/tenor.gif?itemid=12148868","https://media1.tenor.com/images/8e6cfce6befb276ca09be0a888ae7574/tenor.gif?itemid=6094435","https://media1.tenor.com/images/e8504f00c19fdad68d7be3d6d53b772a/tenor.gif?itemid=9983661","https://media1.tenor.com/images/2feb3f373468b984ca125fb13a24ee34/tenor.gif?itemid=10250014","https://media1.tenor.com/images/f5880426a4152892751daae7372b1d55/tenor.gif?itemid=10162501","https://media1.tenor.com/images/63d98cd5b40c53f439ca5e38ea00cd97/tenor.gif?itemid=9964050"];

       let rt = Math.floor((Math.random() * re.length));

       let co = ["#ff8000","#ff4000","#ff1500","#ff3f00"];
       let rco = Math.floor((Math.random() * co.length));
       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor(co[rco])
       .setImage(re[rt])
       .setDescription(`BOOM!!!`);
  if(!args[0]) return message.channel.send(sadembed);
      message.channel.send(sadembed);
}
if(message.content.startsWith(prefix + 'happy')){
       let re = ["https://media.giphy.com/media/YY9MdZisfM3x6/giphy.gif","http://ohdearitseru.tumblr.com/post/38657189108/yatta","https://media1.tenor.com/images/b6a3064d14c5a713155bed0e3058b035/tenor.gif?itemid=8220101","https://media1.tenor.com/images/e8c09576c5dd23b948475c504060dd6f/tenor.gif?itemid=10999354","https://media1.tenor.com/images/334d85226cd3ae3eef6087368a825e83/tenor.gif?itemid=12045588","https://media1.tenor.com/images/c5fad21f9828d19044a58f8b84a6e14b/tenor.gif?itemid=6013419","https://media1.tenor.com/images/19d5709a39f5d5b4ff443ec4ae60bc4b/tenor.gif?itemid=6091873","https://media1.tenor.com/images/c8d13a4636c548e962d8d4fdb0eaa169/tenor.gif?itemid=12217236","https://media1.tenor.com/images/d627d2facd06abb496f97c5943b2f9ae/tenor.gif?itemid=11346577","https://media1.tenor.com/images/a784d25bc90f5e81ac6615f2b165d2e6/tenor.gif?itemid=9097669","https://media1.tenor.com/images/bb0cbe662c9c7fb3bd59e75a7214475d/tenor.gif?itemid=4838964","https://media1.tenor.com/images/b1a409cd573d94be3bdac0c7759b0414/tenor.gif?itemid=5959843","https://media1.tenor.com/images/a9c114df59d644d43e1da6f3e7db66ca/tenor.gif?itemid=4838961"];

       let rt = Math.floor((Math.random() * re.length));

       let color = ["#f4835d","#f4a95d","#f4cf5d","#f3f45d"];
       let rcolor = Math.floor((Math.random() * color.length));
       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor(color[rcolor])
       .setImage(re[rt])
       .setDescription(`**${message.author.username}** esta feliz`);
  if(!args[0]) return message.channel.send(sadembed);
      message.channel.send(sadembed);
}
if(message.content.startsWith(prefix + 'dance')){
       let re = ["https://media1.tenor.com/images/a46ad100db83c0abb116d3855301c940/tenor.gif?itemid=4665031","https://media1.tenor.com/images/824daa6db818c4123e4c485fb67cb37e/tenor.gif?itemid=7226219","https://media1.tenor.com/images/416286d69442ef1a8e87b80c31f722e7/tenor.gif?itemid=5853253","https://media1.tenor.com/images/b862a5735ca4acf5caf2413b0c8079ad/tenor.gif?itemid=4900427","https://media1.tenor.com/images/b3f5e4d07f90b5c347eb94629bd2f00d/tenor.gif?itemid=12057651","https://media1.tenor.com/images/2b036ce3339b7c2da7ee7cfc34d08fb0/tenor.gif?itemid=12931085","https://media1.tenor.com/images/b4c57b3e9215d8c680c837ec11e3392f/tenor.gif?itemid=10750731","https://media1.tenor.com/images/0775ee877645d4a35cf219d83854fb9c/tenor.gif?itemid=7880641","https://media1.tenor.com/images/766599022416cc0b7b7b1bd2040eb2db/tenor.gif?itemid=12039886","https://media1.tenor.com/images/2ba4b3c691dc6a4712ddf9eef7631ca0/tenor.gif?itemid=11984235","https://media1.tenor.com/images/23b9ab88db7299e78413555e0c57458e/tenor.gif?itemid=9007334","https://media.giphy.com/media/11lxCeKo6cHkJy/giphy.gif","https://media.giphy.com/media/WFuk38dnVhTjy/giphy.gif","https://cdn.weeb.sh/images/HkxwwOUXvZ.gif"];

       let rt = Math.floor((Math.random() * re.length));

       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor("#005945")
       .setImage(re[rt])
       .setDescription(`**${message.author.username}** esta bailando`);
  if(!args[0]) return message.channel.send(sadembed);
      message.channel.send(sadembed);
}
if(message.content.startsWith(prefix + 'angry')){
       let re = ["https://data.whicdn.com/images/143303695/original.gif","https://media1.tenor.com/images/40383ad4bf828866d7bd67f5fa15d56d/tenor.gif?itemid=5181787","https://i.gifer.com/ExLH.gif","https://thumbs.gfycat.com/GoodnaturedMemorableKomododragon-small.gif","https://media.giphy.com/media/lop8rMAJv0VfG/giphy.gif","https://media1.tenor.com/images/386fb4996e952415422e4de3f7ff9273/tenor.gif?itemid=6209492","https://media1.tenor.com/images/cb871efa727558862700f8f3f924df67/tenor.gif?itemid=5178234","https://media1.tenor.com/images/23632985df417dd0faf2fe7f1e5e80d3/tenor.gif?itemid=9180783","https://media1.tenor.com/images/6884c2aee4a1036465f8984aa52c9664/tenor.gif?itemid=5254221"];

       let rt = Math.floor((Math.random() * re.length));

       let color = 	["#ff0000","#ff1500","#ff2a00","#b31d00"];
       let rcolor = Math.floor((Math.random() * color.length));

       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor(color[rcolor])
       .setImage(re[rt])
       .setDescription(`**${message.author.username}** esta enojado`);
  if(!args[0]) return message.channel.send(sadembed);
      message.channel.send(sadembed);
}
if(message.content.startsWith(prefix + 'confused')){
       let re = ["https://media1.tenor.com/images/ea8a415b5533d169f336859c148cca71/tenor.gif?itemid=4665454","https://media1.tenor.com/images/b4e998013ffce08bd0416d499dfbd6be/tenor.gif?itemid=12171120","https://media1.tenor.com/images/e765e06eb21f7bdd41eb6605222c4f60/tenor.gif?itemid=6014356","https://media1.tenor.com/images/74125333c5491a32546ee9e9c3f6231f/tenor.gif?itemid=5155458","https://media1.tenor.com/images/4370d233d5a77bc6054ce55c2bd125d7/tenor.gif?itemid=5609852","https://media1.tenor.com/images/3a50af2c2e80cd74c13773b3a03b548e/tenor.gif?itemid=9449608","https://media1.tenor.com/images/84e8c1ff61ac0e86697639aeb24cb4b4/tenor.gif?itemid=12792503"];

       let rt = Math.floor((Math.random() * re.length));

       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor("#005945")
       .setImage(re[rt])
       .setDescription(`**${message.author.username}** esta confundido`);
  if(!args[0]) return message.channel.send(sadembed);
      message.channel.send(sadembed);
}
if(message.content.startsWith(prefix + 'pat')){

       let re = ["https://media1.tenor.com/images/d9b480bcd392d05426ae6150e986bbf0/tenor.gif?itemid=9332926","https://media1.tenor.com/images/f5176d4c5cbb776e85af5dcc5eea59be/tenor.gif?itemid=5081286","https://media1.tenor.com/images/c0bcaeaa785a6bdf1fae82ecac65d0cc/tenor.gif?itemid=7453915","https://media1.tenor.com/images/3e94b77bfc7d4e240bb530b347a84008/tenor.gif?itemid=10067393","https://media1.tenor.com/images/68d981347bf6ee8c7d6b78f8a7fe3ccb/tenor.gif?itemid=5155410","https://media1.tenor.com/images/3c5d866b3255fa4397171547ca923f62/tenor.gif?itemid=10469110","https://media1.tenor.com/images/70960e87fb9454df6a1d15c96c9ad955/tenor.gif?itemid=10092582","https://media1.tenor.com/images/bf646b7164b76efe82502993ee530c78/tenor.gif?itemid=7394758","https://media1.tenor.com/images/5d9e045a24227aca1150911d6c5165de/tenor.gif?itemid=7516528","https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif","https://media3.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif?cid=3640f6095c1b4b4349766b6c556fbe6a","https://media.giphy.com/media/109ltuoSQT212w/giphy.gif","https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif"];

       let rt = Math.floor((Math.random() * re.length));

       let member = message.mentions.members.first();

       let happy = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor("#005945")
       .setImage(re[rt])
       .setDescription(`Dejame acariarte **${message.author.username}**`);

       if(!args[0]) return message.channel.send(happy)

       let embed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor("#005945")
       .setImage(re[rt])
       .setDescription(`**${message.author.username}** acarició a **${member.user.username}**`);
       if(!args[1])message.channel.send(embed)
}
if(message.content.startsWith(prefix + 'cuddle')){
       let re = ["https://media1.tenor.com/images/3d62384321435408f50823ae6f5ca033/tenor.gif?itemid=12270770","https://media1.tenor.com/images/08de7ad3dcac4e10d27b2c203841a99f/tenor.gif?itemid=4885268","https://media1.tenor.com/images/8cab4f4c73547d077c56066461c40a5e/tenor.gif?itemid=12873196","https://media1.tenor.com/images/d0c2e7382742f1faf8fcb44db268615f/tenor.gif?itemid=5853736","https://media1.tenor.com/images/3b205574d0352d4d61687f835276566d/tenor.gif?itemid=12669039","https://media1.tenor.com/images/1a65319302b9e1c86a99a39e9a81084e/tenor.gif?itemid=3553099","https://media1.tenor.com/images/6e1f8079fe446e8bc245c25d7dae91a7/tenor.gif?itemid=12806537","https://media1.tenor.com/images/059aee4e62020119e2d9a1178c747eeb/tenor.gif?itemid=11860124","https://media1.tenor.com/images/149247926bdf594000415e42fb3bc98d/tenor.gif?itemid=12669024","https://media1.tenor.com/images/26b91d49ece30b8ec732ac5ba3ad8e2d/tenor.gif?itemid=5888683","https://media1.tenor.com/images/f65bd4bb3441b9d647d86b04eee6542e/tenor.gif?itemid=12669031","https://media1.tenor.com/images/d16a9affe8915e6413b0c1f1d380b2ee/tenor.gif?itemid=12669052"];

       let rt = Math.floor((Math.random() * re.length));

       let member = message.mentions.members.first();

       let happy = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor("#005945")
       .setImage(re[rt])
       .setDescription(`Dejame acurrucarme contigo **${message.author.username}**`);

       if(!args[0]) return message.channel.send(happy)

       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor("#005945")
       .setImage(re[rt])
       .setDescription(`**${message.author.username}** se acurruco con **${member.user.username}**`);
       message.channel.send(sadembed)
}
if(message.content.startsWith(prefix + 'sleep')){
       let re = ["https://media1.tenor.com/images/bc308ef7ed3753ae73f1ff047e14c554/tenor.gif?itemid=9920974","https://media1.tenor.com/images/8ac32a8e607dd874f2785eb75df78ed2/tenor.gif?itemid=5978209","https://media1.tenor.com/images/1cdece239ec7d0fb33d2976d623f5e77/tenor.gif?itemid=4718185","https://media1.tenor.com/images/b190ed9c1cde30f00026433c8b5463ed/tenor.gif?itemid=9340393","https://media1.tenor.com/images/67899e4ce154518e656cb2337b180de0/tenor.gif?itemid=7329024","https://media1.tenor.com/images/51612fc78b9dae95497aa78997e077bb/tenor.gif?itemid=5959873","https://media1.tenor.com/images/766a25de69e36c91d06726ba3113b234/tenor.gif?itemid=3468672","https://media1.tenor.com/images/a7e8e8f9fd0a8784012d8f14b09da4a8/tenor.gif?itemid=12048209","https://media1.tenor.com/images/a1389f5050b3fc852219d68266f58cc1/tenor.gif?itemid=5303075","https://media1.tenor.com/images/e35738edcf70fa24976fa862d0a9e32a/tenor.gif?itemid=9096283","https://media1.tenor.com/images/6b1d8cf7b9880bcfea290eea918b16fc/tenor.gif?itemid=5535357","https://media1.tenor.com/images/ac21cca8c2e6d7de42d23b69828afa76/tenor.gif?itemid=5662016","https://media1.tenor.com/images/b8c97de7b4a1d5189bb90c08a092059c/tenor.gif?itemid=7432079"];

       let rt = Math.floor((Math.random() * re.length));

       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor("#005945")
       .setImage(re[rt])
       .setDescription(`**${message.author.username}** se esta durmiendo o se quedó dormido`);
  if(!args[0]) return message.channel.send(sadembed);
      message.channel.send(sadembed);
}
if(message.content.startsWith(prefix + 'highfive')){
       let re = ["https://media1.tenor.com/images/7b1f06eac73c36721912edcaacddf666/tenor.gif?itemid=10559431","https://media1.tenor.com/images/c3263b8196afc25ddc1d53a4224347cd/tenor.gif?itemid=9443275","https://media1.tenor.com/images/9730876547cb3939388cf79b8a641da9/tenor.gif?itemid=8073516","https://media1.tenor.com/images/b910eef482ebf7f15aa6da0cc648f827/tenor.gif?itemid=5618288","https://media1.tenor.com/images/106c8e64e864230341b59cc892b5a980/tenor.gif?itemid=5682921","https://media1.tenor.com/images/e2f299d05a7b1832314ec7a331440d4e/tenor.gif?itemid=5374033"];

       let rt = Math.floor((Math.random() * re.length));

       let member = message.mentions.members.first();

       let five = new  Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor("#005945")
       .setImage(re[rt])
       .setDescription(`Chocá los 5 **${message.author.username}**`);
        if (!member) return message.channel.send(five);

       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor("#005945")
       .setImage(re[rt])
       .setDescription(`**${message.author.username}** chocó los 5 con **${member.user.username}**`);
       message.channel.send(sadembed)
}
if(message.content.startsWith(prefix + 'blush')){
       let re = ["https://media1.tenor.com/images/9eba52d0506b552b7ef6a1981c0cfcff/tenor.gif?itemid=8680309","https://media1.tenor.com/images/274fc34d3add3ce4cbb5716cb4f94f4f/tenor.gif?itemid=5841198","https://media1.tenor.com/images/09d75740089598b54342df3641dbbffc/tenor.gif?itemid=5615361","https://media1.tenor.com/images/ea8977dd6dc918c2d0fc253d714105f4/tenor.gif?itemid=10750489","https://media1.tenor.com/images/85be0c08818f1faa7cffbbec9cf7c02e/tenor.gif?itemid=4957566","https://media1.tenor.com/images/1796f5f2469c4777cadf2a1ab57c6c0d/tenor.gif?itemid=9768769","https://media1.tenor.com/images/f62cae32b30d364bf0a8a1e7432c2ddf/tenor.gif?itemid=10198325","https://media1.tenor.com/images/fc6b82c2c8c045a0b1e6fc91294292c5/tenor.gif?itemid=6215889","https://media1.tenor.com/images/8fbb6ba53ea92b8fafa071ab4c4c9e31/tenor.gif?itemid=7363038","https://media1.tenor.com/images/cc187b06f246e71b07613e3957d87e00/tenor.gif?itemid=5102126","https://media1.tenor.com/images/917f92a579076c08057a0a8cb69bf62d/tenor.gif?itemid=4436427","https://media1.tenor.com/images/52cd100cef837f6503ef506c3462a599/tenor.gif?itemid=7860164","https://media1.tenor.com/images/12a304e81b1d89ec65ef7d5091fb6be3/tenor.gif?itemid=5093031"];

       let rt = Math.floor((Math.random() * re.length));

       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor("#005945")
       .setImage(re[rt])
       .setDescription(`**${message.author.username}** se sonrojo`);
  if(!args[0]) return message.channel.send(sadembed);
      message.channel.send(sadembed);
}
if(message.content.startsWith(prefix + 'punch')){
 if (!args[0]) return message.channel.send("N-no me golpees");
       let re = ["https://media1.tenor.com/images/c621075def6ca41785ef4aaea20cc3a2/tenor.gif?itemid=7679409","https://media1.tenor.com/images/55507aea306782b916659085fc062909/tenor.gif?itemid=8932977","https://media1.tenor.com/images/965fabbfcdc09ee0eb4d697e25509f34/tenor.gif?itemid=7380310","https://media1.tenor.com/images/6afcfbc435b698fa5ceb2ff019718e6d/tenor.gif?itemid=10480971","https://media1.tenor.com/images/2487a7679b3d7d23cadcd51381635467/tenor.gif?itemid=11451829","https://media1.tenor.com/images/7a582f32ef2ed527c0f113f81a696ae3/tenor.gif?itemid=5012110","https://media1.tenor.com/images/517f63ce5ffc6426bddd17d7413ebaca/tenor.gif?itemid=5247335","https://media1.tenor.com/images/5511a8309a1719987a27aa7b1ee7da04/tenor.gif?itemid=12303482","https://media1.tenor.com/images/d37431cbc9bd68eca0d700c787bf33d0/tenor.gif?itemid=5521090"];

       let rt = Math.floor((Math.random() * re.length));

       let member = message.mentions.members.first();

       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor("#005945")
       .setImage(re[rt])
       .setDescription(`**${message.author.username}** golpeo a **${member.user.username}**`);
       message.channel.send(sadembed)
}
if(message.content.startsWith(prefix + 'shrug')){
       let re = ["https://media.giphy.com/media/xT1R9YFy0B4UhzrjmE/giphy.gif","https://media1.tenor.com/images/053a9ece4298fbb81f0ae5406e5fc2e3/tenor.gif?itemid=12787691","https://media1.tenor.com/images/07ad4dff1580660dd009f041cdeac7be/tenor.gif?itemid=10759884","https://media1.tenor.com/images/2fb21fca8bc49fcac434081c5d29a9aa/tenor.gif?itemid=9724581","https://media1.tenor.com/images/62fb4a540cffdb3605201a31c428a0e4/tenor.gif?itemid=12286564","https://thumbs.gfycat.com/MedicalDazzlingAzurewingedmagpie-size_restricted.gif","https://i.pinimg.com/originals/83/ce/94/83ce948166a598c00b08fb558b07f224.gif"];

       let rt = Math.floor((Math.random() * re.length));

       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor("#005945")
       .setImage(re[rt])
       .setDescription(`**${message.author.username}** no sabe nada`);
  if(!args[0]) return message.channel.send(sadembed);
      message.channel.send(sadembed);
}
if(message.content.startsWith(prefix + 'poke')){

       let re = ["https://media1.tenor.com/images/cbf38a2e97a348a621207c967a77628a/tenor.gif?itemid=6287077","https://media1.tenor.com/images/8fe23ec8e2c5e44964e5c11983ff6f41/tenor.gif?itemid=5600215","https://media1.tenor.com/images/2b55eb1befce3e843dec7e8feebf274b/tenor.gif?itemid=10168199","https://media1.tenor.com/images/3b2bfd09965bd77f2a8cb9ba59cedbe4/tenor.gif?itemid=5607667","https://media1.tenor.com/images/ab936c887562756472f83850426bf6ef/tenor.gif?itemid=11956062","https://media1.tenor.com/images/d2b08ce502740221b978d8e5e876b6e2/tenor.gif?itemid=12872012","https://media1.tenor.com/images/fd46d903c4a20a7e82519a78f15b2750/tenor.gif?itemid=8562185","https://media1.tenor.com/images/1236e0d70c6ee3ea91d414bcaf9f3aa4/tenor.gif?itemid=5015314","https://media1.tenor.com/images/90f68d48795c51222c60afc7239c930c/tenor.gif?itemid=8701034","https://media1.tenor.com/images/48086974f33a3e0114b2e0387f812ae4/tenor.gif?itemid=12360399","https://media1.tenor.com/images/1a64ac660387543c5b779ba1d7da2c9e/tenor.gif?itemid=12396068","https://media1.tenor.com/images/3b9cffb5b30236f678fdccf442006a43/tenor.gif?itemid=7739077"];

       let rt = Math.floor((Math.random() * re.length));
       let member = message.mentions.members.first();

       let color = 	["#00592f","#005759","#005945","#003e40","#077275"];
       let rcolor = Math.floor((Math.random() * color.length));

       let happy = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor(color[rcolor])
       .setImage(re[rt])
       .setDescription(`**Yūm Hamasaki** molesta a **${message.author.username}**`);

       if(!args[0]) return message.channel.send(happy)

       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor(color[rcolor])
       .setImage(re[rt])
       .setDescription(`**${message.author.username}** molesta a **${member.user.username}**`);
       message.channel.send(sadembed)
}
if(message.content.startsWith(prefix + 'cookie')){
       let re = ["https://media1.tenor.com/images/cde2279d47be9c6552308d97f5ab935a/tenor.gif?itemid=12138523","https://media1.tenor.com/images/05fa1ea1401a118c9077fe65f3f20ef6/tenor.gif?itemid=11986217","https://media1.tenor.com/images/51a659cee3d3d2b1d59014d967aafdc1/tenor.gif?itemid=5414301","https://media1.tenor.com/images/ed0e13dbf7825931962b21e716f9c949/tenor.gif?itemid=5904316","https://media1.tenor.com/images/99e562316f8e5b5fa996aee2cfb0d03b/tenor.gif?itemid=6107497","https://media1.tenor.com/images/d25f5b8bc0dd1aa2e9d0dbc3c4e87ab7/tenor.gif?itemid=12390224","https://media.giphy.com/media/O8XZwrrU4NQC4/giphy.gif","https://media.giphy.com/media/L0nV2FkR5RpkY/giphy.gif"];

       let rt = Math.floor((Math.random() * re.length));

       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor("#005945")
       .setImage(re[rt])
       .addField(`Galletas >u<`, ":cookie: :star2:");
  if(!args[0]) return message.channel.send(sadembed);
      message.channel.send(sadembed);
}
if(message.content.startsWith(prefix + 'roll')){
      if(!args[0]) return message.channel.send("Ingresa un numero valido.");
       let rl = args.slice(0).join(" ");
       let rt = Math.floor((Math.random() * rl)) + 1;

       let sadembed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor("#005945")
       .addField(`${message.author.username} tu numero es...`, rt);
       if(!args[1]) return message.channel.send(sadembed);
       if(!args[2]) return message.channel.send("Ingresa un **numero** valido.");
}
if(message.content.startsWith(prefix + 'waifu')){
  let i1 = ["https://data.whicdn.com/images/144204045/superthumb.jpg?t=1414642977","https://vignette.wikia.nocookie.net/no-game-no-life/images/0/09/Shiro.png/revision/latest?cb=20170323163115","https://images6.alphacoders.com/673/thumb-1920-673373.png","https://i.pinimg.com/originals/15/bf/f0/15bff08123f01b3105740727d2b070e5.jpg"];
  let r1 = Math.floor((Math.random() * i1.length));

  let w1 = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#e600ad")
  .setImage(i1[r1])
  .addField("Shiro","No Game No Life")

  let i2 = ["https://pm1.narvii.com/6219/4916356ad4404b5fa67384b69e3cc2d007b0a25c_hq.jpg","https://pbs.twimg.com/profile_images/954809325364678656/woIBVq2l_400x400.jpg","https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAvvrhq_LS4OlfVbC8AHveN4","https://steamusercontent-a.akamaihd.net/ugc/608349439305561896/1CD06A81151885164F53C03941765BAEE808A2D1/"];
  let r2 = Math.floor((Math.random() * i2.length));

  let w2 = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#e600ad")
  .setImage(i2[r2])
  .addField("Tsukiko Tsutsukakushi","Hentai Ōji to Warawanai Neko")

  let i3 = ["https://img.fireden.net/a/image/1520/79/1520798438470.png","https://orig00.deviantart.net/ca0a/f/2016/216/b/b/re_zero_chibi_rem_by_potato_land-dacnf29.jpg","https://data.whicdn.com/images/264283354/large.jpg"];
  let r3 = Math.floor((Math.random() * i3.length));

  let w3 = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#e600ad")
  .setImage(i3[r3])
  .addField("Rem","Re:Zero Kara Hajimeru Isekai Seikatsu")

  let i4 = ["http://images4.fanpop.com/image/photos/22500000/taiga-aisaka-aisaka-taiga-22553889-225-350.jpg","https://vignette.wikia.nocookie.net/tora-dora/images/8/82/E17_-_9.png/revision/latest?cb=20160728131220","https://vignette.wikia.nocookie.net/wikia-toradora/images/6/60/46644.jpg/revision/latest?cb=20160206195911&path-prefix=es","https://media1.tenor.com/images/95a73ad4ffd97fe010566f3b16dba9b9/tenor.gif?itemid=9032322"];
  let r4 = Math.floor((Math.random() * i4.length));

  let w4 = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#e600ad")
  .setImage(i4[r4])
  .addField("Taiga Aisaka","Toradora")

  let i5 = ["http://images6.fanpop.com/image/photos/35700000/Mirai-Kuriyama-kyoukai-no-kanata-35731692-450-600.jpg","https://media.giphy.com/media/Jdk18d1SnuvJu/giphy.gif","https://i.pinimg.com/originals/aa/41/e4/aa41e462b5238121bceb03fdd3705d00.gif","https://i.pinimg.com/originals/da/9c/63/da9c63862006b1f69e5275b92a3bd735.jpg"];
  let r5 = Math.floor((Math.random() * i5.length));

  let w5 = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#e600ad")
  .setImage(i5[r5])
  .addField("Mirai Kuriyama","Kyoukai no Kanata")

  let i6 = ["http://profilepicturesdp.com/wp-content/uploads/2018/07/re-zero-emilia-profile-picture-3.jpg","https://danbooru.donmai.us/data/sample/sample-b8e60027132fb4afad694d6b6def0709.jpg","https://3wa6swswssi2rh7s6nj1ju16-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/Emilia.jpg","https://i.pinimg.com/originals/33/12/26/331226db20cf8e5ad32f2c28b9261bba.png"];
  let r6 = Math.floor((Math.random() * i6.length));

  let w6 = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#e600ad")
  .setImage(i6[r6])
  .addField("Emilia","Re:Zero Kara Hajimeru Isekai Seikatsu")

  let i7 = ["https://vignette.wikia.nocookie.net/konosuba/images/6/62/Megumin_-_Anime.png/revision/latest?cb=20170115044300&path-prefix=es","https://static.zerochan.net/Megumin.full.1978894.jpg","https://pa1.narvii.com/6377/2d3d2ea7f9a0b2c8f43a59620454495ac048b5e2_hq.gif","https://steamusercontent-a.akamaihd.net/ugc/916918850619334169/E5AB158105930FC39E4DA5775DA2DD84AD552100/"];
  let r7 = Math.floor((Math.random() * i7.length));

  let w7 = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#e600ad")
  .setImage(i7[r7])
  .addField("Megumin","Kono Subarashii Sekai ni Shukufuku wo")

  let i8 = ["https://i.imgur.com/KYTRjwB.jpg","https://i.pinimg.com/736x/1a/a1/da/1aa1da59abab44f911dba2d44b5caf77.jpg","https://media1.tenor.com/images/baec229ecdceabff8fb2bce42cfc6f61/tenor.gif?itemid=10989013","https://i.pinimg.com/originals/f8/d5/52/f8d552431bf7bf363b53928f60460d1a.gif"];
  let r8 = Math.floor((Math.random() * i8.length));

  let w8 = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#e600ad")
  .setImage(i8[r8])
  .addField("Tomori Nao","Charlotte")

  let i9 = ["https://media1.tenor.com/images/5dec3ebbf300096537002420bb95a5cf/tenor.gif?itemid=8593280","https://66.media.tumblr.com/4a08436fcc3b506a0cf4bccffa00019c/tumblr_okpobdtKfC1twgfw0o2_r1_400.gif","https://media.tenor.com/images/3266d24fc649eb37eef9af6d9fbe38e5/tenor.gif","https://media1.tenor.com/images/c00ff77b181a298ad1cbcee2977283e8/tenor.gif?itemid=8238128"];
  let r9 = Math.floor((Math.random() * i9.length));

  let w9 = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#e600ad")
  .setImage(i9[r9])
  .addField("Kanna Kamui","Miss Kobayashi's Dragon Maid")


    let i10 = ["https://vignette.wikia.nocookie.net/k-on/images/1/1d/Mio_Akiyama_new_mugshot.png/revision/latest?cb=20130713162902","https://honeysanime.com/wp-content/uploads/2016/10/Mio-Akiyama-K-On-wallpaper-300x385.jpg","https://cdn50.picsart.com/176355716000202.gif?r1024x1024","https://66.media.tumblr.com/61681620ce118fb0d584eed4be4171b9/tumblr_p1j4ayr0Kj1wukmmyo1_400.gif"];
    let r10 = Math.floor((Math.random() * i10.length));

    let w10 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i10[r10])
    .addField("Mio Akiyama","K-On")

    let i11 = ["https://vignette.wikia.nocookie.net/nisekoi/images/c/c6/Chitoge-nisekoi.png/revision/latest?cb=20150603043239","https://www.animexis.com.br/wp-content/uploads/2014/09/Chitoge-Nisekoi.jpg","https://media1.tenor.com/images/ea9ec5cd57dc8ade98968ab75ff8cc94/tenor.gif?itemid=9992764","https://media1.tenor.com/images/3f37f7b25c6f4f56b807b070592400d3/tenor.gif?itemid=10007449"];
    let r11 = Math.floor((Math.random() * i11.length));

    let w11 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i11[r11])
    .addField("Chitoge Kirisaki","Nisekoi")

    let i12 = ["https://cdn.myanimelist.net/images/characters/7/281783.jpg","https://vignette.wikia.nocookie.net/yamadakun-to-nananin-no-majo/images/5/50/Shiraishi_Anime.png/revision/latest?cb=20150517163612&path-prefix=es","https://thumbs.gfycat.com/CreativeAmbitiousAustralianfurseal-small.gif","https://thumbs.gfycat.com/RawWanEasternglasslizard-small.gif"];
    let r12 = Math.floor((Math.random() * i12.length));

    let w12 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i12[r12])
    .addField("Urara Shiraishi","Yamada-kun to 7-nin no Majo")

    let i13 = ["https://static.zerochan.net/Hestia.%28DanMachi%29.full.2364780.png","https://steamusercontent-a.akamaihd.net/ugc/910156163261109369/AFCBE994C57131A307EA902D0B562ADFF78A4367/","https://i.pinimg.com/736x/a6/4b/d1/a64bd199cc0573bf036f88997305b8f0--anime-art-anime-manga.jpg"];
    let r13 = Math.floor((Math.random() * i13.length));

    let w13 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i13[r13])
    .addField("Hestia","Dungeon ni Deai o Motomeru no wa Machigatteiru Darou ka")

    let i14 = ["https://vignette.wikia.nocookie.net/haganai/images/4/45/Sena_Profile.png/revision/latest?cb=20180615175145","https://i.ytimg.com/vi/afDJJtkdC-k/maxresdefault.jpg","https://pa1.narvii.com/6084/496c1f4d3d75d2848e61218abb7fea4b7903a96c_hq.gif","https://photos1.iorbix.com/00/00/00/00/02/34/85/60/Sena-Kashiwazaki-cvv5THLGS-b.jpg"];
    let r14 = Math.floor((Math.random() * i14.length));

    let w14 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i14[r14])
    .addField("Sena Kashiwazaki","Boku wa Tomodachi ga Sukunai")

    let i15 = ["https://3.bp.blogspot.com/-ZVcWrOAyo4Y/WNtnZSEKcaI/AAAAAAAAA0E/uTETG1tTk1QOKYl1aWlzLLjDpd3XuVdegCLcB/s1600/Cover2.jpg","http://images6.fanpop.com/image/photos/35200000/Asuna-Yuuki-sword-art-online-35231769-648-528.png","https://vignette.wikia.nocookie.net/sao/images/7/7f/AsunaYuukiRL.jpg/revision/latest?cb=20161101153254&path-prefix=es","https://media1.tenor.com/images/3158ca915a8054f637fefe91acbf0f18/tenor.gif?itemid=3531984"];
    let r15 = Math.floor((Math.random() * i15.length));

    let w15 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i15[r15])
    .addField("Asuna Yuuki","Sword Art Online")

    let i16 = ["https://i.pinimg.com/236x/a3/29/24/a32924efb2637b49a37d7dfdb03f8beb--tsuneki-hikari.jpg","https://rezzealaux.files.wordpress.com/2017/02/3ablasv.jpg","http://images6.fanpop.com/image/polls/1634000/1634879_1497544747510_full.jpg","https://pa1.narvii.com/6361/5c3e633b1335cf78a81a7c43e6e6207de939df38_hq.gif"];
    let r16 = Math.floor((Math.random() * i16.length));

    let w16 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i16[r16])
    .addField("Hikari Tsuneki","Seiren")

    let i17 = ["https://image.spreadshirtmedia.com/image-server/v1/compositions/106392685/views/1,width=650,height=650,appearanceId=1,version=1370225086.jpg","https://i.pinimg.com/originals/44/25/30/442530b6a957c9ffd748bd8fc7b79db8.png","https://steamusercontent-a.akamaihd.net/ugc/942812724062572496/FF9564577B04FCD0A6199D9C6622B5BE49DD46F0/","https://media.giphy.com/media/30d2wNCnki5xu/giphy.gif"];
    let r17 = Math.floor((Math.random() * i17.length));

    let w17 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i17[r17])
    .addField("Rias Gremory","High School DxD")

    let i18 = ["https://vignette.wikia.nocookie.net/acgarena/images/c/cb/Sinonposter.jpg/revision/latest?cb=20161110120046","http://images6.fanpop.com/image/photos/39300000/Asada-Shino-asada-shino-sinon-39343217-540-540.png","https://thumbs.gfycat.com/AssuredIndelibleGalapagosdove-small.gif","https://thumbs.gfycat.com/ElderlyScornfulDavidstiger-small.gif"];
    let r18 = Math.floor((Math.random() * i18.length));

    let w18 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i18[r18])
    .addField("Shino Asada","Sword Art Online II")

    let i19 = ["https://i.pinimg.com/originals/5e/06/c2/5e06c2031d859a75bcca638585dbc48c.jpg","https://data.whicdn.com/images/25603028/original.jpg","https://s3.amazonaws.com/cdn.roosterteeth.com/uploads/images/c7dffd52-6480-4259-b13a-8d3a45051e1c/md/zogman1552d8ed56d807.jpg","https://media.tenor.com/images/f71fcfe4c2bcf00fa569c59dd6a5fcd7/tenor.gif"];
    let r19 = Math.floor((Math.random() * i19.length));

    let w19 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i19[r19])
    .addField("Ikaros","Sora No Otoshimono")

    let i20 = ["https://vignette.wikia.nocookie.net/sakurasounopetnakanojo/images/f/fd/Mashiro_Shiina.png/revision/latest?cb=20150107020507&path-prefix=es","http://asgardanime.com/wp-content/uploads/20120408_sakura01_resize.jpg","https://ih0.redbubble.net/image.337126460.7338/flat,800x800,075,f.u1.jpg","https://i.gifer.com/BSL8.gif"];
    let r20 = Math.floor((Math.random() * i20.length));

    let w20 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i20[r20])
    .addField("Mashiro Shiina","Sakurasou no Pet na Kanojo")

    let i21 = ["https://vignette.wikia.nocookie.net/loveinterest/images/3/30/Hiyori_Iki.png/revision/latest?cb=20151026173801","https://media1.tenor.com/images/699e50f2db68067494ce48e42c18f465/tenor.gif?itemid=5900598","https://vignette.wikia.nocookie.net/p__/images/f/f5/Hiyori_Iki.jpg/revision/latest?cb=20171130164416&path-prefix=protagonist","http://24.media.tumblr.com/6ed7b333aa5a0bc31a25761b5d1d1af1/tumblr_n1ujq2o7IG1re27wxo1_250.gif"];
    let r21 = Math.floor((Math.random() * i21.length));

    let w21 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i21[r21])
    .addField("Hiyori Iki","Noragami")

    let i22 = ["https://www.anime-planet.com/images/characters/moka-akashiya-3679.jpg","https://media.tenor.com/images/321f9b14e385768a3416505097a42e9e/tenor.gif","http://1.bp.blogspot.com/-zSvO4FuLw6s/TWYzuPOn-EI/AAAAAAAAAEQ/yCJvVySM414/s1600/moka2.png"];
    let r22 = Math.floor((Math.random() * i22.length));

    let w22 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i22[r22])
    .addField("Moka Akashiya","Rosario+ Vampire")

    let i23 = ["https://vignette.wikia.nocookie.net/loveinterest/images/2/2a/Descarga.jpg/revision/latest?cb=20150709150135","https://ugc.kn3.net/i/origin/http://3.bp.blogspot.com/-kIjR0917ECc/UTD72XeYJWI/AAAAAAAAFNM/ssjsM0d0l8k/s1600/f0639267.jpg"];
    let r23 = Math.floor((Math.random() * i23.length));

    let w23 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i23[r23])
    .addField("Kotonoha Katsura","School Days")


    let i24 = ["https://cdn.myanimelist.net/images/characters/9/241653.jpg","https://3.bp.blogspot.com/-aN9IwwiJpxk/WLoP9JzMtpI/AAAAAAAAAhk/UpjkXubLq2kWWrafNFb--wnbpeE0GMeEACLcB/s1600/Onodera.jpg","https://vignette.wikia.nocookie.net/nisekoi/images/c/c5/Kosaki.manga2.png/revision/latest?cb=20150912204343","https://i.pinimg.com/originals/47/a9/0d/47a90dd95ed26cd9b3e2055b624565ae.gif"];
    let r24 = Math.floor((Math.random() * i24.length));

    let w24 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i24[r24])
    .addField("Onodera Kosaki","Nisekoi")

    let i25 = ["https://i.gifer.com/7A1U.gif","http://images6.fanpop.com/image/photos/35600000/Chu2Koi-chuunibyou-demo-koi-ga-shitai-35647342-2560-1920.jpg","https://pa1.narvii.com/6993/5e7c3609b9a97277729c81ea9edc6b0f02433ea8r1-500-281_hq.gif","https://i.gifer.com/7A1g.gif"];
    let r25 = Math.floor((Math.random() * i25.length));

    let w25 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i25[r25])
    .addField("Takanashi Rikka","Chuunibyou demo Koi ga Shitai!")

    let i26 = ["https://cdn.myanimelist.net/images/characters/3/78211.jpg","https://i.pinimg.com/236x/35/88/61/35886173ddf0780818eed5e10e25bc8e--kagaku-anime-characters.jpg","https://media.giphy.com/media/mBix0Q57NGcMg/giphy.gif","https://i.gifer.com/F1Qq.gif"];
    let r26 = Math.floor((Math.random() * i26.length));

    let w26 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i26[r26])
    .addField("Misaka Mikoto","Toaru Majutsu no Index")

    let i27 = ["https://vignette.wikia.nocookie.net/accelworld/images/0/0a/Kuroyukihime.png/revision/latest?cb=20170512034945","https://i.pinimg.com/originals/eb/5c/ba/eb5cba60d9f627cded4303e7560b0f63.jpg","https://static.zerochan.net/Kuroyukihime.full.1244080.jpg","http://animefanatika.co.za/afwp/wp-content/uploads/2016/09/Kuroyukihime-wallpaper.jpg"];
    let r27 = Math.floor((Math.random() * i27.length));

    let w27 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i27[r27])
    .addField("Kuroyukihime","Accel World")

    let i28 = ["https://cdn.myanimelist.net/images/characters/9/266117.jpg","https://i.pinimg.com/originals/26/76/ed/2676ed2a53ce24ffed10010dcf763b1d.png","https://i.pinimg.com/originals/76/e3/41/76e341613ec29984448cf9159950e368.jpg","https://steamusercontent-a.akamaihd.net/ugc/781785179832926080/56B0CBF1F36E41F35D797F5F18FAE4C309A97005/"];
    let r28 = Math.floor((Math.random() * i28.length));

    let w28 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i28[r28])
    .addField("Aqua","Kono Subarashii Sekai ni Shukufuku wo!")

    let i29 = ["https://static.zerochan.net/Charlotte.Dunois.full.1327536.jpg","http://pa1.narvii.com/6343/65ba0457fb6ba08467ce6505fb584d4d6a884597_00.gif","https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/charlotte-dunois-infinite-stratos-2-ignition-hearts-2.49.jpg","https://i.imgur.com/TDeA471.gif"];
    let r29 = Math.floor((Math.random() * i29.length));

    let w29 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i29[r29])
    .addField("Charlotte Dunois","Infinite Stratos")

    let i30 = ["https://kawaii-mobile.com/wp-content/uploads/2016/05/Hai-to-Gensou-no-Grimgar-Yume.Magic-THL-W8-wallpaper-1080x1920.jpg","http://i.imgur.com/Pxvbx2B.jpg","https://honeysanime.com/wp-content/uploads/2016/08/yume-hai-to-gensou-to-grimgar-20160808095234.jpg","https://img.fireden.net/a/image/1454/25/1454259923236.gif"];
    let r30 = Math.floor((Math.random() * i30.length));

    let w30 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i30[r30])
    .addField("Yume","Hai to Gensou no Grimgar")

    let i31 = ["https://cdn.myanimelist.net/images/characters/3/273413.jpg","https://s1.narvii.com/image/xjzacmzojvuulmq5456ken76kx3f5iqw_hq.jpg","https://i.pinimg.com/originals/f8/e0/41/f8e041625dba81018584e74397ef2d49.jpg","https://steamusercontent-a.akamaihd.net/ugc/82591828993271529/5762A7B917D301C386CB2E61A897FFFA76FAA94B/"];
    let r31 = Math.floor((Math.random() * i31.length));

    let w31 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i31[r31])
    .addField("Momo Belia Deviluke","To-Love-Ru")

    let i32 = ["http://pm1.narvii.com/6075/1b229ddf8da961bbf8a303cf5edd0834884e07e4_00.jpg","https://i.imgur.com/Ja0uGs8.png","https://pm1.narvii.com/6503/a6a940a8af2c7a646e943f491f35877c82fc8054_hq.jpg","https://data.whicdn.com/images/245382108/original.gif"];
    let r32 = Math.floor((Math.random() * i32.length));

    let w32 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i32[r32])
    .addField("Touka Kirishima","Tokyo Ghoul")

    let i33 = ["https://vignette.wikia.nocookie.net/akatsukiafterlife/images/4/4f/Rose.png/revision/latest?cb=20160405015800&path-prefix=es","https://ae01.alicdn.com/kf/HTB1V86KNVXXXXXmaXXXq6xXFXXX8/New-Oct-Home-Textile-Attack-On-Titan-Anime-Mikasa-40-40CM-Square-Pillow-Case-Covers-32828.jpg","http://pm1.narvii.com/6054/aa30cb00e671699c5ba5231a2ddd2a0c8c1d454a_00.jpg","https://media.giphy.com/media/gLKy9LxhXZvpe/source.gif"];
    let r33 = Math.floor((Math.random() * i33.length));

    let w33 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i33[r33])
    .addField("Mikasa Ackerman","Shingeki no Kyojin")

    let i34 = ["https://cdn.myanimelist.net/images/characters/10/117839.jpg","https://images-na.ssl-images-amazon.com/images/I/71Bki8xypPL._SY679_.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKtTziMYU6cDeDXM5LU9_bde-FezYNIhqIuFdBadJ9di9iCX2b","https://steamusercontent-a.akamaihd.net/ugc/279604015248902833/FB988878F8F71D20F8F83039712866228C20CCFB/"];
    let r34 = Math.floor((Math.random() * i34.length));

    let w34 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i34[r34])
    .addField("Ayase Aragaki","Ore no Imōuto ga Konna ni Kawaii Wake ga Nai")

    let i35 = ["http://myanimelist.net/images/characters/8/310255.jpg","http://images6.fanpop.com/image/photos/35000000/kurumi-tokisaki-kurumi-35011314-414-663.jpg","https://media.shoanime.com/2017/10/kurumi-tokisaki.jpg","https://steamusercontent-a.akamaihd.net/ugc/863981360759635102/65C920087E1772014EF9303E971391A43E597365/"];
    let r35 = Math.floor((Math.random() * i35.length));

    let w35 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i35[r35])
    .addField("Kurumi Tokisaki","Date a Live")

    let i36 = ["https://cdn.myanimelist.net/images/characters/11/226347.jpg","https://shinden.pl/res/images/genuine/238912.jpg","https://vignette.wikia.nocookie.net/fairytailfanon/images/5/51/Konjiki.no.Yami.600.1997769.jpg/revision/latest?cb=20160710054156","https://data.whicdn.com/images/187701094/original.gif"];
    let r36 = Math.floor((Math.random() * i36.length));

    let w36 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i36[r36])
    .addField("Konjiki no Yami","To-Love-Ru")

    let i37 = ["https://www.anime-planet.com/images/characters/tsuyu-asui-66845.jpg","https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/tsuyu-asui--54.8.jpg","http://animetvn.tv/upload/character/tsuyu-asui-2.jpg","https://media1.tenor.com/images/ba193b060e309b89ba51cd0868a4c225/tenor.gif?itemid=12390526"];
    let r37 = Math.floor((Math.random() * i37.length));

    let w37 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i37[r37])
    .addField("Tsuyu Asui","Boku no Hero Academia")

    let i38 = ["https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/ochaco-uraraka--59.2.jpg","https://pbs.twimg.com/profile_images/998761467993206784/WaU1AS0E_400x400.jpg","https://static.zerochan.net/Uraraka.Ochako.full.2108969.jpg","https://media1.tenor.com/images/5094566af0f695cd954543179a6651a8/tenor.gif?itemid=9742406"];
    let r38 = Math.floor((Math.random() * i38.length));

    let w38 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i38[r38])
    .addField("Uraraka Ochako","Boku no Hero Academia")

    let i39 = ["https://www.anime-planet.com/images/characters/nico-yazawa-29816.jpg","http://telenya.com/file/pic/photo/2015/03/f3e5d04a44eb12e458b4dc15f1d9c37d_1024.jpg","http://pa1.narvii.com/6457/4a69feb3933373313bba55243cde71ba269a3589_hq.gif","https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/hanayo-koizumi--7.15.jpg"];
    let r39 = Math.floor((Math.random() * i39.length));

    let w39 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i39[r39])
    .addField("Nico Yazawa","Love Live!")

    let i40 = ["https://rtvc-assets-radionacional-v2.s3.amazonaws.com/s3fs-public/styles/imagen_720x720/public/senalradio/articulo-noticia/galeriaimagen/hatsune-miku-es-creada-en-bloques-lego-6-animemx.jpg?itok=VhUcw27P&timestamp=1413743368","https://pm1.narvii.com/6409/ca5862b856ea8d18d433e2bba8fcb41bb58b4e22_hq.jpg","https://i.ebayimg.com/images/g/xdUAAOSwSPBaafnV/s-l300.jpg","https://info7rm.blob.core.windows.net.optimalcdn.com/images/2018/01/12/hatsune.jpg"];
    let r40 = Math.floor((Math.random() * i40.length));

    let w40 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i40[r40])
    .addField("Hatsune Miku","Vocaloid")

    let i41 = ["http://images6.fanpop.com/image/photos/40100000/Mitsuha-Miyamizu-vocafan1115-40151368-830-1184.jpg","https://i.imgur.com/BN7wn39.jpg","https://data.whicdn.com/images/263696593/large.jpg","https://i.pinimg.com/originals/ed/84/21/ed84210b432a90d9206d124f42c4d6a9.jpg","https://kawaii-mobile.com/wp-content/uploads/2017/11/Kimi-no-Na-wa-Mitsuha-Miyamizu-2160x1920.jpg","https://i.pinimg.com/originals/10/89/c7/1089c75debaf8a49e41e8f9959ad5d0a.jpg","https://thumbs.gfycat.com/ObviousMelodicBlackandtancoonhound-small.gif","https://steamusercontent-a.akamaihd.net/ugc/892140715979477635/CD4973DFDB1E6542F4FB04E7B1D138DC0F82CD24/"];
    let r41 = Math.floor((Math.random() * i41.length));

    let w41 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#e600ad")
    .setImage(i41[r41])
    .addField("Mitsuha Miyamizu","Kimi no na wa")

   let i42 = ["https://steamusercontent-a.akamaihd.net/ugc/859484412645645116/16F65477DB6AF0CFE4636B935877903CEC6BBA5A/","https://vignette.wikia.nocookie.net/deadmanwonderland/images/0/09/Shiro.png/revision/latest?cb=20120725063123","http://images6.fanpop.com/image/photos/40000000/Shiro-deadman-wonderland-40049963-400-402.jpg"];
   let r42 = Math.floor((Math.random() * i42.length));

   let w42= new Discord.RichEmbed()
   .setAuthor(message.author.username, message.author.avatarUrl)
   .setColor("#e600ad")
   .setImage(i42[r42])
   .addField("Shiro","Deadman Wonderland")

   let i43 = ["https://pm1.narvii.com/6280/9920982686556fc56b71d477c38481fc52e6dfef_hq.jpg","https://1.bp.blogspot.com/-czRBuW565rA/WDDmH2ue7GI/AAAAAAAABBs/sQEraocvsRUW2TrF66b90CgCTveXwDQ4gCLcB/s1600/hinazuki.jpg","https://i.pinimg.com/236x/58/da/50/58da50a1abc20dbadd44641b06a5f2a3--kayo-hinazuki-boku-dake-ga-inai-machi.jpg","https://steamusercontent-a.akamaihd.net/ugc/267215943004799398/0394E4D903F003216789D75683D30225606A95CA/","https://em.wattpad.com/914d5ddcbc330388c3ccee0706aeac38f8f9b6b1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f524c426d73314a42332d2d6250413d3d2d32332e313437343231373961303430346362633239363638393237363537382e676966"];
   let r43 = Math.floor((Math.random() * i43.length));

   let w43 = new Discord.RichEmbed()
   .setAuthor(message.author.username, message.author.avatarUrl)
   .setColor("#e600ad")
   .setImage(i43[r43])
   .addField("Kayo Hinazuki","Boku Dake ga Inai Machi")

   let i44 = ["https://pm1.narvii.com/6202/ba836b84f0387d9805b4ccb5bcd609918d1e88d3_hq.jpg","https://static.zerochan.net/Miyazono.Kaori.full.1855174.jpg","https://pa1.narvii.com/6673/0a628491d852f4f2d7630d367200c2da91023d2d_hq.gif","https://pa1.narvii.com/6632/d2f3f86a0d7892800e63e2a0815e7df5fbf4fb9d_hq.gif"];
   let r44 = Math.floor((Math.random() * i44.length));

   let w44 = new Discord.RichEmbed()
   .setAuthor(message.author.username, message.author.avatarUrl)
   .setColor("#e600ad")
   .setImage(i44[r44])
   .addField("Kaori Miyazono","Shigatsu wa Kimi no Uso")

   let i45 = ["https://i.pinimg.com/originals/99/59/1b/99591bbc318ecd41ae7bbf39a9106e12.jpg","https://cdn.animeherald.com/aniheraldcdn/2016/03/Eromanga-Sensei-Header-001-20160309.jpg","https://pa1.narvii.com/6448/8e47de1abccd976612fc20cc52d372b4143c7d3f_hq.gif","https://pa1.narvii.com/7018/a345574b9376b9768c828ad0abcec4ec620cac6cr1-500-276_hq.gif"];
   let r45 = Math.floor((Math.random() * i45.length));

   let w45 = new Discord.RichEmbed()
   .setAuthor(message.author.username, message.author.avatarUrl)
   .setColor("#e600ad")
   .setImage(i45[r45])
   .addField("Izumi Sagiri","EroManga-Sensei")

   let i46 = ["https://vignette.wikia.nocookie.net/danganronpa/images/7/7d/Danganronpa_V3_Chiaki_Nanami_Bonus_Mode_Sprites_10.png/revision/latest?cb=20171111234121","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP5rxFvnQ1dvtzMZ39eF-lCaxCBwHuYbAXLJmohKqCz9tQRc6K","https://static.zerochan.net/Nanami.Chiaki.full.1486893.jpg","https://media1.tenor.com/images/ac5934cd660269eb3ee5731552da9c3a/tenor.gif?itemid=10191776"];
   let r46 = Math.floor((Math.random() * i46.length));

   let w46 = new Discord.RichEmbed()
   .setAuthor(message.author.username, message.author.avatarUrl)
   .setColor("#e600ad")
   .setImage(i46[r46])
   .addField("Chiaki Nanami","Danganronpa 2")

   let i47 = ["https://vignette.wikia.nocookie.net/rezero/images/1/11/Ram_-_Anime.png/revision/latest?cb=20161116222257&path-prefix=es","https://static.zerochan.net/Ram.%28Re%3AZero%29.full.2036049.jpg","https://translationchicken.files.wordpress.com/2016/11/ramsteamed.png?w=1400","https://media1.tenor.com/images/3e24878135455d9936ef2f3cd2707aa9/tenor.gif?itemid=6176882"];
   let r47 = Math.floor((Math.random() * i47.length));

   let w47 = new Discord.RichEmbed()
   .setAuthor(message.author.username, message.author.avatarUrl)
   .setColor("#e600ad")
   .setImage(i47[r47])
   .addField("Ram","Re:Zero Kara Hajimeru Isekai Seikatsu")

   let i48 = ["https://pm1.narvii.com/6392/48ef506d53335e3b2652f3af4a40c344e54198ac_hq.jpg","https://vignette.wikia.nocookie.net/nazonokanojox/images/1/18/UrabeMikoto2.png/revision/latest?cb=20161215001327&path-prefix=es","https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/mikoto-urabe--6.9.jpg","https://i.imgur.com/YaFx14N.gif"];
   let r48 = Math.floor((Math.random() * i48.length));

   let w48 = new Discord.RichEmbed()
   .setAuthor(message.author.username, message.author.avatarUrl)
   .setColor("#e600ad")
   .setImage(i48[r48])
   .addField("Mikoto Urabe","Nazo no Kanojo X")


  let rrw = [w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21,w22,w23,w24,w25,w26,w27,w28,w29,w30,w31,w32,w33,w34,w35,w36,w37,w38,w39,w40,w41,w42,w43,w44,w45,w46,w47,w48];
  let rw = Math.floor((Math.random() * rrw.length));
  message.channel.send(rrw[rw])

}
if(message.content.startsWith(prefix + 'nyan')){
let rrn = ["https://i.pinimg.com/originals/61/5f/1b/615f1b4599bcd41bdb1b51c280384c1a.jpg","https://i.pinimg.com/originals/ae/d2/94/aed294a89e5b5ebb053fdbea6d72d3ba.jpg","https://i.pinimg.com/originals/9a/e9/02/9ae90277d44a719f5ee795b2738838e5.jpg","https://vignette.wikia.nocookie.net/la-wiki-pokeland/images/a/a9/Neko_Girl.jpg/revision/latest?cb=20140710212357&path-prefix=es","https://i.pinimg.com/originals/6e/65/7b/6e657b502c137b32e36e0354f8932720.jpg","https://i.pinimg.com/originals/84/73/77/84737759ea1d79c5953e3876744794a5.jpg","https://i.pinimg.com/236x/ea/12/78/ea12784dcc2e4bf552845f2ed1a6013d.jpg","https://i.pinimg.com/originals/eb/05/9e/eb059e0d8c51372a78ff8996410c56a7.jpg","https://cache.desktopnexus.com/thumbseg/2274/2274288-bigthumbnail.jpg","https://i.pinimg.com/originals/76/65/37/766537b607d97b8822ecf3d484b81ca3.gif","https://media1.tenor.com/images/09d75740089598b54342df3641dbbffc/tenor.gif?itemid=5615361","https://i.imgur.com/fw5ZA5a.gif","https://78.media.tumblr.com/66a2719b004ea2b9703ad1014e353fc8/tumblr_p8o6c2lBpd1xssof4o1_500.gif","https://media.tenor.com/images/13925652af4249f823ee2b2c19b865ae/tenor.gif","https://media.tenor.com/images/6cfe5d190e96844560b53032f07c98b4/tenor.gif","https://data.whicdn.com/images/172442077/original.gif"];
let rn = Math.floor((Math.random() * rrn.length));

let neko = new Discord.RichEmbed()
.setColor("#b800af")
.setAuthor(message.author.username, message.author.avatarURL)
.setImage(rrn[rn])
.setDescription("Nyan >u<")

message.channel.send(neko)

}
if(message.content.startsWith(prefix + 'loli')){
let rrl = ["https://pm1.narvii.com/6055/0e27a16edcefff187ef421dea6f2a7c302edc5fd_hq.jpg","https://cdn45.picsart.com/181569356001202.jpg?r1024x1024","https://cdn130.picsart.com/259852986011212.png?r1024x1024","https://pbs.twimg.com/profile_images/850973376864595972/RmAL4FvD_400x400.jpg","https://c-sf.smule.com/sf/s82/arr/3a/31/f42982a7-96c7-4ee6-b04f-06f59e9acf49.jpg","https://i.imgur.com/DQO3FcS.jpg","https://pbs.twimg.com/media/C-f43nNVwAIcR-i.jpg","https://i.pinimg.com/originals/1b/64/66/1b6466d8f90252667deab7efe31fff8b.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzfiExz7JLOLIDZMTheuhvNzSMIkq1H-2s27643JmPzlrXuRRC0A","https://i.pinimg.com/originals/bc/55/a2/bc55a20d2e97c05e7a24b8241470574e.jpg","https://i.pinimg.com/originals/53/ac/35/53ac353caa231dc609de2575208d8e27.jpg","https://i.pinimg.com/originals/2f/4d/a2/2f4da2eeec822c794673672e66d57985.jpg","https://i.ytimg.com/vi/7OVpW09ZdYQ/maxresdefault.jpg","https://www.trulio.ro/tsa/assets/files/trulio/599abe6bd8f2f-599abe6bef13a.jpeg","https://i.pinimg.com/originals/27/d4/a5/27d4a5fc492c486bfcacfe76a86297eb.jpg","https://media.giphy.com/media/VBWnFEMtMD5Is/giphy.gif","https://i.gifer.com/BpGj.gif","https://pa1.narvii.com/6005/017d5d51f09c4bc787256dd2735160b438a28659_hq.gif","https://image.myanimelist.net/ui/bfln5jRa_L37ziNWm-xNvC7ZrUo1Wq9V-XbmFCHejL-jiCxkrWGiJcZKKzr6qIrujqera88EDYBYFFsNpdxJ62UbfsuGJIDKzig-qBn8fx4","https://media1.tenor.com/images/466e9018413c3e83fb5f45c437a1196a/tenor.gif?itemid=11146283","https://pa1.narvii.com/6025/59390150bdc85097f09612a157cbbdd79ca4ab80_hq.gif","http://pa1.narvii.com/6828/8693b428e3c38eeda0a93d3af191f142feb10387_00.gif"];
let rl = Math.floor((Math.random() * rrl.length));

let loli = new Discord.RichEmbed()
.setColor("#b800af")
.setAuthor(message.author.username, message.author.avatarURL)
.setImage(rrl[rl])
.setDescription("Ten cuidado con el FBI y la ONU")

message.channel.send(loli)

}
if(message.content.startsWith(prefix + 'se')){

 let co = ["#6667ff","#ff6667","#ffb266","#00cd66"];
 let rco = Math.floor((Math.random() * co.length));

 let rl = args.slice(0).join(" ");
 let smy = new Discord.RichEmbed()
 .setColor(co[rco])
 .setDescription(rl)

 message.delete().catch(O_o=>{});

 message.channel.send(smy);
}
if(message.content.startsWith(prefix + 'im')){

  let co = ["#6667ff","#ff6667","#ffb266","#00cd66"];
  let rco = Math.floor((Math.random() * co.length));

  let ri = args.slice(0).join(" ")
  message.delete().catch(O_o=>{});
  let re = new Discord.RichEmbed()
  .setColor(co[rco])
  .setImage(ri)

  message.delete().catch(O_o=>{});

  if(!args[0]) return message.channel.send("Porfavor envia un url valido")
  if(!args[1]) return message.channel.send(re)
  if(!args[2]) return message.channel.send("Porfavor envia un url valido")
}
if(message.content.startsWith(prefix + 'fuck')){

let perms = message.channel.nsfw
if(!perms) return message.channel.send("Este canal no es NSFW");

let rrl = ["https://images.sex.com/images/pinporn/2017/06/21/620/17942750.gif","https://images.sex.com/images/pinporn/2017/07/16/620/18062721.gif","https://images.sex.com/images/pinporn/2013/09/16/620/3660179.gif","https://images.sex.com/images/pinporn/2013/09/06/620/3593803.gif","https://images.sex.com/images/pinporn/2013/07/26/620/3280490.gif","https://images.sex.com/images/pinporn/2016/09/16/620/16555736.gif","https://images.sex.com/images/pinporn/2014/06/22/620/6574773.gif","https://images.sex.com/images/pinporn/2014/06/22/620/6574783.gif","https://images.sex.com/images/pinporn/2014/06/22/620/6574763.gifhttps://images.sex.com/images/pinporn/2013/10/26/620/3954883.gif","https://images.sex.com/images/pinporn/2014/06/22/620/6574736.gif","https://images.sex.com/images/pinporn/2019/01/05/620/20478206.gif"];
let rl = Math.floor((Math.random() * rrl.length));

let member = message.mentions.members.first();

if(!args[0]) return message.channel.send("C-conmigo no!!!");

let owo = new Discord.RichEmbed()
.setColor("#b800af")
.setImage(rrl[rl])
.setDescription(`**${message.author.username}** se follo a **${member.user.username}**`)

message.channel.send(owo)
}
if(message.content.startsWith(prefix + 'suck')){

let perms = message.channel.nsfw
if(!perms) return message.channel.send("Este canal no es NSFW");

let rrl = ["https://images.sex.com/images/pinporn/2018/04/28/620/19421140.gif","https://images.sex.com/images/pinporn/2016/09/10/620/16523258.gif","https://images.sex.com/images/pinporn/2015/05/18/620/11983910.gif","https://images.sex.com/images/pinporn/2014/02/13/620/4986924.gif","https://images.sex.com/images/pinporn/2015/05/18/620/11983918.gif","https://images.sex.com/images/pinporn/2018/04/28/620/19421079.gif","https://images.sex.com/images/pinporn/2018/07/11/620/19708513.gif","https://images.sex.com/images/pinporn/2018/01/29/620/19019828.gif","https://images.sex.com/images/pinporn/2018/05/05/620/19447034.gif","https://images.sex.com/images/pinporn/2018/12/28/620/20432925.gif"];
let rl = Math.floor((Math.random() * rrl.length));

let member = message.mentions.members.first();

if(!args[0]) return message.channel.send("C-conmigo no!!!");

let owo = new Discord.RichEmbed()
.setColor("#b800af")
.setImage(rrl[rl])
.setDescription(`**${message.author.username}** chupa el miembro de **${member.user.username}**`)

message.channel.send(owo)
}
if(message.content.startsWith(prefix + 'masturbate')){

let perms = message.channel.nsfw
if(!perms) return message.channel.send("Este canal no es NSFW");

let rrl = ["https://images.sex.com/images/pinporn/2018/02/12/620/19091030.gif","https://images.sex.com/images/pinporn/2015/05/20/620/12008977.gif","https://images.sex.com/images/pinporn/2015/06/08/620/12272500.gif","https://images.sex.com/images/pinporn/2015/06/08/620/12272321.gif","https://images.sex.com/images/pinporn/2015/06/08/620/12272243.gif","https://images.sex.com/images/pinporn/2018/08/11/620/19826737.gif","https://images.sex.com/images/pinporn/2018/08/11/620/19826737.gif","https://images.sex.com/images/pinporn/2015/06/08/620/12272488.gif","https://images.sex.com/images/pinporn/2013/12/19/620/4410657.gif","https://images.sex.com/images/pinporn/2018/06/01/620/19550766.gif","https://images.sex.com/images/pinporn/2014/09/23/620/8154279.gif","https://images.sex.com/images/pinporn/2014/09/23/620/8154279.gif","https://images.sex.com/images/pinporn/2017/12/31/620/18870238.gif","https://images.sex.com/images/pinporn/2018/02/21/620/19141865.gif"];
let rl = Math.floor((Math.random() * rrl.length));

let member = message.mentions.members.first();
let owo = new Discord.RichEmbed()
.setColor("#b800af")
.setImage(rrl[rl])
.setDescription(`**${message.author.username}** se esta masturbando`)

message.channel.send(owo)
}
if(message.content.startsWith(prefix + 'sayem')){

  let co = ["#6667ff","#ff6667","#ffb266","#00cd66"];
  let rco = Math.floor((Math.random() * co.length));

  let messageArray = message.content.split(" ");
  let iv = messageArray[1];
  let im = args.slice(1).join(" ");

  message.delete().catch(O_o=>{});

  let is = new Discord.RichEmbed()
  .setDescription(im)
  .setImage(iv)
  .setColor(co[rco]);
  message.channel.send(is);
}
if(message.content.startsWith(prefix + 'ping')){

    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("**Ping?**");
    const l = new Discord.RichEmbed()
    .setDescription(`**Pong!**`)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(`#ff6667`)
    .addField(`Tu latencia es de:`,` ${m.createdTimestamp - message.createdTimestamp}ms`)
    .addField(`La latencia del bot es de:`, ` ${Math.round(client.ping)}ms`)
    m.edit(l);
  }
if(message.content.startsWith(prefix + 'suggest')){

  message.delete().catch(O_o=>{});

  let co = ["#6667ff","#ff6667","#ffb266","#00cd66"];
  let rco = Math.floor((Math.random() * co.length));

  let su = args.slice(0).join(" ");

  if(!args[0]) return message.channel.send("Sugiere algo.");

  let sug = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField("Sugerencia:", su)
  .setColor(co[rco])
  .setFooter("Si quieres sugerir algo usa s!suggest")

  message.channel.send(sug)
  .then(function (message) {
      message.react("✅")
      message.react("❎")
      });
}
});
client.login(config.token);
