package com.poc.model;

/**
 * Created by sushant on 29/8/16.
 */

import org.hibernate.annotations.Index;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "SUBSCRIPTIONDETAILS")
public class SubscriptionDetail implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "districtId")
    @Index(name = "Subscription_district_id")
    private District district;

    private int totalSubscriptions;

    @Column(name = "course")
    private String course;

    @Column(columnDefinition = "tinyint(1) default 0")
    private int requestedMore;

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

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public int getTotalSubscriptions() {
        return totalSubscriptions;
    }

    public void setTotalSubscriptions(int totalSubscriptions) {
        this.totalSubscriptions = totalSubscriptions;
    }

    public int getRequestedMore() {
        return requestedMore;
    }

    public void setRequestedMore(int requestedMore) {
        this.requestedMore = requestedMore;
    }
}
