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
const 바지 = `<option>28</option>
<option>30</option>`
const 셔츠 = `<option>103</option>
<option>104</option>`

code.on('input', (e) => {
    const value = e.currentTarget.value;
    if (value === "셔츠") {
        code2.removeClass('form-hide')
        $('.form-change').html('')
        $('.form-change').append(셔츠)
    } else if (value === "바지") {
        code2.removeClass('form-hide')
        $('.form-change').html('')
        $('.form-change').append(바지)
    } else {
        code2.addClass('form-hide')
    }
})

// 방법 1 ( 순수한 코딩, 너무 길다. )
// var a = document.createElement('p')
// a.innerHTML = '안녕 World!'
// document.querySelector('#test').appendChild(a);
// a.classList.add ( 클래스 추가 )

// 방법 2 ( 아까보다 더 짧아짐 )
// var 템플릿 = "<p>안녕월드</p>";
// document.querySelector('#test').insertAdjacentHTML('beforeend', 템플릿)

// 방법 3 ( Jquery 쓰면 더 짧아짐 )
// var 템플릿 = "<p>안녕월드</p>";
// $('#test').append(템플릿)
