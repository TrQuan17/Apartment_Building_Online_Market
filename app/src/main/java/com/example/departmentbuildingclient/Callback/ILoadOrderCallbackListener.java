package com.example.departmentbuildingclient.Callback;

import com.example.departmentbuildingclient.Model.Order;

import java.util.List;

public interface ILoadOrderCallbackListener {
    void onLoadOrderSuccess(List<Order>orderList);
    void onLoadOrderFailed(String message);
}
