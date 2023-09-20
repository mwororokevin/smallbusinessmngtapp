package com.mwororokevin.smallbusinessmanagement.service;

import com.mwororokevin.smallbusinessmanagement.model.Packaging;
import com.mwororokevin.smallbusinessmanagement.repository.PackagingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Service
public class PackagingServiceImplementation implements PackagingService {
    @Autowired
    private PackagingRepository packagingRepository;

    @Override
    public Packaging saveNewPackage(Packaging packaging) {
        LocalDateTime localDateTime = LocalDateTime.now();

        packaging.setCreationDateTime(localDateTime);
        packaging.setUpdateDateTime(localDateTime);

        return packagingRepository.save(packaging);
    }

    @Override
    public List<Packaging> getPackageList() {
        return packagingRepository.findAll();
    }

    @Override
    public Packaging getPackageById(Long productId) {
        return packagingRepository.findById(productId).get();
    }

    @Override
    public void deletePackageById(Long packageId) {
        packagingRepository.deleteById(packageId);
    }

    @Override
    public Packaging updatePackageById(Long packageId, Packaging packaging) {
        Packaging packagingDB = packagingRepository.findById(packageId).get();

        packagingDB.setPackagingSize(packagingDB.getPackagingSize());

        if(Objects.nonNull(packagingDB.getMetricUnit()) && !"".equalsIgnoreCase(packagingDB.getMetricUnit())) {
            packagingDB.setMetricUnit(packagingDB.getMetricUnit());
        }

        packagingDB.setUpdateDateTime(LocalDateTime.now());

        return packagingRepository.save(packagingDB);
    }
}
