package com.example.departmentbuildingserver.ui.category;

import androidx.annotation.NonNull;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

import com.example.departmentbuildingserver.callback.ICategoryCallbackListener;
import com.example.departmentbuildingserver.common.Common;
import com.example.departmentbuildingserver.model.CategoryModel;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.ArrayList;
import java.util.List;

public class CategoryViewModel extends ViewModel implements ICategoryCallbackListener{

    private MutableLiveData<List<CategoryModel>> catergoryListMultable;
    private MutableLiveData<String> messageError = new MutableLiveData<>();
    private ICategoryCallbackListener categoryCallbackListener;

    public CategoryViewModel() {
        categoryCallbackListener = this;
    }

    public MutableLiveData<List<CategoryModel>> getCatergoryListMultable() {
        if(catergoryListMultable == null) {
            catergoryListMultable = new MutableLiveData<>();
            messageError = new MutableLiveData<>();
            loadCategories();
        }
        return catergoryListMultable;
    }

    public void loadCategories() {
        List<CategoryModel> tempList = new ArrayList<>();
        DatabaseReference categoryRef = FirebaseDatabase.getInstance().
                getReference(Common.CATEGORY_REF);
        categoryRef.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot snapshot) {
                for (DataSnapshot itemSnapshot: snapshot.getChildren()) {
                    CategoryModel categoryModel = itemSnapshot.getValue(CategoryModel.class);
                    categoryModel.setMenu_id(itemSnapshot.getKey());
                    tempList.add(categoryModel);
                }
                categoryCallbackListener.onCategoryLoadSuccess(tempList);
            }

            @Override
            public void onCancelled(@NonNull DatabaseError error) {
                categoryCallbackListener.onCategoryLoadFailed(error.getMessage());
            }
        });
    }

    public MutableLiveData<String> getMessageError() {
        return  messageError;
    }

    @Override
    public void onCategoryLoadSuccess(List<CategoryModel> categoryModels) {
        catergoryListMultable.setValue(categoryModels);
    }

    @Override
    public void onCategoryLoadFailed(String message) {
        messageError.setValue(message);
    }
}