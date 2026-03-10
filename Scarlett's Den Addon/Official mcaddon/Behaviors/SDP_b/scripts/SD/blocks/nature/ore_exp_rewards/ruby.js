import {system, EquipmentSlot} from "@minecraft/server";

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
* */

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const BlockExperienceRewardComponent = {
    onPlayerBreak({block, dimension, player}, {params}) {
        const equippable = player?.getComponent("minecraft:equippable");
        if(!equippable) return;

        const itemStack = equippable.getEquipment(EquipmentSlot.Mainhand);
        if(
            !itemStack ||
            !itemStack.hasTag("minecraft:is_tool") ||
            !itemStack.hasTag("minecraft:is_pickaxe") ||
            (
                !itemStack.hasTag("minecraft:iron_tier") &&
                !itemStack.hasTag("minecraft:diamond_tier") &&
                !itemStack.hasTag("minecraft:netherite_tier")
            )
        )
        return;

        const enchantable = itemStack.getComponent("minecraft:enchantable");
        const silkTouch = enchantable?.getEnchantment("silk_touch");
        if(silkTouch) return;

        const xpAmount = randomInt(params.min, params.max);

        for (let i = 0; i < xpAmount; i++) {
            dimension.spawnEntity("minecraft:xp_orb", block.location);
        }
    },
};

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "bcwe_sd:ruby_exp_reward",
        BlockExperienceRewardComponent
    );
});