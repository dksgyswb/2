
// $(function(){ 
// 	$('.p_1').keydown(function(event) { 
// 		var key = event.charCode || event.keyCode || 0; 
// 		$text = $(this); 
// 		if (key !== 8 && key !== 9) { 
// 			if ($text.val().length === 3) { 
// 			$text.val($text.val() + '-'); 
// 			} 
// 			if ($text.val().length === 8) { 
// 				$text.val($text.val() + '-'); 
// 			} 
// 		} 
// 	return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
//  	}); 
// }); 

    const name = document.querySelector('[name=name]');
    var reg 
    let regName  = /^[가-힣]{2,4}$/;

    join2.onsubmit = function(e){
        e.preventDefault();
        
        if( reg2(regName,name,'이름을 확인해 주십시요') ) return;

        function reg2(reg,el,msg){
            if( !reg.test(el.value) ){
                alert(msg);
                el.value = '';
                el.focus();
                return true;
            }
            return false;
        }

     
        let str = "javascript자바스크립트 +0*/_ HTML5 02 123 123456789";
        let re;
        function reg(p,f){
            return re = new RegExp(p,f);
        }
        console.log(    
            // 전체 문자열에서 대소문자 구분없이 찾음
            str.match( reg('javascript','ig') ),
            //전체 문자열에서 javascript를 제외하고 찾음
            str.match( reg('[^javascript]','ig') ),
            //대문자 A-Z까지 검색
            str.match( reg('[A-Z]','ig') ),
            //0~9 숫자 검색
            str.match( reg('[0-9]','ig') ),
            //script 또는 html 검색
            str.match( reg('script|html','ig') ),
            //5로 끝나는 문자 검색
            str.match( reg('5$','ig') ),

            //3,6자리 숫자 검색
            str.match( reg('\\d{3,6}','g') ),
            //3이상 숫자 검색
            str.match( reg('\\d{3,}','g') ),
            //한글 검색
            str.match( reg('[ㄱ-힣]','g') )
        )

    }
