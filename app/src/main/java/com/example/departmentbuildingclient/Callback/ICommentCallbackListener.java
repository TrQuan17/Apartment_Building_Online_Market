package com.example.departmentbuildingclient.Callback;

import com.example.departmentbuildingclient.Model.CommentModel;

import java.util.List;

public interface ICommentCallbackListener {
    void onCommentLoadSuccess(List<CommentModel> commentModels);
    void onCommentLoadFailed(String message);
}
