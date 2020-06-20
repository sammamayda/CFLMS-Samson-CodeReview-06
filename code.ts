//$(document).ready(function () {
    var id = 0;
    var mainRow = document.getElementById("mainRow");
    var mainRowAsc = document.getElementById("mainRow2");
    if (mainRow) {
     //   Render(mainRow);
    }
    //function Render(theNode) {
        var toRender = []
        var Locations = /** @class */ (function () {
            function Locations(name, city, zipCode, address, img, created) {
                this.name = ""
                this.name = name
                this.city = city
                this.zipCode = zipCode
                this.address = address
                this.img = img
                this.created = created
  //          ()}