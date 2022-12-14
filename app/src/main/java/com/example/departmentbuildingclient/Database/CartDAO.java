package com.example.departmentbuildingclient.Database;

import androidx.room.Dao;
import androidx.room.Delete;
import androidx.room.Insert;
import androidx.room.OnConflictStrategy;
import androidx.room.Query;
import androidx.room.Update;

import java.util.List;

import io.reactivex.Completable;
import io.reactivex.Flowable;
import io.reactivex.Single;

@SuppressWarnings("ALL")
@Dao
public interface CartDAO {

    @Query("SELECT * FROM Cart WHERE uid=:uid")
    Flowable<List<com.example.departmentbuildingclient.Database.CartItem>> getAllCart(String uid);

    @Query("SELECT SUM(foodQuantity) FROM Cart WHERE uid=:uid")
    Single<Integer> countItemInCart(String uid);

    @Query("SELECT SUM((foodPrice*foodExtraPrice) + foodQuantity) FROM Cart WHERE uid=:uid")
    Single<Double> sumPriceInCart(String uid);

    @Query("SELECT * FROM Cart WHERE foodId=:foodId AND uid=:uid")
    Single<com.example.departmentbuildingclient.Database.CartItem> getItemInCart(String foodId, String uid);

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    Completable insertOrReplaceAll(com.example.departmentbuildingclient.Database.CartItem... cardItems);

    @Update(onConflict = OnConflictStrategy.REPLACE)
    Single<Integer> updateCartItem(com.example.departmentbuildingclient.Database.CartItem cartItem);

    @Delete
    Single<Integer> deleteCartItem(com.example.departmentbuildingclient.Database.CartItem cartItem);

    @Query("DELETE FROM Cart WHERE uid=:uid")
    Single<Integer> cleanCart(String uid);

    @Query("SELECT * FROM Cart WHERE foodId=:foodId AND uid=:uid AND foodSize=:foodSize AND foodAddon=:foodAddon")
    Single<com.example.departmentbuildingclient.Database.CartItem> getItemWithAllOptionsInCart(String uid, String foodId, String foodSize, String foodAddon);
}
