package com.mwororokevin.smallbusinessmanagement.service;

import com.mwororokevin.smallbusinessmanagement.model.Distributors;

import java.util.List;

public interface DistributorsService {
    public Distributors saveNewDistributor(Distributors distributor);

    public List<Distributors> getDistributorsList();

    Distributors getDistributorById(Long distributorId);

    public void deleteDistributorById(Long distributorId);

    public Distributors updateDistributor(Long distributorId, Distributors distributors);

    public Distributors getDistributorBySurname(String surname);

    public Distributors getDistributorByOthernames(String othernames);

    public Distributors fetchDistributorByEmailIgnoreCase(String email);
}
