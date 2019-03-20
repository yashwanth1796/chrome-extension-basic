// this is the code which will be injected into a given page...


/* <script src="jquery-3.2.1.min.js"></script> */
// $(document).ready(function () {
//     // console.log("hii");
//     // $("body").append('<div id="company-wrapper" style="position: fixed;  top: 0px; right: 0px; z-index: 2147483647; width:1500px;height: 50px; "></div>');

//     // console.log('test');
//     // initializeContent();
//     // $.ajax({
//     //     url: 'https://jsonplaceholder.typicode.com/posts/1',
//     //     method: 'GET'
//     // }).then(function (data) {
//     //     console.log(data);
//     // });
//     // $('#refresh').click(function () {
//     // 	refresh();
//     // });
//     // setTimeout(function () {
//     // 	refresh();
//     // }, 5000);
// });
var off = document.getElementById('turnoff');
var on = document.getElementById('turnon');

window.onload = function () {
    document.getElementById("turnon").onclick = function () {
        $(document).ready(function () {
            console.log("hii");
            $("body").append('<div id="company-wrapper" style="position: fixed;  top: 0px; right: 0px; z-index: 2147483647; width:1500px;height: 50px; "></div>');

            // console.log('test');
            // initializeContent();
            // $.ajax({
            //     url: 'https://jsonplaceholder.typicode.com/posts/1',
            //     method: 'GET'
            // }).then(function (data) {
            //     console.log(data);
            // });
        });
   
}
 function initializeContent() {
    alert('in')
    var companies = [
        { "name": "Barclys", "id": 1, "rate": "+15" },
        { "name": "Lloyds", "id": 2, "rate": "+25" },
        { "name": "HSBC", "id": 3, "rate": "-8" },
        { "name": "Santander", "id": 4, "rate": "-50" },
        { "name": "Bank of scotland", "id": 5, "rate": "+55" },
        { "name": "Dow Jones", "id": 6, "rate": "+12" },
        { "name": "Amazon", "id": 7, "rate": "+8" }
    ];
    var htmlString = '';
    companies.forEach(function (company) {
        htmlString += '<div class="company" style="float:left; margin:1px 10px; background-color: yellow; color: red" id="company-' + company.id + '"><span class="company">' + company.name + '</span><span class="ticker">' + company.rate + '</span></div>';
    });
    console.log(htmlString);
    $('#company-wrapper').html("<marquee>" + htmlString + "</marquee>");
}

function refresh() {

    var companies = [
        { "name": "Barclys", "id": 1, "rate": "+15" },
        { "name": "Lloyds", "id": 2, "rate": "+25" },
        { "name": "HSBC", "id": 3, "rate": "-8" },
        { "name": "Santander", "id": 4, "rate": "-50" },
        { "name": "Bank of scotland", "id": 5, "rate": "+55" },
        { "name": "Dow Jones", "id": 6, "rate": "+12" },
        { "name": "Amazon", "id": 7, "rate": "+8" }
    ];
    var htmlString = '';
    companies.forEach(function (company) {
        var randomNumber = Math.floor(Math.random() * 201) - 100;
        htmlString += '<div  id="company-' + company.id + '"><span>' + company.name + '</span><span>' + randomNumber + '</span></div>';
    });
    $('#company-wrapper').html("<marquee>" + htmlString + "</marquee>");
    setTimeout(function () {
        refresh();
    }, 5000);

}




