module.exports = {
    /**
     *  This small method is kept intentionally simple to help
     *  demonstrate the cucumber library.
     * @param {string} today 
     * @returns {string} Answer based on whether or not input was `"Friday"`
     */
    isItFriday: function(today) {
        if (today === "Friday") {
            return "TGIF";
        } else {
            return "Nope";
        }
    }
}