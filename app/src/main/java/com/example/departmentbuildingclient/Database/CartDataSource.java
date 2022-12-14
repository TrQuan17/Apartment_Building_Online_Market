package com.example.departmentbuildingclient.Database;

import java.util.List;

import io.reactivex.Completable;
import io.reactivex.Flowable;
import io.reactivex.Single;

public interface CartDataSource {

    Flowable<List<com.example.departmentbuildingclient.Database.CartItem>> getAllCart(String uid);

    Single<Integer> countItemInCart(String uid);

    Single<Double> sumPriceInCart(String uid);

    Single<com.example.departmentbuildingclient.Database.CartItem> getItemInCart(String foodId, String uid);

    Completable insertOrReplaceAll(com.example.departmentbuildingclient.Database.CartItem... cardItems);

    Single<Integer> updateCartItem(com.example.departmentbuildingclient.Database.CartItem cartItem);

    Single<Integer> deleteCartItem(com.example.departmentbuildingclient.Database.CartItem cartItem);

    Single<Integer> cleanCart(String uid);

    Single<com.example.departmentbuildingclient.Database.CartItem> getItemWithAllOptionsInCart(String uid, String foodId, String foodSize, String foodAddon);

}
