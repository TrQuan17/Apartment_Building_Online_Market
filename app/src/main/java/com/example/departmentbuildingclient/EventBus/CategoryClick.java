package com.example.departmentbuildingclient.EventBus;

import com.example.departmentbuildingclient.Model.CategoryModel;

public class CategoryClick {
    private boolean success;
    private CategoryModel categoryModel;

    public CategoryClick(boolean success, CategoryModel categoryModel) {
        this.success = success;
        this.categoryModel = categoryModel;
    }

    public CategoryClick() {
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public CategoryModel getCatergoryModel() {
        return categoryModel;
    }

    public void setCatergoryModel(CategoryModel categoryModel) {
        this.categoryModel = categoryModel;
    }
}
