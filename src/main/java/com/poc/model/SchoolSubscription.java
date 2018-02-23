package com.poc.model;

import com.poc.model.enums.Languages;
import org.hibernate.annotations.Index;

import javax.persistence.*;
import java.io.Serializable;


/**
 * Created by Gaurav on 9/11/2016
 */

@Entity
@Table(name = "SCHOOLSUBSCRIPTION")
public class SchoolSubscription implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "schoolId")
    @Index(name = "Subscription_school_id")
    private School school;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subscriptionDetailId")
    @Index(name = "Subscription_detail_id")
    private SubscriptionDetail subscriptionDetailId;

    private int schoolSubscriptions;

    @Enumerated(EnumType.STRING)
    private Languages primaryLanguage;

    @Enumerated(EnumType.STRING)
    private Languages secondaryLanguage;

    @Column(columnDefinition = "tinyint(1) default 0")
    private int requestedMore;

    public static SchoolSubscriptionBuilder getAddressBuilder() {
        return new SchoolSubscriptionBuilder();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public School getSchool() {
        return school;
    }

    public void setSchool(School school) {
        this.school = school;
    }

    public SubscriptionDetail getSubscriptionDetailId() {
        return subscriptionDetailId;
    }

    public void setSubscriptionDetailId(SubscriptionDetail subscriptionDetailId) {
        this.subscriptionDetailId = subscriptionDetailId;
    }

    public int getSchoolSubscriptions() {
        return schoolSubscriptions;
    }

    public void setSchoolSubscriptions(int schoolSubscriptions) {
        this.schoolSubscriptions = schoolSubscriptions;
    }

    public Languages getPrimaryLanguage() {
        return primaryLanguage;
    }

    public void setPrimaryLanguage(Languages primaryLanguage) {
        this.primaryLanguage = primaryLanguage;
    }

    public Languages getSecondaryLanguage() {
        return secondaryLanguage;
    }

    public void setSecondaryLanguage(Languages secondaryLanguage) {
        this.secondaryLanguage = secondaryLanguage;
    }

    public int getRequestedMore() {
        return requestedMore;
    }

    public void setRequestedMore(int requestedMore) {
        this.requestedMore = requestedMore;
    }

    public static class SchoolSubscriptionBuilder {
        private SchoolSubscription schoolSubscription;

        public SchoolSubscriptionBuilder() {
            schoolSubscription = new SchoolSubscription();
        }

        public SchoolSubscriptionBuilder school(final School school) {
            schoolSubscription.school = school;
            return this;
        }

        public SchoolSubscriptionBuilder subscriptionDetailId(final SubscriptionDetail subscriptionDetailId) {
            schoolSubscription.subscriptionDetailId = subscriptionDetailId;
            return this;
        }


        public SchoolSubscriptionBuilder schoolSubscriptions(final int schoolSubscriptions) {
            schoolSubscription.schoolSubscriptions = schoolSubscriptions;
            return this;
        }

        public SchoolSubscriptionBuilder requestMore(final int requestedMore) {
            schoolSubscription.requestedMore = requestedMore;
            return this;
        }

        public SchoolSubscriptionBuilder primaryLanguage(final Languages primaryLanguage) {
            schoolSubscription.primaryLanguage = primaryLanguage;
            return this;
        }

        public SchoolSubscriptionBuilder secondaryLanguage(final Languages secondaryLanguage) {
            schoolSubscription.secondaryLanguage = secondaryLanguage;
            return this;
        }

        public SchoolSubscription build() {
            return schoolSubscription;
        }
    }

}
