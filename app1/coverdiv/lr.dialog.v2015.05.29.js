/* update 2015.06.03 */
var lrdialog = {
	_postion0: '_dialog20150529152603',
	_blackCover: null /* 遮盖DIV */,
	_isIe6: (!-[1,] && !window.XMLHttpRequest)/* 是否是ie6浏览器，此段压缩时会消失 */,
	_scrollHide: false,
	coverbody: function() {
		/* 背景遮盖层 */
		var iframe = document.createElement('iframe');		
		iframe.src = 'about:blank';
		iframe.width = '100%';
		iframe.height = '100%';
		iframe.frameborder = 0;	
		iframe.style.position = 'fixed';
		iframe.style.width = '100%';
		iframe.style.height = '100%';
		iframe.style.border = 0;
		iframe.style.top = 0;
		iframe.style.bottom = 0;
		iframe.style.left = 0;
		iframe.style.right = 0;
		iframe.style.zIndex = 100000;
		iframe.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity:0)';
		
		var cover1 = document.createElement('div');		
		cover1.style.position = 'fixed';
		cover1.style.width = '100%';
		cover1.style.height = '100%';
		cover1.style.border = 0;
		cover1.style.top = 0;
		cover1.style.bottom = 0;
		cover1.style.left = 0;
		cover1.style.right = 0;
		cover1.style.zIndex = 100001;
		cover1.style.filter = 'alpha(opacity=40)';
		cover1.style.opacity = 0.4;
		cover1.style.background = '#000000';
		
		if(this._isIe6) {
			/* 如果是IE6浏览器 */
			iframe.style.position = 'absolute';
			iframe.style.background = '#cccccc';
			
			cover1.style.position = 'absolute';
			cover1.style.background = '#cccccc';		
		}
		
		_blackCover.appendChild(iframe);
		_blackCover.appendChild(cover1);
	},
	show: function (url, title, width, height) {
		
		if(this._isIe6) {
			/* 隐藏纵向滚动条 */
			document.body.parentNode.style.overflow = 'hidden';
			this._scrollHide = true;
		}
				
		_blackCover = document.createElement('div');	
		_blackCover.id = this._postion0;
		
		/* 背景遮盖层 */
		this.coverbody();
								
		/* 对话框距离窗口上方的距离 */
		var _winHeight, _top;
		if (window.innerHeight) {
			_winHeight = window.innerHeight;
		}
		else if ((document.body) && (document.body.clientHeight)) {
			_winHeight = document.body.clientHeight;
		}
		if (document.documentElement  && document.documentElement.clientHeight) {
			_winHeight = document.documentElement.clientHeight;
			/* 对话框距离窗口上方的距离，height 另外多出39像素 */
			_top = parseInt(_winHeight - height - 39) / 2;
		}
		_top = _top <= 0 ? 0 : _top;		
		
        var w = parseInt(width);
        var h = parseInt(height);
        var marginLeft = parseInt(width) / 2;
		
		var cover2 = document.createElement('div');
		cover2.style.position = 'fixed';
		cover2.style.width = w + 'px';
		cover2.style.top = parseInt(_top) + 'px';
		cover2.style.left = '50%';
		cover2.style.marginLeft = '-' + marginLeft + 'px';
		cover2.style.zIndex = 100002;
		cover2.style.overflow = 'hidden';
		cover2.style.zoom = 1;
				
			var cover2tit = document.createElement('div');
			cover2tit.style.width = '100%';
			cover2tit.style.height = '34px';
			cover2tit.style.fontSize = '14px';
			cover2tit.style.background = '#101010';
			cover2tit.style.overflow = 'hidden';
			cover2tit.style.zoom = 1;
			
				var cover2titlef = document.createElement('div');
				cover2titlef.innerHTML = title;
				cover2titlef.style.width = '70%';
				cover2titlef.style.height = '34px';
				cover2titlef.style.lineHeight = '34px';
				cover2titlef.style.styleFloat = 'left';
				cover2titlef.style.cssFloat = 'left';
				cover2titlef.style.textIndent = '10px';
				cover2titlef.style.color = '#ffffff';
				cover2titlef.style.overflow = 'hidden';
				cover2titlef.style.zoom = 1;
				
				var cover2titrig = document.createElement('div');
				cover2titrig.style.width = '34px';
				cover2titrig.style.height = '34px';
				cover2titrig.style.styleFloat = 'right';
				cover2titrig.style.cssFloat = 'right';
				cover2titrig.style.overflow = 'hidden';
				cover2titrig.style.zoom = 1;
				
					var cover2titrigcloselink = document.createElement('a');
					cover2titrigcloselink.setAttribute('onmouseover', "this.style.color='#ffffff'");
					cover2titrigcloselink.setAttribute('onmouseout', "this.style.color='#428bca'");
					cover2titrigcloselink.href = 'javascript:lrdialog.close(window);';					
					cover2titrigcloselink.innerHTML = '×';
					cover2titrigcloselink.style.height = '34px';
					cover2titrigcloselink.style.lineHeight = '34px';
					cover2titrigcloselink.style.fontSize = '28px';
					cover2titrigcloselink.style.fontFamily = '宋体,新宋体';
					cover2titrigcloselink.style.textDecoration = 'none';
					cover2titrigcloselink.style.textAlign = 'center';
					cover2titrigcloselink.style.verticalAlign = 'middle';
					cover2titrigcloselink.style.display = 'block';
					cover2titrigcloselink.style.cursor = 'pointer';
					cover2titrigcloselink.style.color = '#428bca';				
				
				cover2titrig.appendChild(cover2titrigcloselink);
				
			cover2tit.appendChild(cover2titlef);
			cover2tit.appendChild(cover2titrig);
			
			var cover2con = document.createElement('div');
			cover2con.style.width = w + 'px';
			cover2con.style.height = h + 'px';
			cover2con.style.background = '#336699';
		
				var cover2coniframe = document.createElement('iframe');
				cover2coniframe.setAttribute('frameborder', 0);
				cover2coniframe.src = url; /* 打开的对话窗口url */
				cover2coniframe.style.width = '100%';
				cover2coniframe.style.height = '100%';
		
			cover2con.appendChild(cover2coniframe);
		
		cover2.appendChild(cover2tit);
		cover2.appendChild(cover2con);
		
		if(this._isIe6) {
			/* 如果是IE6浏览器 */	
			cover2.style.position = 'absolute';
		}
		
		_blackCover.appendChild(cover2);
		
		/* 向<body></body>中添加节点 */
        /* document.body.appendChild(_blackCover); */
		document.body.insertBefore(_blackCover, document.body.firstChild);
	},
	shownosize: function (url, title, padding) {
		var marginval = parseInt(padding);
		
		/* 隐藏纵向滚动条 */
		document.body.parentNode.style.overflow = 'hidden'; /* IE7 浏览器 */
				
		_blackCover = document.createElement('div');	
		_blackCover.id = this._postion0;
		
		/* 背景遮盖层 */
		this.coverbody();
								
		var cover2tit = document.createElement('div');
		cover2tit.style.position = 'fixed';
		cover2tit.style.height = '34px';
		cover2tit.style.top = marginval + 'px';
		cover2tit.style.right = marginval + 'px';
		cover2tit.style.left = marginval + 'px';
		cover2tit.style.fontSize = '14px';
		cover2tit.style.background = '#101010';
		cover2tit.style.zIndex = 100003;
		cover2tit.style.overflow = 'hidden';
		cover2tit.style.zoom = 1;
		
			var cover2titlef = document.createElement('div');
			cover2titlef.innerHTML = title;
			cover2titlef.style.width = '70%';
			cover2titlef.style.height = '34px';
			cover2titlef.style.lineHeight = '34px';
			cover2titlef.style.styleFloat = 'left';
			cover2titlef.style.cssFloat = 'left';
			cover2titlef.style.textIndent = '10px';
			cover2titlef.style.color = '#ffffff';		
			cover2titlef.style.overflow = 'hidden';
			cover2titlef.style.zoom = 1;
			
			var cover2titrig = document.createElement('div');
			cover2titrig.style.width = '34px';
			cover2titrig.style.height = '34px';
			cover2titrig.style.styleFloat = 'right';
			cover2titrig.style.cssFloat = 'right';
			cover2titrig.style.overflow = 'hidden';
			cover2titrig.style.zoom = 1;
			
				var cover2titrigcloselink = document.createElement('a');
				cover2titrigcloselink.setAttribute('onmouseover', "this.style.color='#ffffff'");
				cover2titrigcloselink.setAttribute('onmouseout', "this.style.color='#428bca'");
				cover2titrigcloselink.href = 'javascript:lrdialog.close(window);';					
				cover2titrigcloselink.innerHTML = '×';
				cover2titrigcloselink.style.height = '34px';
				cover2titrigcloselink.style.lineHeight = '34px';
				cover2titrigcloselink.style.fontSize = '28px';
				cover2titrigcloselink.style.fontFamily = '宋体,新宋体';
				cover2titrigcloselink.style.textDecoration = 'none';
				cover2titrigcloselink.style.textAlign = 'center';
				cover2titrigcloselink.style.verticalAlign = 'middle';
				cover2titrigcloselink.style.display = 'block';
				cover2titrigcloselink.style.cursor = 'pointer';
				cover2titrigcloselink.style.color = '#428bca';				
			
			cover2titrig.appendChild(cover2titrigcloselink);
			
		cover2tit.appendChild(cover2titlef);
		cover2tit.appendChild(cover2titrig);
		
		var cover2con = document.createElement('div');
		cover2con.style.position = 'fixed';
		cover2con.style.top = marginval + 34 + 'px';
		cover2con.style.bottom = marginval + 'px';
		cover2con.style.left = marginval + 'px';
		cover2con.style.right = marginval + 'px';
		cover2con.style.background = '#336699';
		cover2con.style.zIndex = 100003;
		cover2con.style.overflow = 'hidden';
		cover2con.style.zoom = 1;
			
			var cover2coniframe = document.createElement('iframe');
			cover2coniframe.setAttribute('frameborder', 0);
			cover2coniframe.style.width = '100%';
			cover2coniframe.style.height = '100%';
			cover2coniframe.src = url; /* 打开的对话窗口url */
	
		cover2con.appendChild(cover2coniframe);
				
		if(this._isIe6) {
			/* 如果是IE6浏览器 */		
			cover2tit.style.position = 'absolute';
			cover2tit.style.top = 0;
			cover2tit.style.right = 0;
			cover2tit.style.left = 0;
			
			cover2con.style.position = 'absolute';
			cover2con.style.top = '34px';
			cover2con.style.bottom = 0;
			cover2con.style.left = 0;
			cover2con.style.right = 0;
		}
		
		_blackCover.appendChild(cover2tit);
		_blackCover.appendChild(cover2con);
		
		/* 向<body></body>中添加节点 */
        /* document.body.appendChild(_blackCover); */
		document.body.insertBefore(_blackCover, document.body.firstChild);
	},
	close: function() {
		var callfrom = null;
		
		var len = arguments.length;
        switch (len) {
			case 0: callfrom = parent; break;
			case 1:	callfrom = arguments[0]; break;
        }
		
		callfrom.document.body.removeChild(callfrom.document.getElementById(this._postion0));
		
		if(this._scrollHide){
			/* 恢复滚动条 */		
			callfrom.document.body.parentNode.style.overflow = '';
		}
	}
}