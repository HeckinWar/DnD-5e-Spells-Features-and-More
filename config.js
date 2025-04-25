//Add firearms
//This is set mostly to work with the Artificer's Firearm proficiency feature
Hooks.once("init", () => {
    CONFIG.DND5E.weaponProficiencies.farm = "Firearms"
    CONFIG.DND5E.weaponProficienciesMap.firearm = "farm"
    CONFIG.DND5E.weaponTypeMap.firearm = "ranged"
    CONFIG.DND5E.weaponTypes.firearm = "Firearm"
});
