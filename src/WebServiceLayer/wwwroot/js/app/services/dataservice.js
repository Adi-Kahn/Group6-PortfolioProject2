﻿
define(['jquery', 'config', 'knockout'], function ($, config, ko) {
   

    var getSearchPosts = function (searchword, callback) {
        var url = config.serverApi.searchUrl + searchword;
        $.getJSON(url, function (data) {
            callback(data);
        });
    };

    var getSearchHistory = function (callback) {
        var url = config.serverApi.historyUrl;
        $.getJSON(url, function (data) {
            callback(data);
        });
    };

    var getPaginationData = function (url, callback) {
        $.getJSON(url,
            function (data) {
                callback(data);
            });
    };

    var getAnnotation = function (callback) {
        var url = config.serverApi.owncommentsUrl;
        $.getJSON(url,
            function (data) {
                callback(data);
            });
    };

    var deleteHistory = function (url) {

        $.ajax({
            type: "DELETE",
            url: url
        });
    };
    var getWordCloud = function (searchValue, callback) {

        return $.ajax({
            type: "Get",
            url: "api/wordcloud?word=" + searchValue,
            dataType: 'json',
            contentType: "application/json",
            success: function (data) {
                callback(data);
            }

        });

    };

    var SearchpostsRankword = function (url, searchword, callback) {
        url = config.serverApi.searchUrl + searchword;
        $.getJSON(url, function (data) {
            callback(data);
        });
    };

    var getPostDetail = function (url, callback) {
        $.getJSON(url, function (data){
            callback(data);
        });
    };

    var getPostDetailsFromDB = function (url, callback) {
        $.getJSON(url, function (data) {
            callback(data);
        });
    };

    var sendannotationToSendToDb = function (annotationData) {
        //var url = config.serverApi.owncommentsUrl;
        //var data = ko.toJS(annotationData);
        //$.ajax({
        //    url: url,
        //    type: "Post",
        //    data: JSON.stringify({ "postId": 19, "commentScore": 1, "commentText": "frontend", "commentCreated": "2016-12-15T15:28:46" }),
        //    dataType: 'json',
        //    success: callback
        //});
        return jQuery.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            'type': 'POST',
            'url': 'api/owncomments',
            'data': JSON.stringify(annotationData),
            'dataType': 'json'
        });
    };

    return {
        getSearchPosts,
        getSearchHistory,
        getAnnotation,
        getPaginationData,
        deleteHistory,
        SearchpostsRankword,
        postsLists,
        getWordCloud

    };
});


