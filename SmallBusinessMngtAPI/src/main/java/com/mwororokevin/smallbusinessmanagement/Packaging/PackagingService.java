package com.mwororokevin.smallbusinessmanagement.Packaging;

import com.mwororokevin.smallbusinessmanagement.Packaging.Packaging;

import java.util.List;

public interface PackagingService {
    Packaging saveNewPackage(Packaging packaging);

    List<Packaging> getPackageList();

    Packaging getPackageById(Long productId);

    void deletePackageById(Long packageId);

    Packaging updatePackageById(Long packageId, Packaging packaging);
}
