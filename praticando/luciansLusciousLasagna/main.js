const expecteMinutesInOven = 40

function remainingMinutesInOven (currentTime) {
    return expecteMinutesInOven - currentTime
}

function preparationTimeInMinutes (numberOfLayers) {
    return numberOfLayers * 2
}
