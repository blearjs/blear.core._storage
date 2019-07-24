/**
 * JSON 格式存储器
 * @author ydr.me
 * @updated 2016年11月26日16:39:19
 */


'use strict';


var json = require('blear.utils.json');

var win = window;
var storageBuilder = module.exports = function (storage) {
    var exports = {};


    var getStorage = function (key) {
        var ret = null;

        try {
            ret = storage.getItem(key);
            ret = json.safeParse(ret);
        } catch (err) {
            ret = null;
        }

        return ret && ret.data || null;
    };


    var setStorage = function (key, val) {
        try {
            val = json.safeStringify({data: val, timestamp: Date.now()});
            storage.setItem(key, val);
            return true;
        } catch (err) {
            /* istanbul ignore next */
            return false;
        }
    };


    var removeStorage = function (key) {
        try {
            storage.removeItem(key);
            return true;
        } catch (err) {
            /* istanbul ignore next */
            return false;
        }
    };


    var clearStorage = function () {
        try {
            storage.clear();
            return true;
        } catch (err) {
            /* istanbul ignore next */
            return false;
        }
    };

    var getStorageKeys = function () {
        try {
            var length = storage.length;
            var keys = [];

            while (length--) {
                keys.push(storage.key(length));
            }

            return keys;
        } catch (err) {
            /* istanbul ignore next */
            return [];
        }
    };


    var getStorageSize = function () {
        try {
            return storage.length;
        } catch (err) {
            /* istanbul ignore next */
            return 0;
        }
    };


    /**
     * 获取 storage
     * @param key {String} 存储键
     * @returns {Object}
     */
    exports.get = function (key) {
        return getStorage(key);
    };


    /**
     * 设置 storage
     * @param key {String} 存储键
     * @param val {Object} 存储值
     * @returns {boolean}
     */
    exports.set = function (key, val) {
        return setStorage(key, val);
    };


    /**
     * 移除 storage
     * @param key {String} 存储键
     * @returns {boolean}
     */
    exports.remove = function (key) {
        return removeStorage(key);
    };


    /**
     * 清空 storage
     * @returns {boolean}
     */
    exports.clear = function () {
        return clearStorage();
    };


    /**
     * 获取 storage 键
     * @returns {array}
     */
    exports.keys = function () {
        return getStorageKeys();
    };


    /**
     * 获取 storage 容量
     * @returns {number}
     */
    exports.size = function () {
        return getStorageSize();
    };


    return exports;
};

module.exports.local = storageBuilder(win.localStorage);
module.exports.session = storageBuilder(win.sessionStorage);
