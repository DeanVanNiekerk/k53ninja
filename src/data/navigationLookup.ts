import { NavigationData } from "./";

const navigationData: NavigationData = {
    nav: [
        "nav.vehicleControls",
        "nav.rulesOfTheRoad",
        "nav.defensiveDriving",
        "nav.roadMarkings",
        "nav.roadSignals",
        "nav.signs",
    ],
    "nav.rulesOfTheRoad": [
        "nav.rulesOfTheRoad.theDriver",
        "nav.rulesOfTheRoad.theRoad",
        "nav.rulesOfTheRoad.theCar",
        "nav.rulesOfTheRoad.driving",
    ],
    "nav.rulesOfTheRoad.theDriver": [
        "nav.rulesOfTheRoad.theDriver.learnerDrivers",
        "nav.rulesOfTheRoad.theDriver.driversDuties",
        "nav.rulesOfTheRoad.theDriver.accidents",
        "nav.rulesOfTheRoad.theDriver.alcoholDrugs",
        "nav.rulesOfTheRoad.theDriver.cellphones",
    ],
    "nav.rulesOfTheRoad.theRoad": [
        "nav.rulesOfTheRoad.theRoad.damageToPublicRoads",
        "nav.rulesOfTheRoad.theRoad.peopleOnTheRoad",
        "nav.rulesOfTheRoad.theRoad.vehiclesOnTheRoad",
        "nav.rulesOfTheRoad.theRoad.freeways",
    ],
    "nav.rulesOfTheRoad.theCar": [
        "nav.rulesOfTheRoad.theCar.unauthorisedUse",
        "nav.rulesOfTheRoad.theCar.lights",
        "nav.rulesOfTheRoad.theCar.seatBelts",
        "nav.rulesOfTheRoad.theCar.tyres",
        "nav.rulesOfTheRoad.theCar.otherEquipment",
        "nav.rulesOfTheRoad.theCar.emergencyTriangles",
        "nav.rulesOfTheRoad.theCar.transportingGoods",
        "nav.rulesOfTheRoad.theCar.numberOfPassengers",
    ],
    "nav.rulesOfTheRoad.driving": [
        "nav.rulesOfTheRoad.driving.speedLimits",
        "nav.rulesOfTheRoad.driving.stopping",
        "nav.rulesOfTheRoad.driving.parking",
        "nav.rulesOfTheRoad.driving.dividedRoads",
        "nav.rulesOfTheRoad.driving.changingLanes",
        "nav.rulesOfTheRoad.driving.intersections",
        "nav.rulesOfTheRoad.driving.signalling",
        "nav.rulesOfTheRoad.driving.overtaking",
        "nav.rulesOfTheRoad.driving.towing",
    ],
    "nav.defensiveDriving": [
        "nav.defensiveDriving.introToK53",
        "nav.defensiveDriving.typesOfHazards",
        "nav.defensiveDriving.dealingWithHazards",
        "nav.defensiveDriving.clearSpace",
        "nav.defensiveDriving.observing",
        "nav.defensiveDriving.generalK53Procedure",
    ],
    "nav.roadMarkings": [
        "nav.roadMarkings.guidanceMarkings",
        "nav.roadMarkings.regulatoryMarkings",
        "nav.roadMarkings.warningMarkings",
    ],
    "nav.roadMarkings.regulatoryMarkings": [
        "nav.roadMarkings.regulatoryMarkings.longitudinalRegulatoryMarkings",
        "nav.roadMarkings.regulatoryMarkings.transverseRegulatoryMarkings",
    ],
    "nav.roadSignals": ["nav.roadSignals.regulatorySignals", "nav.roadSignals.warningSignals"],
    "nav.roadSignals.regulatorySignals": [
        "nav.roadSignals.regulatorySignals.otherRegulatorySignals",
        "nav.roadSignals.regulatorySignals.overheadLaneDirectionControlSignals",
        "nav.roadSignals.regulatorySignals.redFlashingSignals",
        "nav.roadSignals.regulatorySignals.trafficSignals",
    ],
    "nav.roadSignals.regulatorySignals.otherRegulatorySignals": [
        "nav.roadSignals.regulatorySignals.otherRegulatorySignals.flagSignals",
        "nav.roadSignals.regulatorySignals.otherRegulatorySignals.handSignals",
    ],
    "nav.roadSignals.regulatorySignals.trafficSignals": [
        "nav.roadSignals.regulatorySignals.trafficSignals.pedestrianAndPedalCyclistLightSignals",
        "nav.roadSignals.regulatorySignals.trafficSignals.vehicularLightSignals",
    ],
    "nav.signs": [
        "nav.signs.guidance",
        "nav.signs.information",
        "nav.signs.regulatory",
        "nav.signs.warning",
    ],
    "nav.signs.guidance": [
        "nav.signs.guidance.diagrammaticSigns",
        "nav.signs.guidance.directionSigns",
        "nav.signs.guidance.freewayDirectionSigns",
        "nav.signs.guidance.locationSigns",
        "nav.signs.guidance.routeMarkerSigns",
        "nav.signs.guidance.tourismDirectionSigns",
    ],
    "nav.signs.regulatory": [
        "nav.signs.regulatory.command",
        "nav.signs.regulatory.comprehensive",
        "nav.signs.regulatory.control",
        "nav.signs.regulatory.derestriction",
        "nav.signs.regulatory.exclusive",
        "nav.signs.regulatory.prohibition",
        "nav.signs.regulatory.reservations",
    ],
    "nav.signs.warning": [
        "nav.signs.warning.advancedWarningSigns",
        "nav.signs.warning.hazardMarkerSigns",
    ],
    "nav.signs.warning.advancedWarningSigns": [
        "nav.signs.warning.advancedWarningSigns.directionOfMovementSigns",
        "nav.signs.warning.advancedWarningSigns.roadLayoutSigns",
        "nav.signs.warning.advancedWarningSigns.symbolicSigns",
    ],
};

export { navigationData };
