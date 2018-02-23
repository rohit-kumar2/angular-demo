package com.poc.model.repository;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;
import org.hibernate.annotations.Type;
import org.joda.time.DateTime;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;

//@MappedSuperclass
public abstract class IdentifiableEntity {

    @Column(nullable = false, updatable = false)
    @Type(type = "org.jadira.usertype.dateandtime.joda.PersistentDateTime")
    @JsonIgnore
    protected DateTime createdDate;

    @PrePersist
    protected void prePersist() {
        createdDate = new DateTime();
    }

    @Override
    public boolean equals(final Object obj) {
        if (obj == null) {
            return false;
        }
        if (this == obj) {
            return true;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }

        IdentifiableEntity entity = (IdentifiableEntity) obj;
        if (getId() == 0 && entity.getId() == 0) {
            return false;
        }
        return new EqualsBuilder().append(getId(), entity.getId()).isEquals();
    }

    public abstract int getId();

    //@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    public DateTime getCreatedDate() {
        if (createdDate == null) {
            createdDate = new DateTime();
        }
        return createdDate;
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder().append(getId()).hashCode();
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this).append("id", getId()).toString();
    }
}