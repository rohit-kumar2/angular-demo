package com.poc.model;

import com.poc.model.repository.IdentifiableEntity;
import org.hibernate.annotations.Sort;
import org.hibernate.annotations.SortType;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "STATES")
public class State implements Serializable {

    @Id
    int id;

    @Column(length = 100, nullable = false)
    private String name;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JoinColumn(name = "stateId")
    @OrderBy("name ASC")
    @Sort(type = SortType.NATURAL)
    private Set<District> district = new HashSet<>();
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JoinColumn(name = "stateId")
    @OrderBy("name ASC")
    @Sort(type = SortType.NATURAL)
    private Set<City> city = new HashSet<>();
    @Column(length = 2, nullable = false)
    @Basic(optional = false)
    private String code;
    @Column(length = 2, nullable = false)
    private String countryCode;
    @Column(columnDefinition = "tinyint(1) default 1")
    private int displayInd;
    @Column(length = 50)
    private String timeZoneJavaName;

    public Set<City> getCity() {
        return city;
    }

    public void setCity(Set<City> city) {
        this.city = city;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Set<District> getDistrict() {
        return district;
    }

    public void setDistrict(Set<District> district) {
        this.district = district;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public int getDisplayInd() {
        return displayInd;
    }

    public void setDisplayInd(int displayInd) {
        this.displayInd = displayInd;
    }

    public String getTimeZoneJavaName() {
        return timeZoneJavaName;
    }

    public void setTimeZoneJavaName(String timeZoneJavaName) {
        this.timeZoneJavaName = timeZoneJavaName;
    }
}