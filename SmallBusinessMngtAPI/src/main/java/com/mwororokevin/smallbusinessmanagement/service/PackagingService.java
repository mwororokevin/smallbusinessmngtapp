package com.mwororokevin.smallbusinessmanagement.service;

import com.mwororokevin.smallbusinessmanagement.model.Packaging;

import java.util.List;

public interface PackagingService {
    Packaging saveNewPackage(Packaging packaging);

    List<Packaging> getPackageList();

    Packaging getPackageById(Long productId);

    void deletePackageById(Long packageId);

    Packaging updatePackageById(Long packageId, Packaging packaging);
}
