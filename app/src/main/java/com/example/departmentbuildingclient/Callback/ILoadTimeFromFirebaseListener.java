package com.example.departmentbuildingclient.Callback;

import com.example.departmentbuildingclient.Model.Order;

public interface ILoadTimeFromFirebaseListener {
    void onLoadTimeSuccess(Order order, long estimateTimeInMs);
    void onLoadTimeFailed(String message);
}
