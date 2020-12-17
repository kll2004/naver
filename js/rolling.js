    var rollingNewsInterval;
    var rollingTimeSquareInterval;

		function starRollingNews(){
			rollingNewsInterval = setInterval(() => {
                if(!$('.rolling-news .news').is(':animated')){
                    $('.rolling-news .news').first().animate({'margin-top':'-24px'},900,function(){
                        $(this).detach().appendTo('.rolling-news').removeAttr('style');
                    })
                }
            }, 1000);
        }

        function starRollingTimeSqure(){
			rollingTimeSquareInterval = setInterval(function(){
                if(!$('.timesquare-rolling .card').is(':animated')){
                    $('.timesquare-rolling .card').first().animate({'margin-left':'-281px'},1500,function(){
                        $(this).detach().appendTo('.timesquare-rolling').removeAttr('style');
                    })
                }
            }, 2000);
        }
        
        $(function(){
            // 화면 로딩 완료후 연합뉴스 롤링 
            starRollingNews();
            starRollingTimeSqure();
            $('.rolling-news .news').hover(function(){
            // 롤링 중지     
                clearInterval(rollingNewsInterval);
            }),function(){
            // 롤링 재시작     
                starRollingNews();
            }
            $('.timesquare-card').hover(function(){
                clearInterval(rollingTimeSquareInterval)
            },function(){
                starRollingTimeSqure();
            })
        })