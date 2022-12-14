package com.example.departmentbuildingclient.Callback;

import com.example.departmentbuildingclient.Model.BestDealModel;
import com.example.departmentbuildingclient.Model.PopularCategoryModel;

import java.util.List;

public interface IBestDealCallbackListener {
    void onBestDealLoadSuccess(List<BestDealModel> bestDealModels);
    void onBestDealLoadFailed(String message);
}
