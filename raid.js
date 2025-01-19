const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spam_free')
        .setDescription('Replies with Pong! and pings up to 15 specified users and everyone!')
        .addUserOption(option => 
            option.setName('user1')
                .setDescription('The first user to ping')
                .setRequired(false))
        .addUserOption(option => 
            option.setName('user2')
                .setDescription('The second user to ping')
                .setRequired(false))
        .addUserOption(option => 
            option.setName('user3')
                .setDescription('The third user to ping')
                .setRequired(false))
        .addUserOption(option => 
            option.setName('user4')
                .setDescription('The fourth user to ping')
                .setRequired(false))
        .addUserOption(option => 
            option.setName('user5')
                .setDescription('The fifth user to ping')
                .setRequired(false))
        .addUserOption(option => 
            option.setName('user6')
                .setDescription('The sixth user to ping')
                .setRequired(false))
        .addUserOption(option => 
            option.setName('user7')
                .setDescription('The seventh user to ping')
                .setRequired(false))
        .addUserOption(option => 
            option.setName('user8')
                .setDescription('The eighth user to ping')
                .setRequired(false))
        .addUserOption(option => 
            option.setName('user9')
                .setDescription('The ninth user to ping')
                .setRequired(false))
        .addUserOption(option => 
            option.setName('user10')
                .setDescription('The tenth user to ping')
                .setRequired(false))
        .addUserOption(option => 
            option.setName('user11')
                .setDescription('The eleventh user to ping')
                .setRequired(false))
        .addUserOption(option => 
            option.setName('user12')
                .setDescription('The twelfth user to ping')
                .setRequired(false))
        .addUserOption(option => 
            option.setName('user13')
                .setDescription('The thirteenth user to ping')
                .setRequired(false))       
        .addUserOption(option => 
            option.setName('user14')
                .setDescription('The fourteenth user to ping')
                .setRequired(false))
        .addUserOption(option => 
            option.setName('user15')
                .setDescription('The fifteenth user to ping')
                .setRequired(false)),

    async execute(interaction) {
        try {
            const userPings = [];
            for (let i = 1; i <= 15; i++) {
                const user = interaction.options.getUser (`user${i}`);
                if (user) {
                    userPings.push(`<@${user.id}>`);
                }
            }

            const embed = new EmbedBuilder()
                .setColor('#ff0000')
                .setTitle('Destroys by HackViet Community, Thank You for Premium')
                .setDescription('Raid By HackViet Community! discord.gg/hackviet 😜')
                .setImage("https://media.discordapp.net/attachments/1152990862675038268/1155328285832654909/78D248BE-E3D2-492A-B7FA-C05490B6CBF4.gif?ex=675502d0&is=6753b150&hm=f6ce47c956ca12c6e3e80f2d0724a04fa14ec325d0218bdef4fc282c2d495ea8&")
                .setThumbnail("https://cdn.discordapp.com/emojis/1115097419764482048.gif?size=64")
                .setFooter({ text: "Powered by .gg/onlyfann", iconURL: "https://cdn.discordapp.com/icons/1268797593538793525/639b5274324240652e18d869681c2074.png?size=4096" })
                .setTimestamp();

            const userPingString = userPings.join(', ');

            await interaction.reply({ 
                content: `${userPingString} @here @everyone https://discord.gg/hackviet !`, 
                embeds: [embed] 
            });
        } catch (error) {
            console.error('Error executing command:', error);
            await interaction.reply({ content: 'Đã xảy ra lỗi khi thực hiện lệnh.', ephemeral: true });
        }
    },
};
