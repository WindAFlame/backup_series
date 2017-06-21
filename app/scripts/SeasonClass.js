// Constructor
function Season(number,listEpisode) {
    this.id = "tab"+number+"-season";
    this.hid = "#"+this.id;
    this.number = number;
    this.listEpisode = listEpisode;
}

// GETTERS & SETTERS

// Méthodes
Season.prototype.toString = function() {
    return "Season [number="+this.number+"; listEpisode="+this.listEpisode+"]";
};