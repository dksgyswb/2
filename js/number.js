const phonenumber = document.querySelector('[name=phonenumber]');

    let regPhoneNumber = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

    join2.onsubmit = function(e){
        e.preventDefault();
        
        if( reg2(regPhoneNumber,phonenumber,'연락처를 확인해 주십시요') ) return;

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
    
            str.match( reg('javascript','ig') ),
            str.match( reg('[^javascript]','ig') ),
            str.match( reg('[A-Z]','ig') ),
            str.match( reg('[0-9]','ig') ),
            str.match( reg('script|html','ig') ),
            str.match( reg('5$','ig') ),
            str.match( reg('\\d{3,6}','g') ),
            str.match( reg('\\d{3,}','g') ),
            str.match( reg('[ㄱ-힣]','g') )
        )

    }