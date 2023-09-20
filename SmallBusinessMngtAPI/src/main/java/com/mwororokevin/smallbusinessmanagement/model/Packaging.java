package com.mwororokevin.smallbusinessmanagement.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Packaging {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "packaging_id")
    private Long packagingId;

    @Column(name = "packaging_size")
    private int packagingSize;

    @NotBlank(message = "Please add the volume measurement Millilitres or Litres")
    private String metricUnit;

    @Column(name = "creation_date_time")
    private LocalDateTime creationDateTime;

    @Column(name = "update_date_time")
    private LocalDateTime updateDateTime;
}
