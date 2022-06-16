// const button = $(".tab-button");
// const content = $(".tab-content");

// // for (let i = 0; i < content.length; i++) {
// // 	button.eq(i).click(() => {
// // 		TabOpen(i);
// // 	});
// // }

// $(".list").click((e) => {
// 	TabOpen(e.target.dataset.id);
// });

// function TabOpen(i) {
// 	content.removeClass("show");
// 	content.eq(i).addClass("show");
// 	button.removeClass("orange");
// 	button.eq(i).addClass("orange");
// }

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

const code2 = $('.form-select').eq(0)
const code = $('.form-select').eq(1)
code2.on('input', (e) => {
    const value = e.currentTarget.value;
    if (value === "셔츠") {
        code.removeClass('form-hide')
    } else {
        code.addClass('form-hide')
    }
})
