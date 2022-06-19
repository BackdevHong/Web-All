const button = $(".tab-button");
const content = $(".tab-content");

$(".list").click((e) => {
    TabOpen(e.target.dataset.id);
});

function TabOpen(i) {
    content.removeClass("show");
    content.eq(i).addClass("show");
    button.removeClass("orange");
    button.eq(i).addClass("orange");
}

// var car2 = {
//     name: '소나타',
//     price: [50000, 3000, 4000],
//     color: 'white'
// } // kay : value

// $(".car-title").html(
//     car2.name
// )

// $(".car-price").html(
//     car2.price[0]
// )

const code = $('.form-select').eq(0)
const code2 = $('.form-select').eq(1)
var pants = [28, 30, 32, 34];
var shirts = [95, 100, 105];

code.on('input', (e) => {
    const value = e.currentTarget.value;
    if (value === "셔츠") {
        code2.removeClass('form-hide')
        $('.form-change').html('')
        shirts.forEach((shirtsCount) => {
            $('.form-change').append(`<option>${shirtsCount}</option>`)
        })
    } else if (value === "바지") {
        code2.removeClass('form-hide')
        $('.form-change').html('')
        pants.forEach((count) => {
            $('.form-change').append(`<option>${count}</option>`)
        })
    } else {
        code2.addClass('form-hide')
    }
})

// var obj = { name: 'kim', age: 20 }
// for (var key in obj) {
//     console.log(key, ':', obj[key]);
// } ( obj도 반복가능)