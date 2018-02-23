package com.poc.model.repository;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Type;
import org.joda.time.DateTime;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.PreUpdate;

//import org.joda.time.DateTime;
//import org.joda.time.DateTime;

//@MappedSuperclass
public abstract class ModifiableEntity extends IdentifiableEntity {

    @Column(nullable = false)
    @Type(type = "org.jadira.usertype.dateandtime.joda.PersistentDateTime")
    @JsonIgnore
    private DateTime updatedDate;

    public DateTime getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(DateTime updatedDate) {
        this.updatedDate = updatedDate;
    }

    @Override
    protected void prePersist() {
        createdDate = new DateTime();
        updatedDate = new DateTime(createdDate);
    }

    @PreUpdate
    protected void preUpdate() {
        updatedDate = new DateTime();
    }


}