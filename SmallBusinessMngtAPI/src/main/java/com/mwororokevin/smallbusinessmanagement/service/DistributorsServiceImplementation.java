package com.mwororokevin.smallbusinessmanagement.service;

import com.mwororokevin.smallbusinessmanagement.model.Distributors;
import com.mwororokevin.smallbusinessmanagement.model.Users;
import com.mwororokevin.smallbusinessmanagement.repository.DistributorsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Service
public class DistributorsServiceImplementation implements DistributorsService {
    @Autowired
    private DistributorsRepository distributorsRepository;

    @Override
    public Distributors saveNewDistributor(Distributors distributor) {
        LocalDateTime localDateTime = LocalDateTime.now();
        distributor.setCreationDateTime(localDateTime);
        distributor.setUpdateDateTime(localDateTime);

        return distributorsRepository.save(distributor);
    }

    @Override
    public List<Distributors> getDistributorsList() {
        return distributorsRepository.findAll();
    }

    @Override
    public Distributors getDistributorById(Long distributorId) {
        return distributorsRepository.findById(distributorId).get();
    }

    @Override
    public void deleteDistributorById(Long distributorId) {
        distributorsRepository.deleteById(distributorId);
    }

    @Override
    public Distributors updateDistributor(Long distributorId, Distributors distributors) {
        Distributors distributorDB = distributorsRepository.findById(distributorId).get();

        if(Objects.nonNull(distributors.getSurname()) && !"".equalsIgnoreCase(distributors.getSurname())) {
            distributorDB.setSurname(distributors.getSurname());
        }

        if(Objects.nonNull(distributors.getOtherNames()) && !"".equalsIgnoreCase(distributors.getOtherNames())) {
            distributorDB.setOtherNames(distributors.getOtherNames());
        }

        if(Objects.nonNull(distributors.getEmail()) && !"".equalsIgnoreCase(distributors.getEmail())) {
            distributorDB.setEmail(distributors.getEmail());
        }

        distributorDB.setUpdateDateTime(LocalDateTime.now());

        return distributorsRepository.save(distributorDB);
    }

    @Override
    public Distributors getDistributorBySurname(String surname) {
        return distributorsRepository.findBySurnameIgnoreCase(surname);
    }

    @Override
    public Distributors getDistributorByOthernames(String othernames) {
        return distributorsRepository.findByOtherNamesIgnoreCase(othernames);
    }

    @Override
    public Distributors fetchDistributorByEmailIgnoreCase(String email) {
        return distributorsRepository.findByEmailIgnoreCase(email);
    }
}
