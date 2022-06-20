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
// const value = $(".form-select").eq(0).val();
// if (value === "셔츠") {
//     $('.form-select').eq(1).removeClass('form-hide')
//     $('.form-select').eq(0).addClass('form-hide')
// } else if (value === "모자") {
//     $('.form-select').eq(0).removeClass('form-hide')
//     $('.form-select').eq(1).addClass('form-hide')
// }