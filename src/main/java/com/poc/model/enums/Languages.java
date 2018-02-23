package com.poc.model.enums;

public enum Languages {
    EN("ENGLISH"), ES("SPANISH"), PN("PUNJABI");

    private String code;

    Languages(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}