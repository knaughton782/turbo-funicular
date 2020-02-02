let restaurant = {
    name: 'Chilis',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        
        return partySize <= seatsLeft;
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize;
        console.log(this.guestCount);

    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCapacity - partySize;
        console.log(this.guestCount);
    }
}

//seatParty adds to guest count
//removeParty removes from guestcount
restaurant.seatParty(72);
console.log(restaurant.checkAvailability(6));
restaurant.removeParty(10);
console.log(restaurant.checkAvailability(6));