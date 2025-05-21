//Add firearms
//This is set mostly to work with the Artificer's Firearm proficiency feature
Hooks.once("init", () => {
    CONFIG.DND5E.weaponProficiencies.farm = "Firearms"
    CONFIG.DND5E.weaponProficienciesMap.firearm = "farm"
    CONFIG.DND5E.weaponTypeMap.firearm = "ranged"
    CONFIG.DND5E.weaponTypes.firearm = "Firearm"
});
//Allow feats to have more advancement types.
//Mostly meant for general feats which grant things to players other than 
//ability score improvements
Hooks.on("init", () =>{
    CONFIG.DND5E.advancementTypes.Trait.validItemTypes = new Set(["background", "class", "feat", "race", "subclass"])
    CONFIG.DND5E.advancementTypes.ScaleValue.validItemTypes = new Set(["background", "class", "feat", "race", "subclass"])
    CONFIG.DND5E.advancementTypes.ItemGrant.validItemTypes = new Set(["background", "class", "feat", "race", "subclass"])
    CONFIG.DND5E.advancementTypes.ItemChoice.validItemTypes = new Set(["background", "class", "feat", "race", "subclass"])
});