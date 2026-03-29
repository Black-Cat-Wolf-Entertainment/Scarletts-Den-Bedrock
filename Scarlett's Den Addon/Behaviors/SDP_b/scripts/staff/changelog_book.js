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
        .button(`§6Public Beta Menu§r\n§7[Opens Public Beta Menu]`)
        .button(`§c§lClose§r\n§7[Closes Menu]`)
        form.show(player).then(r => {
            if(r.selection == 0) PBL()
        })
    }

    function PBL() {
        new ActionFormData()
        .title(`Latest Public Beta Logs`)
        .body(`Scarlett's Den: Public Beta 1.0 [1.0.1] 1.26.10 Patch\n\n§oHello everyone FloofyPotato here, this patch is dedicated to fix some features that were rushed or partially working§r\n\n§e§lPatch Notes§r:\n1. 1.26.10: It's updated to the latest version of Minecraft Bedrock!\n2. Spawn book fixed: I rushed the Change Log book for Scarlett's Den and broke it so my bad\n3. More Functionality: Add more ways to mine the new Ruby Ore with it's own tools along with Amethyst and Emerald\n4. Durability & Damage Optimizations: I realized it wasn't really fair and completely unbalanced so I hope this helps!`)
        .button(`§6Old Public Beta Logs§r\n§7[Opens Old Public Beta Logs]`)
        .button(`§c§lBack§r\n§7[Leaves Latest Public Beta Logs]`)
        .show(player).then(r => {
            if(r.selection == 0) OPBL()
            if(r.selection == 1) main()
        })
    }

    function OPBL() {
        new ActionFormData()
        .title(`Old Public Beta Logs`)
        .body(`This is the backlog of all updates for the Public Beta!`)
        //.button(`1.0.1-1.26.10 Patch`)
        .button(`1.0.0-1.26.0 Launch`)
        .button(`Back`)
        .show(player).then(r => {
            //if(r.selection == 0) OPBL101PATCH()
            if(r.selection == 0) OPBL100LAUNCH()
            if(r.selection == 1) PBL()
        })
    }

    function OPBL101PATCH() {}

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