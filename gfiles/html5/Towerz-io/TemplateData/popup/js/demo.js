	$(function(){
    /*
		//ç‚¹å‡»å¼¹å‡º å·²ç»å­˜åœ¨çš„dialog
		$('#btn1').on('click', function(e){
			
			$.maskUI.open({
				elem: $('#maskuiDialog1')
			});
		});



		//è¿™æ˜¯åŠ¨æ€æ·»åŠ çš„HTML
		$('#btn2').on('click', function(e){
			$.maskUI.open({
				content: '<h3>Title</h3><div>Content goes here</div><p><a href="javascript:;" class="maskui_close">Confirm</a></p>'
			});
		});

    //å…³é—­æ—¶ä¸åˆ é™¤
    $('#btn2-2').on('click', function(e){
        $.maskUI.open({
          content: '<h3>Title</h3><div>Content goes here</div><p><a href="javascript:;" class="maskui_close">Confirm</a></p>',

          //id + destroy=false
          id: 'remainDialog',
          destroy: false
        });
    });

    $('#btn2-3').on('click', function(e){
      $.maskUI.open({
        content: '<h3>Title</h3><div style="height: 1000px;">Content goes here</div><p><a href="javascript:;" class="maskui_close">Confirm</a></p>'
      });
    });

		//alert
		$('#btn3').on('click', function(){
			$.maskUI.alert('Alert message');
		});


		//confirm
		$('#btn4').on('click', function(){
			//ä¼ å…¥confirmçš„å†…å®¹ å’Œ ç‚¹å‡»ConfirmåŽæ‰§è¡Œçš„äº‹ä»¶ callbacké‡Œthisä¸ºjqueryå¯¹è±¡ æŒ‡å‘å¼¹å‡ºå±‚
			$.maskUI.confirm({
				msg: 'Are you sure to delete this item!',
				callback: function(){
					alert('ok');
				}
			})
			
		});


    $('#btn5').on('click', function(e){
      $.maskUI.open({
        content: '<h1>onOpen</h1><h4>callback</h4><p class="t-center"><a href="javascript:;" class="dialog_btn maskui_close">Confirm</a></p><p>&nbsp;</p>',
        onOpen: function(){
          alert('before opening dialog ï¼');
        }
      });
    });

    $('#btn6').on('click', function(e){
      $.maskUI.open({
        content: '<h1>onClose</h1><h4>callback</h4><p class="t-center"><a href="javascript:;" class="dialog_btn maskui_close">Confirm</a></p><p>&nbsp;</p>',
        onClose: function(){
          alert('after closing dialog ï¼');
        }
      });
    });

    $('#btn7').on('click', function(e){
      $.maskUI.open({
        content: '<div>Click the overly to close</div><p><a href="javascript:;" class="maskui_close">Confirm</a></p>',
        overlayClick: true
      });
    });

    $('#btn8').on('click', function(e){
      $.maskUI.open({
        content: '<div>Click the overly to close</div><p><a href="javascript:;" class="maskui_close">Confirm</a></p>',
        needOverlay: false
      });
    });
    */

   $('#btn7').on('click', function(e){
    $.maskUI.open({
      //content: '<div>Click the overly to close</div><p><a href="javascript:;" class="maskui_close">Confirm</a></p>',
      elem: $('#maskuiDialog1'),
      overlayClick: true
    });
  });
	});
