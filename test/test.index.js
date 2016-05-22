/**
 * 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var storage = require('../src/index.js');

var storageKey1 = 'storageKey1';
var storageVal1 = {a: 1, b: 2};

describe('测试文件', function () {
    var sessionStorage = storage(window.sessionStorage);

    it('.set/.get', function () {
        expect(sessionStorage.set(storageKey1, storageVal1)).toEqual(true);
        expect(sessionStorage.get(storageKey1)).toEqual(storageVal1);
        expect(sessionStorage.keys()).toEqual([storageKey1]);
    });

    it('.remove/.size', function () {
        expect(sessionStorage.size()).toEqual(1);
        expect(sessionStorage.remove(storageKey1)).toEqual(true);
        expect(sessionStorage.size()).toEqual(0);
    });

    it('.clear/.size', function () {
        expect(sessionStorage.clear()).toEqual(true);
        expect(sessionStorage.size()).toEqual(0);
    });
});
