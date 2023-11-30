package com.mwororokevin.smallbusinessmanagement.Distributors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class DistributorsController {
    @Autowired
    private DistributorsService distributorsService;

    private final Logger LOGGER = LoggerFactory.getLogger(DistributorsController.class);

    @PostMapping("/distributors")
    public Distributors saveNewDistributor(@RequestBody Distributors distributor) {
        return distributorsService.saveNewDistributor(distributor);
    }

    @GetMapping("/distributors")
    public List<Distributors> getAllUsers() {
        LOGGER.info("Inside getAllUsers of DistributorsController");
        return distributorsService.getDistributorsList();
    }

    @GetMapping("/distributors/{id}")
    public Distributors getDistributorById(@PathVariable("id") Long distributorId) {
        LOGGER.info("Inside getDistributorById of DistributorsController");
        return distributorsService.getDistributorById(distributorId);
    }

    @DeleteMapping("distributors/{id}")
    public String deleteDistributorById(@PathVariable("id") Long distributorId) {
        LOGGER.info("Inside deleteDistributorById of DistributorsController");
        distributorsService.deleteDistributorById(distributorId);
        return "Distributor Deleted successfully";
    }

    @PutMapping("/distributors/{id}")
    public Distributors updateDistributor(@PathVariable("id") Long distributorId, @RequestBody Distributors distributors) {
        LOGGER.info("Inside updateDistributor of DistributorsController");
        return distributorsService.updateDistributor(distributorId, distributors);
    }

    @GetMapping("/distributors/surname/{surname}")
    public Distributors getDistributorBySurname(@PathVariable("surname") String surname) {
        LOGGER.info("Inside getDistributorBySurname of DistributorsController");
        return distributorsService.getDistributorBySurname(surname);
    }

    @GetMapping("/distributors/othernames/{othernames}")
    public Distributors getDistributorByOthernames(@PathVariable("othernames") String othernames) {
        LOGGER.info("Inside getDistributorByOthernames of DistributorsController");
        return distributorsService.getDistributorByOthernames(othernames);
    }

    @GetMapping("/distributors/email/{email}")
    public Distributors fetchDistributorByEmail(@PathVariable("email") String email) {
        LOGGER.info("Inside fetchDistributorByEmail of DistributorsController");
        return distributorsService.fetchDistributorByEmailIgnoreCase(email);
    }
}
