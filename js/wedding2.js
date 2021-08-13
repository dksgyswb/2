
window.onload = function() {
        
    $('.slider_slides ul').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        arrows:false,
        autoplay : true,
        autoplaySpeed : 1000,
        dots: true,
        dotsClass : "slick-dots",
        draggable : true             
    });
}



// window.onload = function() {
//     var sliderLeft=0;
//     var first=1;
//     var last;
//     var imgCnt=0;
//     var $img = $(".slider_slides img");
//     var $first;
//     var $last;

//     $img.each(function(){
//         $(this).css("left",sliderLeft);
//         slideLeft += $(this).width()+3;
//         $(this).attr("id", "slide"+(++imgCnt));
//     });

    
//     if( imgCnt > 7){



//         last = imgCnt;

//         setInterval(function() {
//             $img.each(function(){
//                 $(this).css("left", $(this).position().left-1);
//             });
//             $first = $("#slide"+first);
//             $last = $("#slide"+last);
//             if($first.position().left < -200) {
//                 $first.css("left", $last.position().left + $last.width()+5 );
//                 first++;
//                 last++;
//                 if(last > imgCnt) { last=1; }   
//                 if(first > imgCnt) { first=1; }
//             }
//         }, 50);

        

// }

// };




// new Slider('slider-2 img', {

// 	slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
// 	spaceBetween : 30, // 슬라이드간 간격
// 	slidesPerGroup : 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음

// 	// 그룹수가 맞지 않을 경우 빈칸으로 메우기
// 	// 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
// 	loopFillGroupWithBlank : true,

// 	loop : true, // 무한 반복

// });
// var slideIndex = 0;
// carousel();

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("slider-2");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > x.length) {slideIndex = 1}
//     x[slideIndex-1].style.display = "block";
//     setTimeout(carousel, 2000);
// }