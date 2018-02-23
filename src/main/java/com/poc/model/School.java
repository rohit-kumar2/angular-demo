package com.poc.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "SCHOOL")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class School implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "DistrictId")
    private District district;

    private String name;
    private int startGrade;
    private int lastGrade;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public District getDistrict() {
        return district;
    }

    public void setDistrict(District district) {
        this.district = district;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getStartGrade() {
        return startGrade;
    }

    public void setStartGrade(int startGrade) {
        this.startGrade = startGrade;
    }

    public int getLastGrade() {
        return lastGrade;
    }

    public void setLastGrade(int lastGrade) {
        this.lastGrade = lastGrade;
    }
}