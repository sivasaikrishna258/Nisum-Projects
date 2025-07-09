package com.CountriesApi.POJOClasses;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude()

public class Root {
    public Name1 name;

    public Name1 getName() {
        return name;
    }

    public void setName(Name1 name) {
        this.name = name;
    }
}
