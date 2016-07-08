/**
 * use window.location.hash like： #a=111&b=222&c=333
 * liren,2016-01-20 19:24:08
 * @returns {} 
 */
function Hashwork() {
    this._loadobj = new Object();
    this._window = null;

    /**
     * 从 url 中解析 hash
     * @param {} window 
     * @param {} hashstr 
     * @returns {} 
     */
    this._load = function (window, hashstr) {
        this._window = window;

        if (hashstr.length > 0) {
            hashstr = hashstr.replace('#', '');
            var arr1 = new Array();
            arr1 = hashstr.split('&');

            for (var i=0;i<arr1.length;i++) {
                var s = arr1[i];

                var arr2 = s.split('=');
                if (arr2.length > 1) {
                    this._loadobj[arr2[0]] = arr2[1];
                }
            }
        }
    }

    /**
     * 保存hash到 url
     * @param {} hashobj 
     * @returns {} 
     */
    this._save = function(hashobj) {
        var temparr1 = new Array();
        var count = 0;
        for (var k in hashobj) {
            temparr1[count] = k + '=' + hashobj[k];
            count++;
        }

        var result1 = '';
        if (temparr1.length > 0) result1 = temparr1.join('&');

        this._window.location.hash = result1;
    }

    /**
     * 设置hash值
     * @param {} k 
     * @param {} v 
     * @returns {} 
     */
    this.set = function (k, v) {
        this._loadobj[k] = encodeURI(v);
        this._save(this._loadobj)
    }

    /**
     * 获取hash值
     * @param {} k 
     * @returns {} 
     */
    this.get = function (k) {
        return typeof (this._loadobj[k]) != 'undefined' ? decodeURI(this._loadobj[k]) : '';
    }
}