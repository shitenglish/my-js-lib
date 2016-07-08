var lirendialog1 = {
    _Postion0: '__DIALOGDIV_001',
	_Postion1: '_COVER_DIV_LIREN_1',
	_Postion2: '_COVER_DIV_LIREN_2',
	_BlackCover: '<div id="' + this._Postion1 + '" style="width: 100%;height: 100%;position: fixed;_position: absolute;top: 0;bottom: 0;left: 0;right: 0;z-index: 100000;background: #000;opacity: 0.4;filter: alpha(opacity=40);_background: #000;_width:100%;_height:100%;">'
            + '<iframe src="about:blank" style="width: 100%;height: 100%;position: absolute;top: 0;bottom: 0;left: 0;right: 0;z-index: -1;filter: progid:DXImageTransform.Microsoft.Alpha(opacity:0);_background: #FFF;" frameborder="0"></iframe>'
            + '<div style="width: 100%;height: 100%;position: absolute;left: 0;top: 0;z-index: -1;"></div>'
            + '</div>',
    /* 遮盖DIV */
    Show: function (url, title, width, height) {
		
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
        var str1 = "this.style.color='#ffffff'";
        var str2 = "this.style.color='#428bca'";
        var text = '<div id="' + this._Postion0 + '">'
            + this._BlackCover
            /* 上面是遮盖DIV，下面是浮动DIV（内含iframe元素）*/
            + '<div id="' + this._Postion2 + '" style="width: ' + w + 'px;position: fixed;_position: absolute;top: ' + parseInt(_top) + 'px;left: 50%;_margin-left: -' + marginLeft + 'px;margin-left: -' + marginLeft + 'px;z-index: 100001;overflow: hidden;_zoom: 1;">'
            + '<div style="font-size: 14px;height: 34px;line-height: 35px;background: #101010;border-top-right-radius: 4px;border-top-left-radius: 4px;overflow: hidden;_zoom: 1;">'
            + '<span style="width: 80%;float: left;text-indent: 10px;color: #999999;overflow: hidden;_zoom: 1;" >' + title + '</span>'
            + '<span style="width: 60px;float: right;text-align: center;"><a style="cursor: pointer;" onmouseover="' + str1 + '" onmouseout="' + str2 + '" onclick="lirendialog1.Hide(window)">[关闭]</a></span>'
            + '</div>'
            + '<div style="width: ' + w + 'px;height: ' + h + 'px;background: #336699;border-bottom-right-radius: 4px;border-bottom-left-radius: 4px;">'
            + '<iframe src="' + url + '" frameborder="0" style="width: 100%;height: 100%;border-bottom-right-radius: 4px;border-bottom-left-radius: 4px;"></iframe>'
            + '</div>'
            + '</div>'
            + '</div>';
				
        document.body.insertAdjacentHTML('afterBegin', text);
		/* 隐藏页面纵向滚动条 */
        /* document.body.style.overflow = 'hidden';  IE7+，Webkit 内核浏览器 */
		/* document.body.setAttribute('style','_background-image: url(about:blank);_background-attachment: fixed;overflow: hidden;_zoom: 1;'); */
        /* document.body.overflow = 'hidden'; */
        /* document.body.parentNode.style.overflowY = 'hidden'; /* IE7 浏览器 */
    },
	Show1: function (url, title) {
	    var str1 = "this.style.color='#ffffff'";
	    var str2 = "this.style.color='#428bca'";
        var text = '<div id="' + this._Postion0 + '">'
            + this._BlackCover
            /* 上面是遮盖DIV，下面是浮动DIV（内含iframe元素）*/
            + '<div id="' + this._Postion2 + '" style="position: fixed;_position: absolute;top: 40px;bottom: 40px;left: 40px;right: 40px;z-index: 100001;overflow: hidden;_zoom: 1;">'
            + '<div style="font-size: 14px;height: 34px;line-height: 35px;background: #101010;border-top-right-radius: 4px;border-top-left-radius: 4px;overflow: hidden;_zoom: 1;">'
            + '<span style="width: 80%;float: left;text-indent: 10px;color: #999999;overflow: hidden;_zoom: 1;" >' + title + '</span>'
            + '<span style="width: 60px;float: right;text-align: center;"><a style="cursor: pointer;" onmouseover="' + str1 + '" onmouseout="' + str2 + '" onclick="lirendialog1.Hide(window)">[关闭]</a></span>'
            + '</div>'
            + '<div style="position: fixed;top: 76px;bottom: 42px;left: 42px;right: 42px;background: #336699;border-bottom-right-radius: 4px;border-bottom-left-radius: 4px;">'
            + '<iframe src="' + url + '" frameborder="0" style="width: 100%;height: 100%;top: 0;bottom: 0;border-bottom-right-radius: 4px;border-bottom-left-radius: 4px;"></iframe>'
            + '</div>'
            + '</div>'
            + '</div>';
        document.body.insertAdjacentHTML('afterBegin', text);
		/* 隐藏页面纵向滚动条 */
        /* document.body.style.overflow = 'hidden';  IE7+，Webkit 内核浏览器 */
		/* document.body.setAttribute('style','_background-image: url(about:blank);_background-attachment: fixed;overflow: hidden;_zoom: 1;'); */	
	    /* document.body.overflow = 'hidden'; */
	    /* document.body.parentNode.style.overflowY = 'hidden'; /* IE7 浏览器 */
	},
    Hide: function() {
        var len = arguments.length;
        switch (len) {
        case 0:
			parent.document.getElementById(this._Postion0).parentNode.removeChild(parent.document.getElementById(this._Postion0));
			/* 恢复页面纵向滚动条 */
            /* parent.document.body.style.overflow = ''; /* IE7+，Webkit 内核浏览器 */
            /* parent.document.body.parentNode.style.overflowY = ''; /* IE7 浏览器 */
            break;
        case 1:
            var obj = arguments[0];
			obj.document.getElementById(this._Postion0).parentNode.removeChild(obj.document.getElementById(this._Postion0));
			/* 恢复页面纵向滚动条 */
            /* obj.document.body.style.overflow = ''; /* IE7+，Webkit 内核浏览器 */
            /* obj.document.body.parentNode.style.overflowY = ''; /* IE7 浏览器 */
            break;
        }
    }
	
}