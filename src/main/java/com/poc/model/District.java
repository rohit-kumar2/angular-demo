package com.poc.model;

import com.poc.model.repository.IdentifiableEntity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "DISTRICTS")
public class District implements Serializable, Comparable<District> {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "stateId")
    private State state;
    private String name;

    @Column(length = 50)
    private String timeZoneJavaName;

    @Column(length = 20)
    private String subDomainName;

    @Column(columnDefinition = "tinyint default true")
    Boolean isCCSSCode;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTimeZoneJavaName() {
        return timeZoneJavaName;
    }

    public void setTimeZoneJavaName(String timeZoneJavaName) {
        this.timeZoneJavaName = timeZoneJavaName;
    }

    public String getSubDomainName() {
        return subDomainName;
    }

    public void setSubDomainName(String subDomainName) {
        this.subDomainName = subDomainName;
    }

    public Boolean getCCSSCode() {
        return isCCSSCode;
    }

    public void setCCSSCode(Boolean CCSSCode) {
        isCCSSCode = CCSSCode;
    }

    @Override
    public int compareTo(District district) {
        if (district.name == null) {
            return 0;
        }
        int primary = name.compareTo(district.name);
        return primary != 0 ? primary
                : name.compareTo(district.name);
    }
}