/**
 * 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var storage = require('../src/index.js');

var storageKey1 = 'storageKey1';
var storageVal1 = {a: 1, b: 2};

describe('.local', function () {
    var local = storage.local;

    it('.set/.get', function () {
        expect(local.set(storageKey1, storageVal1)).toEqual(true);
        expect(local.get(storageKey1)).toEqual(storageVal1);
        expect(local.keys()).toEqual([storageKey1]);
    });

    it('.remove/.size', function () {
        expect(local.size()).toEqual(1);
        expect(local.remove(storageKey1)).toEqual(true);
        expect(local.size()).toEqual(0);
    });

    it('.clear/.size', function () {
        expect(local.clear()).toEqual(true);
        expect(local.size()).toEqual(0);
    });
});

describe('.session', function () {
    var session = storage.session;

    it('.set/.get', function () {
        expect(session.set(storageKey1, storageVal1)).toEqual(true);
        expect(session.get(storageKey1)).toEqual(storageVal1);
        expect(session.keys()).toEqual([storageKey1]);
    });

    it('.remove/.size', function () {
        expect(session.size()).toEqual(1);
        expect(session.remove(storageKey1)).toEqual(true);
        expect(session.size()).toEqual(0);
    });

    it('.clear/.size', function () {
        expect(session.clear()).toEqual(true);
        expect(session.size()).toEqual(0);
    });
});
