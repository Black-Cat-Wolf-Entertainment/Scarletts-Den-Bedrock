import {world, system} from "@minecraft/server";
import {ActionFormData} from "@minecraft/server-ui";

world.beforeEvents.itemUse.subscribe(data => {
    let player = data.source
    let title = "Scarlett's Den: Change logs"
    if(data.itemStack.typeId == "bcwe_sd:changelog_book") system.run(() => main(player))

    function main() {
        const form = new ActionFormData()
        .title(title)
        .body(`Welcome to the Logs, ${player.nameTag}`)
        .button(`§3§lPublic Beta Menu§r\n§7[Opens Public Beta Menu]`)
        .button(`§d§lPublic Beta Credits§r\n§7[Opens Credits Menu]`)
        .button(`§c§lClose§r\n§7[Closes Menu]`)
        form.show(player).then(r => {
            if(r.selection == 0) PBL()
            if(r.selection == 1) PBC()
        })
    }

    function PBL() {
        new ActionFormData()
        .title(`Latest Public Beta Logs`)
        .body(`Scarlett's Den: Public Beta 1.0 §a[1.0.2]§r 1.26.30[Chaos Cubed] Patch\n\n§oHello everyone FloofyPotato here, this patch is dedicated to fix compatibility issues that came with the latest update§r\n\n§e§lPatch Notes§r:\n1.26.30[Chaos Cubed]:\n===============================\n1. §oIt's updated to the latest version of Minecraft Bedrock!§r\n\n2. Items and Blocks fixed:\n§oI have updated all of the available items and blocks§r\n\n3. Durability & Damage Optimizations:\n§oI am still working on it!§r\n\n4. Will this get updates and be maintained after 1.0 launches?\n§oI know this will probably not have very many people asking but I will answer anyway\n\nWe don't know yet, but we would like to do something special for the public beta testers after the full addon comes out which we will make an application for the supporters who are on the §9§lDiscord Server§r\n\nIf you're curious, go to the\n§l§dPublic Beta Credits Menu§r to see more info!§r`)
        .button(`§3§lOld Public Beta Logs§r\n§7[Opens Old Public Beta Logs]`)
        .button(`§c§lBack§r\n§7[Leaves Latest Public Beta Logs]`)
        .show(player).then(r => {
            if(r.selection == 0) OPBL()
            if(r.selection == 1) main()
        })
    }

    function PBC() {
        new ActionFormData()
        .title(`Public Beta Credits`)
        .body(`              §3§lScarlett's Den§r\n===============================\n§e§lDevelopers§r:\n§2Floofy Potato§r: [Coder & Co-Designer]\n§5Gothkitty§r: [Artist & Designer]\n\n§oThank you so much for participating in this journey so far, can't wait to see more of you experiencing this magical story that we're trying to develop.\n\nSee you again soon§r\n§lBlack Cat & Wolf Enterntainment§r\n\n§a§lSocial Media§r:\n§c§lYou§fTube§r: @ScarlettsDenMCOfficial\n§9§lDiscord Code§r: 54sEZy36FC\n§b§lX§r: @ScarlettsDenMC`)
        .button(`§c§lBack§r\n§7[Leaves Public Beta Credits]`)
        .show(player).then(r => {
            if(r.selection == 0) main()
        })
    }

    function OPBL() {
        new ActionFormData()
        .title(`Old Public Beta Logs`)
        .body(`This is the backlog of all updates for the Public Beta!`)
        //.button(`1.0.2-1.26.30 Patch`)
        .button(`1.0.1-1.26.10 Patch`)
        .button(`1.0.0-1.26.0 Launch`)
        .button(`§c§lBack§r\n§7[Leaves Old Public Beta Logs]`)
        .show(player).then(r => {
            //if(r.selection == 0) OPBL102PATCH()
            if(r.selection == 0) OPBL101PATCH()
            if(r.selection == 1) OPBL100LAUNCH()
            if(r.selection == 2) PBL()
        })
    }

    function OBL102PATCH() {}

    function OPBL101PATCH() {
        new ActionFormData()
        .title(`Old Public Beta Logs: 1.0.1 1.26.10 Patch`)
        .body(`Scarlett's Den: Public Beta 1.0 [1.0.1] 1.26.10 Patch\n\n§oHello everyone FloofyPotato here, this patch is dedicated to fix some features that were rushed or partially working§r\n\n§e§lPatch Notes§r:\n1. 1.26.10: It's updated to the latest version of Minecraft Bedrock!\n2. Spawn book fixed: I rushed the Change Log book for Scarlett's Den and broke it so my bad\n3. More Functionality: Add more ways to mine the new Ruby Ore with it's own tools along with Amethyst and Emerald\n4. Durability & Damage Optimizations: I realized it wasn't really fair and completely unbalanced so I hope this helps!`)
        .button(`Back`)
        .show(player).then(r => {
            if(r.selection == 0) OPBL()
        })
    }

    function OPBL100LAUNCH() {
        new ActionFormData()
        .title(`Old Public Beta Logs: 1.0.0 Launch`)
        .body(`Scarlett's Den: Public Beta Launch 1.0 [1.0.0]\n\nHello everyone and welcome to the public beta! Thank you for downloading this addon\nHere is a snippet of what will hopefully be in the final version of the addon so we hope you enjoy!`)
        .button(`Back`)
        .show(player).then(r => {
            if(r.selection == 0) OPBL()
        })
    }
})