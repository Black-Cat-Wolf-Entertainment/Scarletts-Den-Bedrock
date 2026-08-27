import {world, system} from "@minecraft/server";
import {ActionFormData} from "@minecraft/server-ui";

world.beforeEvents.itemUse.subscribe(data => {
    let player = data.source
    let title = "Scarlett's Den Change logs"
    if(data.itemStack.typeId == "bcwe_sd:change_log_book") system.run(() => main(player))

    function main() {
        const form = new ActionFormData()
        .title(title)
        .body(`Welcome to the Logs, ${player.nameTag}`)
        .button(`§6Public Beta Menu§r\n§7[Opens Public Beta Menu]`)
        .button(`§5Change Logs§r\n§7[Opens Change Logs]`)
        .button(`§eBeta Logs§r\n§7[Opens Beta Menu]`)
        .button(`§c§lClose§r\n§7[Closes Menu]`)
        form.show(player).then(r => {
            if(r.selection == 0) PBL()
            if(r.selection == 1) CL()
            if(r.selection == 2) BL()
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

    function OPBL101PATCH() {
        new ActionFormData()
        .title(`Old Public Beta Logs: 1.0.1 Patch`)
        .body(`Scarlett's Den: Public Beta 1.0 [1.0.1] 1.26.10 Patch\n\n§oHello everyone FloofyPotato here, this patch is dedicated to fix some features that were rushed or partially working§r\n\n§e§lPatch Notes§r:\n1. 1.26.10: It's updated to the latest version of Minecraft Bedrock!\n2. Spawn book fixed: I rushed the Change Log book for Scarlett's Den and broke it so my bad\n3. More Functionality: Add more ways to mine the new Ruby Ore with it's own tools along with Amethyst and Emerald\n4. Durability & Damage Optimizations: I realized it wasn't really fair and completely unbalanced so I hope this helps!`)
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

    function CL() {
        new ActionFormData()
        .title(`Latest Change Logs`)
        .body(`§3Scarlett's Den§r:\n§lWelcome Update§r 1.0 [1.0.0]\n\n§e§lWhat's New?§r\n§oWe have Added a veriety of items, armor/tools, blocks, Biomes, structures, and QOL(Quality Of Life) improvements that we hope you'll enjoy!§r\n\n§e§lItems§r\n§oHere is a list of new items that you can obtain!§r\n1. §fChromium Ingot/Raw varient§r\n2. §cRuby§r\n\n§e§lArmor/Tools§r\n§oWe have given you 5 new armor/tool sets! Here is a list of what to expect§r\n1. §uAmethyst§r Tier\n2. §fChromium§r Tier\n3. §tLapis Lazuli§r Tier\n4. §qEmerald§r Tier\n5. §cRuby§r Tier\n\n§e§lBlocks§r\n§oNew Blocks! What type of Blocks? We'll tell you!§r\nTwo new ores:\n1. §fChromium§r Ore\n2. §cRuby§r Ore\n\n§e§lStructures§r\n§oN/A... Unless?§r\n\n§e§lBiomes§r\n§oN/A§r\n\n§e§lQOL(Quality Of Life)§r\n§oWe have converted multiple ways to uptain some items easier and to make storage less cluttered.\n\nFor example, we added the ability to Decraft your armors to free up space if needed!§r`)
        .button(`Old Change Logs`)
        .button(`§c§lBack§r\n§7[]`)
        .show(player).then(r => {
            if(r.selection == 0) OCL()
            if(r.selection == 1) main()
        })
    }
    function OCL() {
        new ActionFormData()
        .title(`Old Change Logs`)
        .button(`1.0 Release`)
        .button(`Back`)
        .show(player).then(r => {
           if(r.selection == 0) OCL1()
           if(r.selection == 1) main()
        })
    }
    function OCL1() {}

    function BL() {
        new ActionFormData()
        .title(`Beta Logs`)
        .body(`Welcome to the beta program\n${player.nameTag}!`)
        .button(`Latest Beta Logs`)
        .button(`§c§lBack§r\n§7[Click/Press To Go Back]`)
        .show(player).then(r => {
            if(r.selection == 0) LBL()
            if(r.selection == 1) main()
        })
    }

    function LBL() {
        new ActionFormData()
        .title(`Latest Beta Logs`)
        .body(`TEST`)
        .button(`§m1.0 Phase 1§r\n§7[Lost access]`)
        .button(`1.0 Phase 2\n§7[WIP]`)
        .button(`§l§cBack§r\n§7[]`)
        .show(player).then(r => {
            if(r.selection == 0) BN1()
            if(r.selection == 1) BN2()
            if(r.selection == 2) BL()
        })
    }

    function BN1() {}

    function BN2() {
        new ActionFormData()
        .title(`Scarlett's Den: Phase 2`)
        .body(`Welcome to Phase 2 of §3Scarlett's Den§r\n--------------------§r\nHere is what to expect in this Beta Update:\n\n§lBlocks§r:\n§oAdded outlines and made them a toggle for the ores(including Ruby and Chromium)\n\n§lItems§r:\n§oWe're in the process of creating their unique textures in the upcoming phases.§r\n\n§lArmor/Tools§r:\n§oThe tiers are nearly completed with their own unique textures§r\n1. §uAmethyst§r\n2. §hChromium§r\n3. §qEmerald§r\n4. §tLapis§r\n5. §cRuby§r\n\n§lBiomes§r:\n§oCurrently in the works, trying to figure things out and we have a few ideas in mind§r\n\n§lQOL§r:\nWe have included recipes to help with "usless items" to hopefully combat with storage :)`)
        .button(`§l§cBack§r\n§7[Back to Beta Logs]`)
        .show(player).then(r => {
            if(r.selection == 0) LBL()
        })
    }
})